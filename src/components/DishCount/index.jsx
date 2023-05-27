import { Container } from './styles'
import Receipt from '../../assets/receipt.svg'

import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/cart'

export function DishCount() {
  const navigate = useNavigate()

  const { cartItems } = useCart()

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

  function handleCart() {
    navigate('/cart')
  }

  return (
    <Container onClick={() => handleCart()}>
      <img src={Receipt} />
      <div className='circle'>
        <span>{totalQuantity}</span>
      </div>
    </Container>
  )
}
