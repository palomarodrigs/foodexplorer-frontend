import Slider from '../../components/Slider'
import { SwiperSlide } from 'swiper/react'

import { Container } from './styles'

import CardCarousel from '../../components/Carousel/componets/CardCarousel'

import Spaghetti from '../../assets/spaghetti.png'
import Parma from '../../assets/parma.png'
import Ravanello from '../../assets/ravanello.png'

import Prune from '../../assets/prune.png'
import Pastry from '../../assets/pastry.png'
import Macaron from '../../assets/macaron.png'

import Juice from '../../assets/juice.png'
import Tea from '../../assets/tea.png'
import Espresso from '../../assets/espresso.png'

import { FiHeart } from 'react-icons/fi'

export function Carousel() {
  const settings = {
    spaceBetween: 27,
    navigation: true,
    breakpoints: {
      480: {
        slidesPerView: 2
      },
      1280: {
        slidesPerView: 3
      }
    }
  }

  return (
    <Container>
      <Slider title='Meals' settings={settings}>
        <CardCarousel />
      </Slider>

      <Slider title='Desserts' settings={settings}>
        <SwiperSlide>
          <button className='favorite'>
            <FiHeart />
          </button>

          <img src={Prune} alt='Prune Pie' />
          <h2>Prugna Pie &gt; </h2>
          <p>Plum pie with buttery dough and sprinkle in sugar.</p>
          <span>$79,97</span>

          <div className='btns'>
            <Stepper />
            <Button className='include' title='include' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <button className='favorite'>
            <FiHeart />
          </button>

          <img src={Pastry} alt='Peachy pastry' />
          <h2>Peachy pastrie &gt; </h2>
          <p>Delicious peach crust with mint leaves.</p>
          <span>$32,97</span>

          <div className='btns'>
            <Stepper />
            <Button className='include' title='include' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <button className='favorite'>
            <FiHeart />
          </button>

          <img src={Macaron} alt='Macarons' />
          <h2>Macarons &gt; </h2>
          <p>Almond flour, butter, egg whites, and sugar.</p>
          <span>$79,97</span>

          <div className='btns'>
            <Stepper />
            <Button className='include' title='include' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <button className='favorite'>
            <FiHeart />
          </button>

          <img src={Spaghetti} alt='>Spaguetti Gambe' />
          <h2>Spaguetti Gambe &gt; </h2>
          <p>Massa fresca com camarões e pesto. </p>
          <span>R$ 79,97</span>

          <div className='btns'>
            <Stepper />
            <Button className='include' title='include' />
          </div>
        </SwiperSlide>
      </Slider>

      <Slider title='Drinks' settings={settings}>
        <SwiperSlide>
          <button className='favorite'>
            <FiHeart />
          </button>

          <img src={Espresso} alt='Espresso' />
          <h2>Espresso &gt; </h2>
          <p>Creamy coffee brewed at the perfect temperature and pressure</p>
          <span>$15,97</span>

          <div className='btns'>
            <Stepper />
            <Button className='include' title='include' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <button className='favorite'>
            <FiHeart />
          </button>

          <img src={Juice} alt='Passion Juice' />
          <h2>Passion Juice &gt; </h2>
          <p>Iced passion fruit juice, is creamy, and sweet.</p>
          <span>$13,97</span>

          <div className='btns'>
            <Stepper />
            <Button className='include' title='include' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <button className='favorite'>
            <FiHeart />
          </button>

          <img src={Tea} alt='Anise Tea' />
          <h2>Tè d'autunno &gt; </h2>
          <p>Anise, cinnamon, and lemon tea. Feel the Italian autumn.</p>
          <span>$19,97</span>

          <div className='btns'>
            <Stepper />
            <Button className='include' title='include' />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <button className='favorite'>
            <FiHeart />
          </button>

          <img src={Spaghetti} alt='>Spaguetti Gambe' />
          <h2>Spaguetti Gambe &gt; </h2>
          <p>Massa fresca com camarões e pesto. </p>
          <span>R$ 79,97</span>

          <div className='btns'>
            <Stepper />
            <Button className='include' title='include' />
          </div>
        </SwiperSlide>
      </Slider>
    </Container>
  )
}
