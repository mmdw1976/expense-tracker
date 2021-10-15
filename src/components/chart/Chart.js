import React from 'react';

import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointsValues) // destruct array so you get only the values Math.max only works with numbers
    return ( 
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                return <ChartBar 
                key={dataPoint.id}
                value={dataPoint.value} 
                maxValue={totalMaximum} 
                label={dataPoint.label} 
                />
            })}
        </div>
     );
}
 
export default Chart;