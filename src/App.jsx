import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import useAuthContext from './hooks/useAuthContext'
export default function App() {
  const {user} = useAuthContext();
  return (
    <div className='app'>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/'  element={ user ?<Home/> : <Navigate  to='/login' />}/>
          <Route path='/login' element={ !user ? <Login/> : <Navigate to={'/'} />}/>
          <Route path='/signup' element={  !user ? <Signup/> : <Navigate to={'/'} />}/>

        </Routes>
      
      
      
      </BrowserRouter>

    </div>

    )
}
