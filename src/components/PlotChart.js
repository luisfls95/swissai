import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react"
import React from 'react';
import {Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend} from 'chart.js';
import { Scatter } from 'react-chartjs-2';


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);


const PlotChart = forwardRef((props, ref) => {

    const [plotValues, setPlotValues] = useState([])
    const hashMap = useRef(new Map())
    const selectedValuesHash = useRef(new Map())



    useEffect(()=> {
        let values = props.plot.plot.values
        for (let i = 0; i<values.length; i++){
            hashMap.current.set(values[i].mix_id, {x: values[i].IRR, y: values[i].CAPEX})
        }


    }, [])

    useImperativeHandle(ref, () => ({
        
        addToChart (mix_idArray) {
            
            const currentkeys = new Set(Array.from(selectedValuesHash.current.keys()))
            console.log(currentkeys)
            
            mix_idArray.forEach(mix_id => {

              if (currentkeys.has(mix_id)) currentkeys.delete(mix_id)
              
              selectedValuesHash.current.set(mix_id, hashMap.current.get(mix_id))
              

            });

            console.log(currentkeys)
            console.log(Array.from(currentkeys.keys()))
            Array.from(currentkeys.keys()).forEach((mix_id)=>{
              selectedValuesHash.current.set(mix_id, {})
            })
            
            //console.log(selectedValuesHash)
            setPlotValues(Array.from(selectedValuesHash.current.values()))
        }

    }));

    



    let plotInfo = props.plot
    console.log(plotInfo)

    const options = {
        scales: {
          x: {
            title: {
              color: 'red',
              display: true,
              text: props.plot.plot.x_label
            }
          },
          y: {
            title: {
              color: 'red',
              display: true,
              text: props.plot.plot.y_label
            }
          }
          
        }
    };
    

    const data = {
        datasets: [
          {
            label: plotInfo.plot.name,
            data: plotValues,
            backgroundColor: 'rgba(255, 99, 132, 1)',
          },
        ],
    };

    

    return (<>
        <Scatter options={options} data={data} />
        {/*<button onClick={selectValue} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">SendId</button>*/}
    </>);

})

export default PlotChart