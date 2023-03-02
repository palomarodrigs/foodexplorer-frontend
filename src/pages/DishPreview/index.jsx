import { Container } from './styles'

import { RxCaretLeft } from 'react-icons/rx'
import { FiMinus, FiPlus } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Link } from 'react-router-dom'

import Ravanello from '../../assets/ravanello.png'

export function DishPreview() {
  return (
    <Container>
      <Header />

      <main>
        <div className='top'>
          <a>
            <RxCaretLeft size={32} />
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

          <div className='purchase'>
            <div className='stepper'>
              <button>
                <FiMinus size={25} />
              </button>

              <span>01</span>

              <button>
                <FiPlus size={25} />
              </button>
            </div>

            <div className='btn-include'>
              <Button title='include ∙ $25' />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
