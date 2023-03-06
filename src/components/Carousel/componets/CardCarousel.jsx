import { SwiperSlide } from 'swiper/react'
import { FiHeart } from 'react-icons/fi'

import { Button } from '../../Button'
import { Stepper } from '../../Stepper'

const CardCarousel = ({ props }) => {
  const { image, title, description, price, isAdmin } = props
  return (
    <SwiperSlide>
      <button className='favorite'>{isAdmin ? 'icon edit' : <FiHeart />}</button>
      <img src={image} alt={title} />
      <h2>{title} &gt; </h2>
      <p>{description}</p>
      <span>{price}</span>
      {!isAdmin ? (
        <div className='btns'>
          <Stepper />
          <Button className='include' title='include' />
        </div>
      ) : null}
    </SwiperSlide>
  )
}

export default CardCarousel
