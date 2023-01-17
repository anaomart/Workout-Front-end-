import React from 'react'
import { Link } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import useAuthContext from '../hooks/useAuthContext';

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => logout();
  return (
    <header>
      <div className="container">
        <Link to='/'>
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            {
              user ?
                <>
                  {user.email}
                  <button onClick={handleClick} >Logout</button>
                </>
                :
                <>
                  <div>
                    <Link to='/login' >Login</Link>
                    <Link to='/signup' >signup</Link>
                  </div>
                </>
            }


          </div>

        </nav>
      </div>


    </header>
  )
}
