import { useEffect }from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"


// components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import Stopwatch from '../components/Stopwatch'
import Countdown from '../components/Countdown'


const Home = () => {

  const {workouts, dispatch} = useWorkoutsContext()
  const {user} = useAuthContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts', {
        headers: {'Authorization': `Bearer ${user.token}`},
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    if (user) {
      fetchWorkouts()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      
      
    {/* <div>
     <input type="button"
      value="     Chat     "
      onClick={togglePopup}
      />
        {isOpen && <Popup
         content={<>
        </>}
         handleClose={togglePopup} 
         />} 
         </div> */}
         




      <WorkoutForm />
     

      <div className="workouts">
      <b>Exercises List</b>
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
       
  

      
    </div>
  )
}

export default Home