import React from 'react'
import { useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForms from '../components/WorkoutForms'
import useWorkoutsContext from '../hooks/useWorkoutsContext'
import useAuthContext from '../hooks/useAuthContext'
const url = 'https://workoutbuddybackend1.onrender.com'
export default function Home() {
  const { workouts, dispatch } = useWorkoutsContext()
  const {user } = useAuthContext();


  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`${url}/api/workouts` , {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.token
        }
      });
      const json = await response.json();
      console.log(json);
      console.log("fetching workouts");

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
        
      }
      // if(user){
      //   fetchWorkouts();
      // }
    }
    fetchWorkouts()
  }, [dispatch, user.token])

  return (
    <div className='home'>

      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForms />
    </div>
  )
}
