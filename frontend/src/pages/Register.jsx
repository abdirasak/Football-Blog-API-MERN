import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value

    }))
  }
  return (
    <>
    <section className='heading'>
      <h1>
      <FaUser /> REGISTER
      </h1>
      <p>PLEASE CREATE AN ACOUNT</p>
    </section>

    <section className='form'>
      <form >
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            id='name' 
            name='name' 
            value={name} onChange={onChange} 
            placeholder='Enter your name'/>
        </div>

        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            id='email' 
            name='email' 
            value={email} onChange={onChange} 
            placeholder='Enter your email'/>
        </div>

        <div className="form-group">
          <input 
            type="password" 
            className="form-control" 
            id='password' 
            name='password' 
            value={password} onChange={onChange} 
            placeholder='Enter password'/>
        </div>

        <div className="form-group">
          <input 
            type="passowrd" 
            className="form-control" 
            id='password2' 
            name='password2' 
            value={password2} onChange={onChange} 
            placeholder='Confirm passowrd'/>
        </div>

        <div className="form-group">
          <button type='submit' className='btn btn-block'>Submit</button>
        </div>
      </form>
    </section>
    
    </>
  )
}

export default Register