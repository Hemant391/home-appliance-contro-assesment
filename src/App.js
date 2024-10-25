
import React, { useState } from 'react';
import ApplianceList from './components/ApplianceList';
import "./App.css";
import ApplianceCard from './components/ApplianceCard';
import Fan from './components/Fan';
import Ac from './components/Ac';
import Light from './components/Light';

function App() {
  const [show,setShow]=useState('Fan');
  const [isOn, setIsOn] = useState(true);
  const handleclick=(e)=>{
    setShow(e.target.innerText)
  }
  const togglePower = () => {
    setIsOn(!isOn);
  };

  const appliances=["Fan","Ac","Light"]
  return (
    <div className="App">
      <h1>Home Appliance Control</h1>
      <div className="cards">
      {appliances.map((ele,ind) => (
        <ApplianceCard key={ind} appliance={ele} click={handleclick} />
      ))}
      </div>
      <div className="container">
      {show==="Fan" &&<Fan  powerswitch={togglePower}/>}
      {show==="Ac" && <Ac powerswitch={togglePower}/> }
      {show==="Light" &&<Light powerswitch={togglePower}/> }
      </div>
    </div>
  );
}

export default App;
