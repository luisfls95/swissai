import { useState, createContext, useContext} from "react"
import { getToken, proxyRequest } from "./Functions"
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import logo2 from '../images/logo2.png'
import logo from '../images/logo.png'









const Login = (props) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userClass, setUserClass] = useState("bg-white")
    const [passwordClass, setPasswordClass] = useState("bg-white")
    let navigate = useNavigate();
    
    const updateUser = (e) => {
        setUsername(e.target.value)
        if (userClass != 'bg-white') setUserClass('bg-white')
        if (passwordClass != 'bg-white') setPasswordClass('bg-white')
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
        if (userClass != 'bg-white') setUserClass('bg-white')
        if (passwordClass != 'bg-white') setPasswordClass('bg-white')
    }

    const handleSubmission = (e)=>{
        e.preventDefault()        
        getToken(username, password)
        .then(r=>{
            // if true login was successful
            if (r.code == undefined) {
                props.defineUser(r)
                navigate("/home", { replace: true })
            }
            else {
                // display wrong password and try gain, or display r.msg
                setUserClass("bg-red-300")
                setPasswordClass("bg-red-300")
                // dar focus noutra parte
            }
        })
        
        
    }
    


    return (<>
        

        <section className="h-full gradient-form bg-gray-200 md:h-screen">
  <div className="container py-12 px-6 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="xl:w-10/12">
        <div className="block bg-white shadow-lg rounded-lg">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                  <img
                    className="mx-auto w-48"
                    src={logo}
                    alt="logo"
                  />
                  <br/>
                </div>
                <form>
                  <p className="mb-4">Please login to your account</p>
                  <div className="mb-4">
                    <input
                      type="text"
                      className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 ${userClass} bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                      placeholder="Username"
                      autoFocus
                      onChange={updateUser}
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className={`form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 ${passwordClass} bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
                      placeholder="Password"
                      onChange={updatePassword}
                    />
                  </div>
                  <div className="text-center pt-1 mb-12 pb-1">
                    <button
                      className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{background: "linear-gradient(#e66465, #9198e5)" }}
                      onClick={handleSubmission}
                      >
                      Log in
                    </button>
                    <a className="text-gray-500" href="#!">Forgot password?</a>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
              
            >
              <div className=" px-4 py-6 md:p-12 md:mx-6">
              <div className="text-center">
                  <img
                    className="mx-auto w-64"
                    src={logo2}
                    alt="logo"
                  />
                  <br/>
                </div>
                <h4 className="text-xl font-semibold mb-6">Graphical Interface for Swissai's ML models</h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        
        
    </>)
}

export default Login
