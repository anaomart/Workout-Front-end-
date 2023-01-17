import React from 'react';
import { useReducer } from 'react';
import { createContext } from 'react';

export const WorkoutContext = createContext();
console.log(WorkoutContext)
export const workoutsReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_WORKOUTS" :
            return {
                workouts:action.payload
            }
        case "CREATE_WORKOUT":
            return {
                workouts:[action.payload,...state.workouts]
            }
        case 'DELETE_WORKOUT' :
            return {
                workouts:state.workouts.filter(workout =>{
                    return action.payload._id !== workout._id 
                })
            }
        default :
            return state;
    }
}
console.log()
export const WorkoutContextProvider = ({children}) => {
    
    const [state , dispatch] = useReducer( workoutsReducer, {
        workouts: null
    });

    return (
    <WorkoutContext.Provider value={{...state,dispatch}} >
        {children}
    </WorkoutContext.Provider>
    )
}
