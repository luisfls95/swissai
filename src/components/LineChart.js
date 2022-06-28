import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = (props) => {
    const pointNum = 100 

    console.log(props.plot)

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: props.plot.legend[0],
          },
        },
        scales: {
          x: {
            title: {
              color: 'red',
              display: true,
              text: props.plot.x_label
            }
          },
          y: {
            title: {
              color: 'red',
              display: true,
              text: props.plot.y_label
            }
          }
          
        }
    };

    const labels = []
    const points = []
    console.log()
    const averageNumPoint = Math.floor(props.plot.values.length/pointNum)
    let currentIndex = 0

    while (currentIndex < props.plot.values.length){
        labels.push(currentIndex)

        let splitArray = props.plot.values.slice(currentIndex, currentIndex+averageNumPoint)
        let powerValuesArray = splitArray.map((elem) => elem.power_consumption)
        let sum = powerValuesArray.reduce((partialSum, a) => partialSum + a, 0)
        let average = sum/splitArray.length
        currentIndex+=averageNumPoint
        points.push(average)
    }
    //console.log(points)

    

    const data = {
        labels,
        datasets: [
          {
            label: props.plot.name,
            data: points,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };

    
    return <Line options={options} data={data} />;

}

export default LineChart