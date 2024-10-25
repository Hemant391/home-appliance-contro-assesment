import React, { useState } from "react";
import "../App.css";

export default function Fan() {
   const [speed, setSpeed] = useState(1);
   const[onoff,setOnOff]=useState(false)
  return (
    <div className="ControlsBox ">
      <h1>Fan</h1>
      <div className="wrapper" >
        <h3>Power Switch :</h3>
        {onoff?( <button style={{backgroundColor:"Green",width:"70px"}} onClick={()=>setOnOff(!onoff)}>On</button>):( <button style={{backgroundColor:"red",width:"70px"}} onClick={()=>setOnOff(!onoff)}>Off</button>)}
       
      </div>
      {onoff?(<p className="turnon">Turn the switch on </p>):(
         <div className="manualcontrol">
         <label>Speed: {speed}</label>
         <input
           type="range"
           min="1"
           max="5"
           value={speed}
           onChange={(e) => setSpeed(e.target.value)}
         />
       </div>
      )}
     
    </div>
  );
}
