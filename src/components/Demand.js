import LineChart from "./LineChart"
import StackedBarChart from "./StackedBarChart"

const Demand = (props) => {
    console.log(props.mResults)
    // se aqui foi undefined ir ja dando load aos graficos todos sem os dados e depois adicionam-se os dados
    let firstPlotJSX,secondPlotJSX, thirdPlotJSX

    if (props.mResults == undefined || props.mResults.model != 'demand') {
        firstPlotJSX = <>Loading</>
        secondPlotJSX = <>Loading</>
        thirdPlotJSX = <>Loading</>
    }
    else {
        firstPlotJSX = <LineChart plot={props.mResults.results[0].plot}/>
        secondPlotJSX = <StackedBarChart plot={props.mResults.results[1].plot}/>
        thirdPlotJSX = <LineChart plot={props.mResults.results[2].plot}/>
    }



    let demandJSX = (<div className="bg-gray-200 h-full overflow-auto">
        <div className="flex flex-row mx-20 py-20">
            <div className="basis-full">{firstPlotJSX}</div>
        </div>
        <div className="flex flex-row mx-20 py-20">
            <div className="basis-full">{secondPlotJSX}</div>
        </div>
        <div className="flex flex-row mx-20 py-20">
            <div className="basis-full">{thirdPlotJSX}</div>
        </div>
    </div>)

    return demandJSX
}

export default Demand