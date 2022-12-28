import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './Dashboard.css'
import { FaPlus } from 'react-icons/fa'
import Hero from '../../components/Hero/Hero'
import AuthArticles from '../../components/authArticles/AuthArticles'
import Modal from '../../components/modal/Modal'
import '../../components/modal/modal.css'
import { getArticles, reset } from '../../features/author/authorSlice'
import Spinner from '../../components/spinner'


function Dashboard() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.author)
  const { articles, isLoading, isError, message } = useSelector(
    (state) => state.author
  )
  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/dashboard')
    }

    dispatch(getArticles())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Hero />
      <div className='dashContainer'>
        <div className="header">
          <h1>Latest Articles</h1>
          <button onClick={() => setOpenModal(true)} ><FaPlus className='icon' /></button>
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)} />

        </div>
        <div className="dashMainContent">
          {articles.data && articles.data.map((article) =>
          (
            <ul>
              <li>{<AuthArticles key={article.id} article={article} />}</li>
            </ul>
          ))}


        </div>
      </div>
    </>

  )
}

export default Dashboard