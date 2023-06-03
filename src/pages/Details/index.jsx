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
import { useCart } from '../../hooks/cart'

export function Details() {
  const { user } = useAuth()
  const { addToCart } = useCart()

  const [data, setData] = useState(null)
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const imageURL = data?.image ? `${api.defaults.baseURL}/files/${data.image}` : imagePlaceholder

  const totalPrice = data ? data.price * selectedQuantity : 0

  const params = useParams()
  const navigate = useNavigate()

  const handleAddDishToCart = (dish) => {
    addToCart(dish, selectedQuantity)
    setSelectedQuantity(1)
  }

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity)
  }

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
          </div>

          <div className='container'>
            <div className='cover'>
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
                  <div className='select-quantity'>
                    <Stepper
                      initialQuantity={1}
                      onDecrement={() => handleQuantityChange(selectedQuantity - 1)}
                      onIncrement={() => handleQuantityChange(selectedQuantity + 1)}
                    />
                  </div>
                  <Button
                    className='include'
                    title={`include · $${totalPrice.toFixed(2)}`}
                    onClick={() => handleAddDishToCart(data)}
                  />
                </div>
              )}
            </div>
          </div>
        </main>
      )}

      <Footer />
    </Container>
  )
}
