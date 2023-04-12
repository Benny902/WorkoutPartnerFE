import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import {useState} from 'react';
import ShowHide from './ShowHide';


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
          <h1 >Workout&nbsp;Partner</h1>
          <button className="button2" onClick={myFunction}>{buttonText}</button>
          <ShowHide style={{cursor:'pointer'}}/>
        </Link>

        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button className="navbutton" onClick={handleClick}>Log out</button>
              <hr style={{border: 0, width: 0.1,height: 50}} />
              
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