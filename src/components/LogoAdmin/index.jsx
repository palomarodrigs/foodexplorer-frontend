import LogoExplorer from '../../assets/logo-explorer.svg'
import { Container } from './styles'

export function LogoAdmin({ isAdmin }) {
  return (
    <Container to='/'>
      <div className='logo' isAdmin={isAdmin}>
        <img src={LogoExplorer} alt='logo explorer' />
        <h1>food explorer</h1>
      </div>
      <span>admin</span>
    </Container>
  )
}
