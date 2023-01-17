import React from 'react'
import useWorkoutsContext from '../hooks/useWorkoutsContext'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import useAuthContext from '../hooks/useAuthContext';
export default function WorkoutDetails({ workout }) {
    const {dispatch} = useWorkoutsContext();
    const url='https://workoutbuddybackend1.onrender.com'
    const {user} = useAuthContext()
    if(!user) {
        return ;
    }
   const  handleDelete=async()=>{
        const response  = await fetch(url+'/api/workouts/'+workout._id,{
            method: 'DELETE',
            headers:{
                "Content-Type" : "application/json"
                , 'Authorization' : `Bearer ${user.token}`
                },
        })
        const json = await response.json();
        
        if(response.ok){
            dispatch({type:'DELETE_WORKOUT' , payload:json});
        }
    }
    return (
        <div className="workout-details">
          <h4>{workout.title}</h4>
          <p><strong>Load (kg): </strong>{workout.load}</p>
          <p><strong>Number of reps: </strong>{workout.reps}</p>
          <p>{formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}</p>
          <span onClick={handleDelete}>
          <span className="material-symbols-outlined">
delete
</span>
          </span>
        </div>
      )
    
}
