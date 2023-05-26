import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import {useState} from 'react';
import ShowHide from './ShowHide';
import Logo from "../assets/workoutpartnerlogo.png";

const Navbar = () => {

  const [buttonText, setButtonText] = useState('  🌘');
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (buttonText === '  🌘'){
      setButtonText('🌖  ');
    }
    if (buttonText==='🌖  '){
      setButtonText('  🌘');
    }
        
  }

  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
      <Link to="/"> 
      <img src={Logo} alt="logo" className="photo" style={{marginRight: 11, width: 60,height: 60}}/>
      <figcaption style={{marginLeft: -5}}><button className="button2" onClick={myFunction}>{buttonText}</button></figcaption>
      </Link>
       
        <Link to="/">  
          <h1 style={{marginRight: 20}}>Workout&nbsp;Partner</h1>
          <ShowHide style={{cursor:'pointer'}}/>
        </Link>
        <hr style={{border: 0, width: 31.1,height: 0.1}} />
        <nav>
          {user && (
            <div>
             <span>{user.email}</span>
            <button className="navbutton2" onClick={handleClick}>Log out</button>
              <hr style={{border: 0, width: 0.1,height: 31}} />
             <Link className="navbutton" to="/">Home</Link>
             <Link className="navbutton" to="/bmi">BMI</Link>
             <Link className="navbutton" to="/music">Music</Link>
             <Link className="navbutton" to="/water">Water</Link>
             <Link className="navbutton" to="/exer">Exercises</Link>
             
             &nbsp;&nbsp;
             
              
            </div>
          )}
          {!user && (
            <div>
              
              <Link className="navbutton" to="/login">Login</Link>
              <Link className="navbutton" to="/signup">Signup </Link>
              
              <hr style={{border: 0, width: 0.1,height: 50}} />
              

             <Link className="navbutton" to="/">Home</Link>
             <Link className="navbutton" to="/bmi">BMI</Link>
             <Link className="navbutton" to="/music">Music</Link>
             <Link className="navbutton" to="/water">Water</Link>
             <Link className="navbutton" to="/exer">Exercises</Link>
             &nbsp;&nbsp;
              
            </div>
          )}
        </nav>
        
      </div>
    
    </header>
    
  )
}

export default Navbar