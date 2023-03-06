import { Container } from './styles'

import { FiMinus, FiPlus } from 'react-icons/fi'

export function Stepper() {
  return (
    <Container>
      <button>
        <FiMinus size={25} />
      </button>

      <span>01</span>

      <button>
        <FiPlus size={25} />
      </button>
    </Container>
  )
}
