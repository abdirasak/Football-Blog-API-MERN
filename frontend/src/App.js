import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Navmenu from './components/Navmenu'


function App() {
  return (
    <>
      <Router>

        <div className='container'>
          <Navmenu />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
