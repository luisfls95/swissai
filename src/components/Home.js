import { proxyRequest } from "./Functions"
import { useState, useEffect } from "react"
import ProjectMini from "./ProjectMini"
import Nav from "./Nav"

const Home = (props) =>  {
    let {auth_key, fullname, groups, language} = props.user
    const [projects, setProjects] = useState([])
    console.log(auth_key)
    let url = `https://apidemo.swissai.com/api/v1/management/projects?auth_key=${auth_key}`
    
    console.log(projects)

    useEffect(() => {
        proxyRequest(url)
        .then(r=>setProjects(r.projects))
    }, []);


    return (<div className="h-screen bg-gray-200">
        <Nav defineUser={props.defineUser}/>
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            </div>
        </header>
       
        

        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {projects.map((elem, index, array) => {
                return <ProjectMini key={elem.admId} obj={elem}/>
            })}
        </div>

    </div>)
}

export default Home