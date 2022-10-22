import React from 'react'
import './card.css'

function card(props) {
  const { article } = props
  return (
    <>
      <div className='card'>
        <div className="card-image">
          <img src={article.articleImage} style={{ height: '180px' }} alt="" />
        </div>

        <div className="card-body">
          <h2>{article.title}</h2>
          <p>{article.article.slice(0, 90) + '..........'}</p>
          <button className='btn btn-block'>Read More</button>
        </div>
      </div>
    </>
  )
}

export default card