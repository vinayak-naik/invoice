import React, { useState } from 'react'
import '../components/css/card.css'
import Progress from './Progress';

// const bgChange=()=>{
//     document.getElementById('card-container').style.background='#ffffe2';
//     document.getElementById('card-lower-box').style.background='white';
// }

const Card = (props) => {
    const[bg,setBg]=useState('white');
    const[lowerBoxBg,setlowerBoxBg]=useState('rgb(250,250,250)');

    const bgChange=()=>{
        let newBg='rgb(255, 255, 220)'
        setBg(newBg)
        setlowerBoxBg('white')
    }
    let progressColor;
    let paymentColor;
    (props.progress=='Completed')? progressColor='green':progressColor='rgb(255, 115, 0)';
    (props.payment=='Paid')? paymentColor='green':paymentColor='rgb(255, 115, 0)';
    return (
       <div className="card-container" onClick={bgChange} style={{backgroundColor:bg}}>
           <div className="card-upper">
               <div className="card-upper-left"><Progress completed='green' percent={props.percent}/></div>
               <div className="card-upper-middle">
                   <h1>Parchi</h1>
                   <h2>ATS Technology</h2>
                   <p><span style={{color:progressColor}}>{props.progress} </span><span>| {props.dueDate}</span></p>
               </div>
               <div className="card-upper-right">
                   <div className="card-rupees" style={{color:paymentColor}}>{props.rupees}</div>
                   <div className="card-payment" style={{backgroundColor:paymentColor}}>{props.payment}</div>
               </div>
           </div>
           <div className="card-lower">
               <div className="card-lower-box"  style={{backgroundColor:lowerBoxBg}}>
                   <div className="card-lower-box-left">
                       <h2>Rakesh Gupta</h2>
                       <p>9946355225 | rakesh@gmail.com</p>
                   </div>
                   <div className="card-lower-box-right">
                   <h2>{props.total}</h2>
                       <p>{props.paid}</p>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Card
