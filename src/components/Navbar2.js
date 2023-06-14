import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import {useState} from 'react';
import ShowHide from './ShowHide';
import Logo from "../assets/workoutpartnerlogo.png";

import ShowHideMusic from './ShowHideMusic';
import ShowHideWater from './ShowHideWater';
import ShowHideExer from './ShowHideExer';
import ShowHideBmi from './ShowHideBmi';
// mobile navbar

const Navbar2 = () => {

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
  function Click() {
    var navbar = document.querySelector(".main-nav ul");
    navbar.classList.toggle("active");
  }
  return (
    <header className="main-header">
      <a href="/" className="brand-logo">
      <img src={Logo} alt="logo" className="photo" style={{marginRight: 5, width: 51,height: 51}}/>
        <div className="brand-logo-name">
          <h1>Workout&nbsp;Partner</h1>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </a>
      
      <div href="#" className="toggle-button" onClick={Click}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      <nav className="main-nav">
      
        {user && (
            <div>
              <ul>
              <button className="button2" onClick={myFunction}>{buttonText}</button>
              ⸻⸻⸻
              <span>{user.email}<button className="navbutton" onClick={handleClick}>Log out</button></span>
              ⸻⸻⸻
             <ShowHide style={{cursor:'pointer'}}/>
             <ShowHideMusic style={{cursor:'pointer'}}/>
             <ShowHideWater style={{cursor:'pointer'}}/>
             <ShowHideBmi style={{cursor:'pointer'}}/>
             <ShowHideExer style={{cursor:'pointer'}}/>
             </ul>
            </div>
          )}
          {!user && (
            <div>
            
              <ul>
              <button className="button2" onClick={myFunction}>{buttonText}</button>
             <div>⸻⸻⸻</div>
              <Link className="navbutton" to="/login">Login</Link>
              <Link className="navbutton" to="/signup">Signup</Link>
              <div>⸻⸻⸻</div>
              <ShowHide style={{cursor:'pointer'}}/>
             <ShowHideMusic style={{cursor:'pointer'}}/>
             <ShowHideWater style={{cursor:'pointer'}}/>
             <ShowHideBmi style={{cursor:'pointer'}}/>
             <ShowHideExer style={{cursor:'pointer'}}/>
             </ul>
            </div>
          )}
        
      </nav>
    </header>
  )
}

export default Navbar2