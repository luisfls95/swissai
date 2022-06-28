import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = (props) => {

    //console.log(props.plot)

    const options = {
        plugins: {
          title: {
            display: true,
            text: props.plot.name,
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked:true,
            title: {
              color: 'red',
              display: true,
              text: props.plot.x_label
            }
          },
          y: {
            stacked:true,
            title: {
              color: 'red',
              display: true,
              text: props.plot.y_label
            }
          }
          
        }
    };
    

    const labels = [];

    const colors = ['rgb(255, 99, 132)', 'rgb(75, 192, 192)', 'rgb(53, 162, 235)']

    const datasets =[]

    for (let i=0; i<props.plot.legend.length; i++) {
        datasets.push({label: props.plot.legend[i], data : [], backgroundColor: colors[i]})
    }


    ;

    for (let i=0; i<props.plot.values.length; i++) {
        let elem = props.plot.values[i]
        labels.push(elem.year)
        for (let a=0; a<props.plot.y_values_ref.length; a++) {
            datasets[a].data.push(elem[props.plot.y_values_ref[a]])
        }
    }

    //console.log(datasets)
    //console.log(labels)





    const data = {
        labels,
        datasets: datasets,
    };

    return <Bar options={options} data={data} />;

}

export default StackedBarChart