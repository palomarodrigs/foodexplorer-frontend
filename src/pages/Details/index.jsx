import { FiChevronLeft } from 'react-icons/fi'

import { Container } from './styles'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Tag } from '../../components/Tag'
import { Stepper } from '../../components/Stepper'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import Ravanello from '../../assets/ravanello.png'

export function Details() {
  const isAdmin = false

  return (
    <Container isAdmin={isAdmin}>
      <Header />

      <main>
        <div className='top'>
          <Link to='/'>
            <FiChevronLeft size={32} />
            return
          </Link>

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

          {isAdmin ? (
            <Button className='edit' title='Edit dish' />
          ) : (
            <div className='btns'>
              <Stepper />
              <Button className='include' title='include &middot; $25' />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </Container>
  )
}
