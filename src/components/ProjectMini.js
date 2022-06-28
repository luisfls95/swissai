import { useNavigate } from "react-router-dom";
import { getImage } from "./Functions";
import { useState, useEffect } from "react";


const ProjectMini = (props) => {

    const [imageSrc, setImageSrc] = useState("") // place here a correct size template

    let project = props.obj
    //console.log(project)
    let navigate = useNavigate();
    
    const handleNavigation = () => {
        navigate(`/project/${project.project_id}`, { replace: true })
    }

    

    useEffect(()=>{
        console.log("tou?")
        getImage({center: project.latitude+","+project.longitude, zoom: "12"})
        .then(r=>{
            console.log("setting image")
            setImageSrc(r.cloud_url)
        })
    }, [])

    let newJSX = (  <div className="rounded overflow-hidden shadow-lg bg-gray-100">
                        <img className="w-full" src={imageSrc} alt={project.city_name}/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{project.project_name}</div>
                                <p className="text-gray-700 text-base">
                                    {`City of ${project.city_name} with population of ${project.population} people.`}
                                </p>
                                <p className="text-gray-700 text-base">
                                    {`Scenario ${project.scenario_id} available.`}
                                </p>
                            </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${project.blocks} blocks`}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`${project.chargers} chargers`}</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`Density of ${project.density} `}</span>
                        </div>
                        <div className="text-end">
                            <button onClick={handleNavigation} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-6 mb-6 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>)
    
    return newJSX
}

export default ProjectMini