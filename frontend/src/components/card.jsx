import React from 'react'

function card(props) {
  const { article } = props
  return (
    <div>
      <img src={article.articleImage} style={{ width: '250px', height: '150px' }} alt="" />
      <h3>{article.title}</h3>
      <p>{article.article}</p>
    </div>
  )
}

export default card