import Mapbox from "./Mapbox"
import PlotChart from "./PlotChart"
import Table from "./Table"
import { useState, useRef } from "react"

const Facilities = (props) => {

    
    const plotChildRef = useRef(null)
    const mapChildRef = useRef(null)
    const results = props.mResults
    const info = props.mainInfo
    let mapbox, plotchart, tablesection

    const checkBox = (array) => {
        addOrRemove(array)

    }
    
    const addOrRemove = (mix_idArray) => {
       
        plotChildRef.current.addToChart(mix_idArray)
        //mapChildRef.current.addLayer(mix_id)
        
        
    };

    console.log(info)
    if ( results == undefined || results.model != 'facilities' || info == undefined) {
        mapbox = <>Loading</>
        plotchart = <>Loading</>
        tablesection = <>Loading</>
    }
    else {
        mapbox = <Mapbox ref={mapChildRef} map={results.results[3]} mainInfo={info} projectDetails={props.projectDetails}/>
        plotchart= <PlotChart ref={plotChildRef} plot={results.results[0]} />
        tablesection = <Table checkHandler={checkBox} table={results.results[2]}/>
    }

    


    let facilitiesJSX = (<div className="">
        <div className="flex flex-row">
            <div className="basis-1/2 place-self-center">{plotchart}</div>
            <div className="basis-1/2 ">{mapbox}</div>
        </div>
        <div className="flex flex-row  overflow-auto h-80">
            <div className="basis-full ">{tablesection}</div>

        </div>
    </div>)


    return facilitiesJSX
}

export default Facilities