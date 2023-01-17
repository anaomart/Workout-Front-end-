import React, { useState } from 'react'
import useSignup from '../hooks/useSignup';

export default function Signup() {
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const {signup , error  , isLoading} = useSignup();
    async function handleSignup(e) {
        e.preventDefault();

        await signup(email,password);

    }



  return (
    <form className='signup' onSubmit={handleSignup}>
        <h3>Sign up </h3>

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
    <button disabled={isLoading}>Signup</button>
    {error && <div className='error'> {error}</div>} 
    </form>
  )
}
