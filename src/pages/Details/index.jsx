import { FiChevronLeft } from 'react-icons/fi'
import { Container } from './styles'

import { Link, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import imagePlaceholder from '../../assets/image_placeholder.svg'

export function Details() {
  const { user } = useAuth()

  const [data, setData] = useState(null)

  const imageURL = data?.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder

  const params = useParams()
  const navigate = useNavigate()

  function handleEditDish() {
    navigate(`/edit/${params.id}`)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <div className='top'>
            <Link to='/'>
              <FiChevronLeft size={32} />
              return
            </Link>

            <img src={imageURL} alt={data.title} />
          </div>

          <div className='details'>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {data.ingredients && (
              <div className='tags'>
                {data.ingredients.map((ingredient) => (
                  <Tag key={String(ingredient.id)} title={ingredient.name} />
                ))}
              </div>
            )}

            {user && user.isAdmin ? (
              <Button className='edit' title='Edit dish' onClick={() => handleEditDish()} />
            ) : (
              <div className='btns'>
                <Stepper />
                <Button className='include' title={`include · $${data.price}`} />
              </div>
            )}
          </div>
        </main>
      )}

      <Footer />
    </Container>
  )
}
