import React, { useState } from 'react'
import useLogin from '../hooks/useLogin';

export default function Login() {
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();
    async function loginHandler(e) {
        e.preventDefault();
        await login(email,password);
        console.log("login")
    }



  return (
    <form className='login' onSubmit={loginHandler}>
        <h3>Login </h3>

        <label>Email</label>
        <input 
        type='email' 
        onChange={(e)=>{ setEmail(e.target.value)}}
        value={email}
        ></input>

        <label>Password</label>
        <input 
        type='Password' 
        onChange={(e)=>{ setPassword(e.target.value)}}
        value={password}
        ></input>
    <button disabled={isLoading}>Login</button>
    {error && <div className='error'> {error}</div>} 
    </form>
  )
}
