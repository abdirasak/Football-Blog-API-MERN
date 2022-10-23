import React from 'react'
import cr7 from '../../assets/images/CR7.jpg'
import './featured.css'

function featured() {
  const featured = {
    img: cr7,
    title: 'Cristiano Ronaldo ',
    article: 'Erik ten Hag will deal with Cristiano Ronaldo after he left Old Trafford before full-time in win over Tottenham. Cristiano Ronaldo left Old Trafford before full-time in Manchester United\'s 2-0 win over Tottenham as he stormed down the tunnel after being an unused substitute. Unused substitute Ronaldo was seen walking down the touchline and up the tunnel in the closing stages of Wednesday\'s match at Old Trafford.'
  }
  return (
    <div className='featured'>
      <div className="featured-img">
        <img src={featured.img} style={{ width: '100%', height: '430px' }} alt="" />
      </div>
      <div className="featured-text">
        <h3>{featured.title}</h3>
        <p>{featured.article}</p>
      </div>
    </div>
  )
}

export default featured