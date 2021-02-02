import React, { useState } from 'react'
import '../components/css/progress.css'


const Progress = (props) => {
    let completeColor;
    (props.percent=='100')? completeColor='green':completeColor='rgb(255, 115, 0)';
    let style1={color:completeColor,fontWeight:'bold'}
    return (

        <>
            <div class="bar">
          <svg>
            <circle cx='50%' cy='50%' r="50%" style={{stroke:completeColor}}></circle>
          </svg>
          <p><span style={style1}>{props.percent}%</span><br/><span style={{color:'grey'}}>Completed</span></p>
        </div>
        </>
    )
}

export default Progress;
