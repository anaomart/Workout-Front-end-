import  { useState } from 'react'
import useAuthContext from './useAuthContext';


const url='https://workoutbuddybackend1.onrender.com'


export default function useSignup() {
    const  [ error, setError] = useState(null) ;
    const [isLoading , setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
    async function signup(email, password) {
        setIsLoading(true) ;
        setError(null) ;

        const response = await fetch(url+'/api/user/signup',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email,password})
        })
        const json = await response.json() ;

        if(!response.ok) {
            setIsLoading(false) ;
            setError(json.error)
        }
        if(response.ok) {
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({type:"LOGIN" , payload:json})
            setIsLoading(false) ;
        }
    }
  return  {
    signup , isLoading , error
  }
}
