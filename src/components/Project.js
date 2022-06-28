import { useParams } from "react-router-dom";
import { proxyRequest } from "./Functions"
import { useEffect, useState } from "react"
import ParamsSide from "./ParamsSide";
import Facilities from "./Facilities";
import Demand from "./Demand";
import Nav from "./Nav";

const Project = (props) => {
    const {auth_key} = props.user
    const {projectId} = useParams();
    const [projectScenarios, setProjectScenarios] = useState()
    const [projectMainInfo, setProjectMainInfo] = useState()
    const [modelParams, setModelParams] = useState([])
    const [modelResults, setModelResults] = useState(undefined)
    const [selectedModel, setSelectedModel] = useState("demand")



 

    useEffect(() => {
        const projectsUrl = `https://apidemo.swissai.com/api/v1/management/projects?auth_key=${auth_key}`
        
        proxyRequest(projectsUrl)
        .then(r=>{
            console.log(r.projects[0])
            setProjectMainInfo(r.projects[0])
        })

    }, []);



    useEffect(()=>{
        console.log(projectMainInfo)
                
        const scenarioId = 1 //projectScenarios.scenarios[0].scenario_id
        //console.log(scenarioId)
        
        const modelParamsUrl = `https://apidemo.swissai.com/api/v1/management/stage1_simulation/model_getParameters?auth_key=${auth_key}&project_id=${projectId}&scenario_id=${scenarioId}&model=${selectedModel}`
        const modelResultsUrl = `https://apidemo.swissai.com/api/v1/management/stage1_simulation/model_getResults?auth_key=${auth_key}&project_id=${projectId}&scenario_id=${scenarioId}&model=${selectedModel}`
        
        
        proxyRequest(modelParamsUrl)
        .then(r=>{
            console.log(r)
            setModelParams(r.parameters)
            return r.status
        })
        .then(rstatus => {
            if (rstatus == 100){
                proxyRequest(modelResultsUrl)
                .then(r=>{
                    console.log(r)
                    setModelResults({model: selectedModel, results: r.results})
                })
            }
        })
    }, [selectedModel])

    const modelToDemand = () => {
        setSelectedModel('demand')
    }

    const modelToFacilities = () => {
        setSelectedModel('facilities')
    }

    
    let details = {
        auth_key: auth_key,
        project_id: projectId,
        scenario_id: 1, // change this to usestate
        model: selectedModel
    }

   


    return <div className=" bg-gray-100 h-screen chosen-font ">
        <Nav defineUser={props.defineUser} toDemand={modelToDemand} toFacilities={modelToFacilities}/>
        
        
        
        <div className="flex flex-row h-full">
            <div className="basis-1/4 bg-gray-800 ">
                <div className="text-3xl text-center text-gray-200"><b>Project {projectId}</b> - Parameters</div>
                {<ParamsSide params={modelParams} model={selectedModel}/>}
            </div>
            <div className="basis-3/4 bg-gray-200 h-full">
                {selectedModel == 'demand' ? <Demand mResults={modelResults}/> : <Facilities projectDetails={details} mResults={modelResults} mainInfo={projectMainInfo} />}
                </div>
        </div>
        


    </div>
}

export default Project