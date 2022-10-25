import { useState } from 'react'
import { FaFileAlt } from 'react-icons/fa'
import './ArticleForm.css'

function ArticleForm() {

  const [formData, setFormData] = useState({
    league: '',
    team: '',
    title: '',
    article: '',
    articleImage: ''
  })

  const { league, team, title, article, articleImage } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,


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
              id='league'
              name='league'
              value={league} onChange={onChange}
              placeholder='Enter league name' />
          </div>

          <div className="f-group">
            <input
              type="text"
              className="f-control"
              id='team'
              name='team'
              value={team} onChange={onChange}
              placeholder='Enter team name' />
          </div>

          <div className="f-group">
            <input
              type="text"
              className="f-control"
              id='title'
              name='title'
              value={title} onChange={onChange}
              placeholder='Enter password' />
          </div>

          <div className="f-group">
            <input
              type="textarea"
              className="f-control"
              id='article'
              name='article'
              value={article} onChange={onChange}
              placeholder='Enter article' />
          </div>

          <div className="f-group">
            <input
              type="file"
              className="f-control"
              id='articleImage '
              name='articleImage '
              value={articleImage} onChange={onChange}
              placeholder='Enter image' />
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