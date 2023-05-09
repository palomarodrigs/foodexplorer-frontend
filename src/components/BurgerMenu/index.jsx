import { FiX, FiSearch } from 'react-icons/fi'
import { Container } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../Input'

import { useEffect } from 'react'
import { useAuth } from '../../hooks/auth'

export function BurgerMenu({ menuIsVisible, setMenuIsVisible }) {
  const { signOut, user } = useAuth()

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <Container isVisible={menuIsVisible}>
      <header className='header'>
        <FiX size={32} onClick={() => setMenuIsVisible(false)} />
        <p>Menu</p>
      </header>

      <main>
        <Input icon={FiSearch} placeholder='Search for dishes or ingredients' />

        <div className='btns'>
          {user && user.isAdmin ? (
            <Link to='/new'>New dish</Link>
          ) : (
            <Link to='/profile'>Profile</Link>
          )}
          <Link to='/favorites'>My favorites</Link>
          <button className='logout' onClick={signOut}>
            Logout
          </button>
        </div>
      </main>
    </Container>
  )
}
