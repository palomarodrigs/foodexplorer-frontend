import LogoExplorer from '../../assets/logo-explorer.svg'
import { Container } from './styles'

export function Logo() {
  return (
    <Container to='/'>
      <img src={LogoExplorer} alt='logo explorer' />
      <h1>food explorer</h1>
    </Container>
  )
}
