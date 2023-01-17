import useAuthContext from './useAuthContext';
import useWorkoutsContext from './useWorkoutsContext';

const UseLogout = () => {
    const {dispatch} = useAuthContext()
    const {dispatch:workoutDispatch} = useWorkoutsContext()
    const logout = () => {
        localStorage.removeItem('user');
        console.log("logout")
        dispatch({type: 'LOGOUT'})
        workoutDispatch({type:'SET_WORKOUTS',payload: null})
    }
    return {logout};
}

export default UseLogout;
