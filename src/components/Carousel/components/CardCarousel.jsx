import { FiHeart, FiEdit } from 'react-icons/fi'
import { SwiperSlide } from 'swiper/react'

import { Link } from 'react-router-dom'

import { useState } from 'react'

import { useAuth } from '../../../hooks/auth'
import { useCart } from '../../../hooks/cart'
import { useFavorite } from '../../../hooks/favorite'

import Slider from '../../Slider'
import { Stepper } from '../../Stepper'
import { Button } from '../../Button'

import { api } from '../../../services/api'

import imagePlaceholder from '../../../assets/image_placeholder.svg'

const settings = {
  spaceBetween: 27,
  navigation: true,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2
    },

    1143: {
      slidesPerView: 3
    }
  }
}

const CardCarousel = ({ dishes, title }) => {
  const { user } = useAuth()
  const { addToCart } = useCart()
  const { addFavorite, isFavorite } = useFavorite()
  const [selectedQuantity, setSelectedQuantity] = useState(1)

  const handleAddDishToCart = (dish) => {
    addToCart(dish, selectedQuantity)
    setSelectedQuantity(1)
  }

  const handleQuantityChange = (quantity) => {
    setSelectedQuantity(quantity)
  }

  const handleAddFavorite = (dish) => {
    addFavorite(dish)
  }

  return (
    <Slider title={title} settings={settings}>
      {dishes.map((dish) => {
        const imageURL = dish.image
          ? `${api.defaults.baseURL}/files/${dish.image}`
          : imagePlaceholder

        const isDishFavorite = isFavorite(dish)

        return (
          <SwiperSlide key={String(dish.id)}>
            <button className='favorite' onClick={() => handleAddFavorite(dish)}>
              {user && user.isAdmin ? (
                <Link to={`/edit/${dish.id}`}>
                  <FiEdit />
                </Link>
              ) : (
                <FiHeart color={isDishFavorite ? 'red' : 'white'} />
              )}
            </button>

            <Link to={`/details/${dish.id}`}>
              <img src={imageURL} alt={dish.title} />
              <h2>{dish.title} &gt;</h2>
            </Link>

            <p>{dish.description}</p>
            <span>${dish.price}</span>

            {!user || !user.isAdmin ? (
              <div className='btns'>
                <Stepper
                  initialQuantity={1}
                  onDecrement={() => handleQuantityChange(selectedQuantity - 1)}
                  onIncrement={() => handleQuantityChange(selectedQuantity + 1)}
                />

                <Button
                  className='include'
                  title='include'
                  onClick={() => handleAddDishToCart(dish)}
                />
              </div>
            ) : (
              ''
            )}
          </SwiperSlide>
        )
      })}
    </Slider>
  )
}

export default CardCarousel
