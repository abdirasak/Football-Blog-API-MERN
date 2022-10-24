import { useState } from 'react'
import { FaFileAlt } from 'react-icons/fa'
import './ArticleForm.css'

function ArticleForm() {

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
      <section className='f-heading'>
        <h3 style={{ marginTop: '15px' }}>
          <FaFileAlt /> Create an article
        </h3>
      </section>

      <section className='article-form'>
        <form>
          <div className="f-group">
            <input
              type="text"
              className="f-control"
              id='email'
              name='email'
              value={email} onChange={onChange}
              placeholder='Enter your email' />
          </div>

          <div className="f-group">
            <input
              type="password"
              className="f-control"
              id='password'
              name='password'
              value={password} onChange={onChange}
              placeholder='Enter password' />
          </div>

          <div className="f-group">
            <input
              type="password"
              className="f-control"
              id='password'
              name='password'
              value={password} onChange={onChange}
              placeholder='Enter password' />
          </div>

          <div className="f-group">
            <input
              type="password"
              className="f-control"
              id='password'
              name='password'
              value={password} onChange={onChange}
              placeholder='Enter password' />
          </div>

          <div className="f-group">
            <input
              type="password"
              className="f-control"
              id='password'
              name='password'
              value={password} onChange={onChange}
              placeholder='Enter password' />
          </div>

          <div className="f-group">
            <button type='submit' className='f-btn btn-block '>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ArticleForm