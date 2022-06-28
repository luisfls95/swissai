import { useState } from "react"
import ParamDropdownChild from "./ParamDropdownChild"

const ParamDropdown = (props) => {

    //console.log(props.group)

    const [hidden, setHidden] = useState("hidden")

    const handleClick = () => {
        if (hidden == "hidden") setHidden("")
        else setHidden("hidden")
    }

    const dropdownChildren = props.group.values.map((elem, index, array)=>{
        if (elem.type == "int" || elem.type == 'float') return <ParamDropdownChild key={"dd"+props+index} element={elem}/>
        else {
            // create a new element to display plots
        }
    })

    return (<li>
            <button onClick={handleClick} type="button" className="flex items-center p-2 text-base font-normal w-full text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <span className="flex-1 ml-1 text-left whitespace-nowrap"><b>{props.group.label}</b></span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            
            <ul className={hidden + " py-2 space-y-2"}>
                
                {dropdownChildren}
                  
            </ul>
            
    </li>)
}
export default ParamDropdown