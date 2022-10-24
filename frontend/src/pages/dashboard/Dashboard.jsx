import React, { useState } from 'react'
import './Dashboard.css'
import { FaPlus } from 'react-icons/fa'
import Hero from '../../components/Hero/Hero'
import AuthArticles from '../../components/authArticles/AuthArticles'
import premier from '../../assets/images/premier-league.png'
import laliga from '../../assets/images/laliga.png'
import Bundesliga from '../../assets/images/bundesliga.jpg'
import Modal from '../../components/modal/Modal'
import '../../components/modal/modal.css'


function Dashboard() {
  const [openModal, setOpenModal] = useState(false);

  const articles = [
    {
      id: 1,
      img: premier,
      title: 'Premier League',
      article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.'
    },

    {
      id: 2,
      img: laliga,
      title: 'La Liga',
      article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.'
    },

    {
      id: 3,
      img: premier,
      title: 'Premier League',
      article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.'
    },

    {
      id: 4,
      img: Bundesliga,
      title: 'Bundesliga',
      article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.'
    },

    {
      id: 5,
      img: laliga,
      title: 'La Liga',
      article: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, dolorem? Aliquam temporibus distinctio fugiat unde tenetur voluptates qui fuga mollitia.'
    }

  ]

  return (
    <>
      <Hero />
      <div className='dashContainer'>

        <div className="dashSidebar">

        </div>
        <div className="header">
          <h1>Latest Articles</h1>
          <button onClick={() => setOpenModal(true)} ><FaPlus className='icon' /></button>
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)} />

        </div>
        <div className="dashMainContent">


          {articles.map((article) =>
          (
            <ul>
              <li>{<AuthArticles article={article} />}</li>
            </ul>
          ))}


        </div>
      </div>
    </>

  )
}

export default Dashboard