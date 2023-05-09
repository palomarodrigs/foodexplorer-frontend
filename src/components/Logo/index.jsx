import LogoExplorer from '../../assets/logo-explorer.svg'
import { Container } from './styles'

import { useAuth } from '../../hooks/auth'

export function Logo() {
  const { user } = useAuth()

  return (
    <Container to='/'>
      <div>
        <img src={LogoExplorer} alt='logo explorer' />
        <h1>food explorer</h1>
      </div>
      {user && user.isAdmin ? <span>admin</span> : null}
    </Container>
  )
}
