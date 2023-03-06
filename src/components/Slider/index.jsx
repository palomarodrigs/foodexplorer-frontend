import { Container } from './styles'

import { Swiper } from 'swiper/react'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

export default function Slider({ title, settings, children }) {
  return (
    <Container>
      <div className='title'>
        <span>{title}</span>
      </div>
      <Swiper modules={[Navigation]} {...settings}>
        {children}
      </Swiper>
    </Container>
  )
}
