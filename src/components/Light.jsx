import React, { useState } from "react";


export default function Light() {
    const [brightness, setBrightness] = useState(50);
    const[onoff,setOnOff]=useState(false);

  const [color, setColor] = useState('#ffffff');
  return (
    <div className="ControlsBox">
      <h1>Light bulb</h1>
      <div className="wrapper">
        <h3>Power Switch :</h3>
        {onoff?( <button style={{backgroundColor:"Green",width:"70px"}} onClick={()=>setOnOff(!onoff)}>On</button>):( <button style={{backgroundColor:"red",width:"70px"}} onClick={()=>setOnOff(!onoff)}>Off</button>)}
       
      </div>
      {onoff?(<p className="turnon">Turn the switch on </p>):(
          <div className="manualcontrol">
          <label>Brightness: {brightness}%</label>
          <input 
          style={{marginBottom:"30px"}}
            type="range"
            min="0"
            max="100"
            value={brightness}
            onChange={(e) => setBrightness(e.target.value)}
          />
          <label style={{fontSize:"25px", fontWeight:"700",marginRight:'10px'}}>Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
      )}
    
    </div>
  );
}
