import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Transition } from "@headlessui/react";
import logo2 from '../images/logo2.png'

function Nav(props) {
    let navigate = useNavigate();

    const handleClick = () => {
        console.log("logout")
        props.defineUser(undefined)
        navigate("/", { replace: true })
    }
    
    console.log(props.toDemand)
    let buttonsJsx
    if (props.toDemand != undefined) buttonsJsx = (<>
        <a href="#" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={props.toDemand}>Demand</a>
        <a href="#"className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={props.toFacilities}>Facilities</a>
    </>)
    else buttonsJsx = <></>



    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="z-40">
        <nav className="bg-gray-800">
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-12">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img
                        className="h-8 "
                        src={logo2}
                        alt="Workflow"
                        />
                    </div>
                    <div className="flex">
                        <div className="ml-10 flex items-baseline space-x-4">
                        {buttonsJsx}
                        <a
                            href="#"
                            className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                            onClick={handleClick}
                        >
                            Logout
                        </a>
                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                
                </div>
            </div>
            </div>

            
        </nav>

        
        </div>
    );
}

export default Nav;
