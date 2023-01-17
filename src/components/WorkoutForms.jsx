import React, { useState } from 'react';
import useWorkoutsContext from '../hooks/useWorkoutsContext';
import useAuthContext from '../hooks/useAuthContext';
const url = 'https://workoutbuddybackend1.onrender.com'

const WorkoutForms = () => {
    const { dispatch} = useWorkoutsContext()
    const [title , setTitle ] = useState('');
    const [load , setLoad ] = useState('');
    const [reps , setReps ] = useState('');
    const [error,setError] = useState('');
    const [emptyFields, setEmptyFields] = useState('');
    const {user } = useAuthContext();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!user) {
            setError('you must be logged in')
            return ;
        }
        const workout = {title ,load , reps}

        const response = await fetch(`${url}/api/workouts`,{
            method: 'POST',
            body: JSON.stringify(workout),
            headers:{
                "Content-Type" : "application/json"
                , 'Authorization' : `Bearer ${user.token}`
                },

        })
        const json= await response.json()

        console.log(json.error)

        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }else {
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields('')
            console.log('new Workout add ',json)
        dispatch({type:'CREATE_WORKOUT',payload:json})
        }

    }


    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title</label>
            <input 
            type='text'
            onChange={e=> setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error': ''}

            />
            <label>Weight In (KG) </label>
            <input 
            type='number'
            onChange={e=> setLoad(e.target.value)}
            value={load}
            className={emptyFields.includes('load') ? 'error': ''}
            />
            <label>Reps:</label>
            <input 
            type='number'
            onChange={e=> setReps(e.target.value)}
            value={reps}
            className={emptyFields.includes('reps') ? 'error': ''}

            />
            <button type='submit' >Add Workout</button>
            {error && <div className='error'>{error}</div>}
        </form>
    );
}

export default WorkoutForms;
