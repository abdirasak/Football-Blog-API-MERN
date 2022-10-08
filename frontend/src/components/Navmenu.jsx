import { FaSignInAlt, FaUser, } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import of from '../img/logo-two.png'

function Navlinks() {
  return (
    <header className="header">
      <div className='logo'>
        <Link to="/">
          <img src={of} alt="" style={{ width: '190px', height: "60px" }} />

        </Link>
      </div>

      <ul>

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


      </ul>
    </header>
  )
}

export default Navlinks