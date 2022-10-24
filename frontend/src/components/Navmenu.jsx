import { FaSignOutAlt, FaSignInAlt, FaUser, FaHome } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import of from '../img/logo-two.png'
import '../index.css'

function Navlinks() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  return (
    <header className="header">
      <div className='logo'>
        <Link to="/">
          <img src={of} alt="" style={{ width: '190px', height: "60px" }} />

        </Link>
      </div>

      <ul>

        {user ? (
          <>
            <li>
              <Link to='/Dashboard'>
                <FaHome /> Dashboard
              </Link>
            </li>

            <li>
              <button className='logoutBtn' onClick={onLogout}>
                <FaSignOutAlt /> Logout
              </button>
            </li>

          </>
        ) : (
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
        )}


      </ul>
    </header>
  )
}

export default Navlinks