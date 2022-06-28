import ParamIndi from "./ParamIndi"

const ParamGroup = (props) => {
    let {label, values} = props.group


    return (<>
        <h3>{label}</h3>
        {values.map((elem, index, array)=> <ParamIndi key={index} elem={elem}/>)}
    </>)
}

export default ParamGroup