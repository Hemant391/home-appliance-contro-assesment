import React, { useState } from "react";

export default function Ac() {
 
  const[onoff,setOnOff]=useState(false)
  const [temperature, setTemperature] = useState(20);
  return (
    <div className="ControlsBox">
      <h1>AC</h1>
      <div className="wrapper">
        <h3>Power Switch :</h3>
        {onoff?( <button style={{backgroundColor:"Green",width:"70px"}} onClick={()=>setOnOff(!onoff)}>On</button>):( <button style={{backgroundColor:"red",width:"70px"}} onClick={()=>setOnOff(!onoff)}>Off</button>)}
       
      </div>
      {onoff?(<p className="turnon">This turn it on</p>):(
 <div className="manualcontrol">
 <label>Temperature: {temperature}°C</label>
 <input
   type="range"
   min="16"
   max="30"
   value={temperature}
   onChange={(e) => setTemperature(e.target.value)}
 />
</div>
      )}
     
      
    </div>
  );
}
