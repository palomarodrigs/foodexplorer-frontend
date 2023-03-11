import { FiHeart, FiEdit } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { SwiperSlide } from 'swiper/react'
import Slider from '../../Slider'

import { Stepper } from '../../Stepper'
import { Button } from '../../Button'

const settings = {
  spaceBetween: 27,
  navigation: true,
  loop: true,
  breakpoints: {
    480: {
      slidesPerView: 2
    },
    1280: {
      slidesPerView: 3
    }
  }
}

const CardCarousel = ({ props, title, isEdit }) => (
  <Slider title={title} settings={settings}>
    {props.map((item, i) => (
      <SwiperSlide key={i}>
        <button className='favorite'>
          {isEdit ? (
            <Link to='/edit'>
              <FiEdit />
            </Link>
          ) : (
            <FiHeart />
          )}
        </button>

        <Link to='/details'>
          <img src={item.image} alt={item.name} />
          <h2>{item.name} &gt; </h2>
        </Link>

        <p>{item.description}</p>
        <span>{item.price}</span>

        {isEdit ? (
          ''
        ) : (
          <div className='btns'>
            <Stepper />
            <Button className='include' title='include' />
          </div>
        )}
      </SwiperSlide>
    ))}
  </Slider>
)

export default CardCarousel
