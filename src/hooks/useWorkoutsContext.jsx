import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

function useWorkoutsContext() {
    const context = useContext(WorkoutContext)
    if(!context) {
        throw Error('useWorkoutsContext must be used with a WorkoutContextProvider')
    }
  return context;
}

export default useWorkoutsContext

