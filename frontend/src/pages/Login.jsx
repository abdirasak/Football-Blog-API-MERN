import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'


function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

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
          <FaSignInAlt /> LOGIN
        </h1>
        <p>Login to you acount</p>
      </section>

      <section className='form'>
        <form >


          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id='email'
              name='email'
              value={email} onChange={onChange}
              placeholder='Enter your email' />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id='password'
              name='password'
              value={password} onChange={onChange}
              placeholder='Enter password' />
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