import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Bmi from './pages/Bmi'
import Music from './pages/Music'
import Water from './pages/Water'
import Exer from './pages/Exer'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />

            <Route 
              path="/bmi" 
              element={!user ? <Bmi /> : <Bmi />} 
            />

            <Route 
              path="/music" 
              element={!user ? <Music /> : <Music />} 
            />

              <Route 
              path="/water" 
              element={!user ? <Water /> : <Water />} 
            />

              <Route 
              path="/exer" 
              element={!user ? <Exer /> : <Exer />} 
            />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
