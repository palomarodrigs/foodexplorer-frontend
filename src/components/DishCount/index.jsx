import { Container } from './styles'
import Receipt from '../../assets/receipt.svg'

import { useNavigate } from 'react-router-dom'

export function DishCount() {
  const navigate = useNavigate()

  function handleCart() {
    navigate('/cart')
  }

  return (
    <Container onClick={() => handleCart()}>
      <img src={Receipt} />
      <div className='circle'>
        <span>0</span>
      </div>
    </Container>
  )
}
