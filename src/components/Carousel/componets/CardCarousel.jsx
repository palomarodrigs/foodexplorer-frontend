import { SwiperSlide } from 'swiper/react'
import { FiHeart } from 'react-icons/fi'

import { Button } from '../../Button'
import { Stepper } from '../../Stepper'

const CardCarousel = ({ icon, image, name, desc, price, isAdmin }) => (
  <SwiperSlide>
    <button className='favorite'>{isAdmin ? 'icon edit' : <FiHeart />}</button>

    <img src={image} alt={name} />
    <h2>{name} &gt; </h2>
    <p>{desc}</p>
    <span>{price}</span>
    {!isAdmin ? (
      <div className='btns'>
        <Stepper />
        <Button className='include' title='include' />
      </div>
    ) : null}
  </SwiperSlide>
)

export default CardCarousel
