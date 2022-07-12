import {FaSignInAlt, FaSignOutAlt, FaUser, FaHouseUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navlinks() {
  return (
    <header className="header">
        <div className='logo'> 
            <Link to="/">GoFootball</Link>
        </div>

        <ul>

        <li>
              <Link to='/dashboard'>
                <FaHouseUser /> Dashboard
              </Link>
        </li>
        
          <li>
            <button className='btn'>
              <FaSignOutAlt /> Logout
            </button>
          </li>
       
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>

          </>
      </ul>
    </header>
  )
}

export default Navlinks