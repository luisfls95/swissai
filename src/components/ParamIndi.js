import { useState } from "react"

const ParamIndi = (props) => {
    let {label, type, min, max, current} = props.elem
    const [currentValue, setCurrentValue] = useState(current)
    let step, numberInput, optionsInput

    if (type == 'float') step = "0.1"
    else if (type == 'int') step = "1"

    const Slidebar = (e) => {
        //console.log(e.target.value)
        setCurrentValue(e.target.value)
    }

    numberInput = (<><input type={"range"} min={min} max={max} value={currentValue} step={step} onChange={Slidebar} ></input><label>{currentValue}</label></>)
    if (type == 'options'){
        optionsInput = (<select name="Options">
                        {props.elem.options.map((newElem, index, array) => {
                            return <option key={index} value={newElem}>{newElem}</option>
                        })}
                    </select>)
    }
   
    // missing when type is plot
    

    

    
    
    
    return (<>
        <p>{label}</p>
        <p>{type}</p>
        {type == 'options' ? optionsInput : numberInput}
        
    </>)
}

export default ParamIndi