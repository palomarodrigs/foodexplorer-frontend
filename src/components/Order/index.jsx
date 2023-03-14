import { Container } from './styles'

import Ravanello from '../../assets/ravanello.png'

export function Order() {
  return (
    <Container>
      <div className='orders'>
        <img src={Ravanello} alt='' />
        <div className='details'>
          <div className='product'>
            <span>1 x</span>
            <span>Salad Radish</span>
            <p>$25</p>
          </div>
          <button>Remove</button>
        </div>
      </div>
    </Container>
  )
}
