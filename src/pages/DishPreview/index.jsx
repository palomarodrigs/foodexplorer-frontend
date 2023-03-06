import { Container } from './styles'

import { FiChevronLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import Ravanello from '../../assets/ravanello.png'

export function DishPreview() {
  return (
    <Container>
      <Header />

      <main>
        <div className='top'>
          <a>
            <FiChevronLeft size={32} />
            return
          </a>
          <img src={Ravanello} alt='dish ravanello' />
        </div>

        <div className='details'>
          <h1>Salad Ravanello</h1>
          <p>
            Radishes, green leaves, and sweet and sour sauce sprinkled with sesame seeds. The naan bread
            adds a special touch.
          </p>

          <div className='tags'>
            <Tag title='jdfhe' />
            <Tag title='jdfhe' />
            <Tag title='jdfhe' />
            <Tag title='jdfhe' />
          </div>

          <div className='btns'>
            <Stepper />
            <Button className='include' title='include &middot; $25,00' />
          </div>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
