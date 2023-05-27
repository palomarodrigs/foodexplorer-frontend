import { FiMinus, FiPlus } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { Container } from './styles'

export const Stepper = ({ initialQuantity, onDecrement, onIncrement }) => {
  const [quantity, setQuantity] = useState(initialQuantity)

  const handleIncrement = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    onIncrement(newQuantity)
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      onDecrement(newQuantity)
    }
  }

  useEffect(() => {
    setQuantity(initialQuantity)
  }, [initialQuantity])

  return (
    <Container>
      <button onClick={handleDecrement}>
        <FiMinus size={25} />
      </button>

      <span>{quantity?.toString().padStart(2, '0')}</span>

      <button onClick={handleIncrement}>
        <FiPlus size={25} />
      </button>
    </Container>
  )
}
