import { Container } from './styles'
import { useCart } from '../../hooks/cart'
import { api } from '../../services/api'

import imagePlaceholder from '../../assets/image_placeholder.svg'

export function Order({ item }) {
  const { removeFromCart } = useCart()

  const imageURL = item.image ? `${api.defaults.baseURL}/files/${item.image}` : imagePlaceholder
  return (
    <Container>
      <div className='orders'>
        <img src={imageURL} alt={item.title} />
        <div className='details'>
          <div className='product'>
            <span>{item.quantity} x</span>
            <span>{item.title}</span>
            <p>${item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      </div>
    </Container>
  )
}
