
import React, { useState } from 'react'
import { CgGlassAlt } from 'react-icons/cg';
import { HiOutlinePlusCircle } from 'react-icons/hi2';
import { HiOutlineMinusCircle } from 'react-icons/hi2';

const App = () => {
    const [intake, setIntake] = useState("Start tracking your daily water intake")
    const [value, setValue] = useState(0)

    function plus() {
        setValue(value+1)
        if (value === 0) {
            setIntake("Great work!")
        }
        if (value === 3) {
            setIntake("Half way there!")
        }
        if (value === 4) {
            setIntake("Keep up the good work !!")
        }
        if (value === 7) {
            setIntake("Congratulations on completing 8 glasses of water !!")
        }
    }

    function minus() {
        if (value<1) {
            setValue(0)
        }
        else{
            setValue(value-1)
        }
    }

  return (
 
    <div>
       
        <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Water Tracker</h2>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center',}}>
        <p onClick={minus} ><HiOutlineMinusCircle size="40"  /></p>
        <p><CgGlassAlt size="150" color="#7FD5E9"/></p>
        <p onClick={plus} ><HiOutlinePlusCircle size="40" /></p>
    </div>
        <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{value}</p>
        <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{intake}</p>
        <div >
            <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Today's Tip</h2>
            <p style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Make drinking water a daily habit. When it's hot out or you're ill, take in even more water - 2 / 3 glasses more than usual.</p>
        </div>
    </div>
    
  )
}

export default App;