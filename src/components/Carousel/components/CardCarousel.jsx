import { FiHeart, FiEdit } from 'react-icons/fi'
import { SwiperSlide } from 'swiper/react'

import { Link } from 'react-router-dom'

import Slider from '../../Slider'

import { Stepper } from '../../Stepper'
import { Button } from '../../Button'

import { useAuth } from '../../../hooks/auth'

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

  return (
    <Slider title={title} settings={settings}>
      {dishes.map((dish) => {
        const imageURL = dish.image
          ? `${api.defaults.baseURL}/files/${dish.image}`
          : imagePlaceholder

        return (
          <SwiperSlide key={String(dish.id)}>
            <button className='favorite'>
              {user && user.isAdmin ? (
                <Link to={`/edit/${dish.id}`}>
                  <FiEdit />
                </Link>
              ) : (
                <FiHeart />
              )}
            </button>

            <Link to={`/details/${dish.id}`}>
              <img src={imageURL} alt={dish.title} />
              <h2>{dish.title} &gt;</h2>
            </Link>

            <p>{dish.description}</p>
            <span>{dish.price}</span>

            {!user || !user.isAdmin ? (
              <div className='btns'>
                <Stepper />
                <Button className='include' title='include' />
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
