import React from 'react'
import './authArticles.css'
import { FaTrashAlt, FaPen } from 'react-icons/fa'


const authArticles = (props) => {
  const { article } = props
  return (
    <div className='authContainer'>

      <div className="article-img">
        <img src={article.img} alt="" />
      </div>

      <div className="article-content">
        <h2>{article.title}</h2>
        <p>{article.article}</p>
        <hr />
        <span><FaTrashAlt style={{ color: '#10bbc4' }} /></span>
        <span><FaPen style={{ color: '#10bbc4' }} /></span>
      </div>

    </div>
  )
}

export default authArticles