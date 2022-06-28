import ParamGroup from "./ParamGroup"
import ParamDropdown from "./ParamDropdown"

const ParamsSide = (props) =>{
    console.log(props.params)
    console.log(props.model)

    let paramsjsx = props.params.map((elem, index, array)=>{
        if (!elem.hidden) return <ParamDropdown key={props.model+index} model={props.model} group={elem}/>
    })

    console.log(props.params)

    return (<div>
        <aside className="w-full h-full" aria-label="Sidebar">
            <div className=" py-6  bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2 ">
                    {paramsjsx}
                </ul>
            </div>
        </aside>
        
    </div>)
}

export default ParamsSide