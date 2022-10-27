import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import {useState} from 'react';



const Navbar = () => {

  const [buttonText, setButtonText] = useState('🌚');
  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (buttonText === '🌚'){
      setButtonText('🌞');
    }
    if (buttonText==='🌞'){
      setButtonText('🌚');
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
          <h1 >Workout Partner</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button className="navbutton" onClick={handleClick}>Log out</button>
              <div className='smalldiv'>&nbsp;</div>
              &nbsp;
              <hr/>
             <Link className="navbutton" to="/">Home</Link>
             <Link className="navbutton" to="/bmi">BMI</Link>
             <Link className="navbutton" to="/music">Music</Link>
             <Link className="navbutton" to="/water">Water</Link>
             &nbsp;&nbsp;
              <button className="button2" onClick={myFunction}>{buttonText}</button>
            </div>
          )}
          {!user && (
            <div>
              
              <Link className="navbutton" to="/login">Login</Link>
              <Link className="navbutton" to="/signup">Signup</Link>
              <div>&nbsp;</div>
              <hr style={{borderColor: 'transparent'}}/>
              <hr/>

             <Link className="navbutton" to="/">Home</Link>
             <Link className="navbutton" to="/bmi">BMI</Link>
             <Link className="navbutton" to="/music">Music</Link>
             <Link className="navbutton" to="/water">Water</Link>
             &nbsp;&nbsp;
              <button className="button2" onClick={myFunction}>{buttonText}</button>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar