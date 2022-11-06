import './Chart.css';

import React from 'react';
import ChartBar from './ChartBar';

const Chart = (props) => {
    return (
        <div className='chart'>
            {props.dataPoint.map(elem=>{
                return <ChartBar
                id={elem.label} 
                label={elem.label} 
                value={elem.value} 
                maxValue={null}/>
            })}   
        </div>
    );
};



export default Chart;
