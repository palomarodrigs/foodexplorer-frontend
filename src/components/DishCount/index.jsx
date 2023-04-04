import { Container } from './styles'

import Receipt from '../../assets/receipt.svg'

export function DishCount() {
  return (
    <Container>
      <button>
        <img src={Receipt} alt='' />
        <div className='circle'>
          <span>0</span>
        </div>
      </button>
    </Container>
  )
}
