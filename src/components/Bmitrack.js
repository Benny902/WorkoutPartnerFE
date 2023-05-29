import React, { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <>
    <div className="login">
        <h2 className="">BMI Calculator</h2>
          
          <input className=""
            type="text"
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Height in cm"
          />
          <input className=""
            type="text"
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Weight in kg"
          />
        <button onClick={handleBmi} >Calculate</button>
        <h2 className=" text-white font-bold text-lg">Your BMI is: {bmi}</h2>
        <h3>Which means you are <span>{info}!</span></h3>
  
      <p><a href="https://en.wikipedia.org/wiki/Body_mass_index" 
      target="blank">Learn more on BMI (wikipedia) &gt;</a></p>
      <img style={{ width: "80%", height: "50%" }} src="https://www.healthequalsfreedom.com/wp-content/uploads/2019/03/BMI-Chart.gif" alt="" />
    </div>
  
    </>
  );
};

export default App;