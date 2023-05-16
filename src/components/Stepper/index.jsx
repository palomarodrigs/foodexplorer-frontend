import { FiMinus, FiPlus } from 'react-icons/fi'
import { Container } from './styles'

import { useState } from 'react'

export function Stepper() {
  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount(count + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <Container>
      <button onClick={handleDecrement}>
        <FiMinus size={25} />
      </button>

      <span>{count.toString().padStart(2, '0')}</span>

      <button onClick={handleIncrement}>
        <FiPlus size={25} />
      </button>
    </Container>
  )
}
