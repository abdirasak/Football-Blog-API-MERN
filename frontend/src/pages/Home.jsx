import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { getArticles, reset } from '../features/articles/articleSlice'
import Spinner from '../components/spinner'
import Card from '../components/card'
import Hero from '../components/Hero/Hero'

function Home() {
  const dispatch = useDispatch()

  const { articles, isLoading, isError, message } = useSelector((state) => state.article)



  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    dispatch(getArticles())
    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  if (isLoading) {
    <Spinner />
  }

  return (
    <>
      <Hero />
      <section className='card-container'>
        {articles.data && articles.data.map((article) => (
          <Card key={article._id} article={article} />
        ))}
      </section>
    </>
  )
}

export default Home