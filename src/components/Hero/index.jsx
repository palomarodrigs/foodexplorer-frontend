import { Container } from './styles'

import Background from '../../assets/background.jpg'

export function Hero() {
  return (
    <Container>
      <img src={Background} alt='' />

      <div>
        <h2>Unparalleled flavors</h2>
        <p>Feel the care of the preparation with selected ingredients</p>
      </div>
    </Container>
  )
}
