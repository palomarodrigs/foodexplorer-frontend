import { Container } from './styles'

import Logo from '../../assets/logo-gray.svg'

export function Footer() {
  return (
    <Container>
      <div className='logo'>
        <img src={Logo} alt='Logo explorer' />
        <h1>food explorer</h1>
      </div>
      <p>© 2023 - All rights reserved.</p>
    </Container>
  )
}
