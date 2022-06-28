import { useState } from "react"

const ParamDropdownChild = (props) => {
    //console.log(props.element)
    let {label, min, mix, max, type} = props.element
    
    let step
    if (type == 'float') step = 0.1
    else if (type == 'int') step = 1

    

    const [inputJsx, setInputJsx] = useState(<></>)
    const [textClass, setTextClass] = useState("")

    const [currentValue, setCurrentValue] = useState(props.element.current)

    const textJsx = <span className={textClass}>{label}</span>

    const slideBar = (e) => {
        setCurrentValue(e.target.value)
        setInputJsx(<input className="absolute cursor-pointer" type={"range"} min={min == undefined ? mix:min} max={max} value={e.target.value} step={step} onChange={slideBar}/>)
    }

    const handleEnter = () => {
        setInputJsx(<input className="absolute cursor-pointer" type={"range"} min={min == undefined ? mix:min} max={max} value={currentValue} step={step} onChange={slideBar}/>)
        setTextClass("visibility-hidden")
    }

    const handleOut = () => {
        setInputJsx(<></>)
        setTextClass("")
    }

    let classes = " cursor-pointer relative flex items-center justify-between p-2 pl-11 pr-5 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"

    return (<li className="cursor-pointer" onMouseEnter={handleEnter} onMouseLeave={handleOut}> 
                <span className={classes}>
                    {textJsx}
                    {inputJsx}
                    <span className="inline-block ml-3" >{currentValue}</span>
                </span>
            </li>)
}

export default ParamDropdownChild