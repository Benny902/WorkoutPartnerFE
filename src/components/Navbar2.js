import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import {useState} from 'react';
import ShowHide from './ShowHide';
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
        <div className="brand-logo-name">
          <h1>Workout&nbsp;Partner</h1>
        </div>
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
              <ShowHide style={{cursor:'pointer'}}/>
              ⸻⸻⸻
              <span>{user.email}<button className="navbutton" onClick={handleClick}>Log out</button></span>
              ⸻⸻⸻
             <Link className="navbutton" to="/">Home</Link>
             <Link className="navbutton" to="/bmi">BMI</Link>
             <Link className="navbutton" to="/music">Music</Link>
             <Link className="navbutton" to="/water">Water</Link>
             <Link className="navbutton" to="/exer">Exercises</Link>
             </ul>
            </div>
          )}
          {!user && (
            <div>
            
              <ul>
              <button className="button2" onClick={myFunction}>{buttonText}</button>
              <ShowHide style={{cursor:'pointer'}}/>
             <div>⸻⸻⸻</div>
              <Link className="navbutton" to="/login">Login</Link>
              <Link className="navbutton" to="/signup">Signup</Link>
              <div>⸻⸻⸻</div>
             <Link className="navbutton" to="/">Home</Link>
             <Link className="navbutton" to="/bmi">BMI</Link>
             <Link className="navbutton" to="/music">Music</Link>
             <Link className="navbutton" to="/water">Water</Link>
             <Link className="navbutton" to="/exer">Exercises</Link>
             </ul>
            </div>
          )}
        
      </nav>
    </header>
  )
}

export default Navbar2