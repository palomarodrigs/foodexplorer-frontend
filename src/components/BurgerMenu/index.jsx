import { FiX, FiSearch } from 'react-icons/fi'
import { Container } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../Input'

import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'

export function BurgerMenu({ menuIsVisible, setMenuIsVisible, search }) {
  const { signOut, user } = useAuth()
  const [searchValue, setSearchValue] = useState('')

  const navigate = useNavigate()

  const handleSignOut = () => {
    navigate('/')
    signOut()
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      search(searchValue)
      navigate(`/?search=${searchValue}`)
      setMenuIsVisible(false)
    }
  }

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
        <Input
          icon={FiSearch}
          placeholder='Search for dishes or ingredients'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        <div className='btns'>
          {user && user.isAdmin ? (
            <Link to='/new'>New dish</Link>
          ) : (
            <Link to='/profile'>Profile</Link>
          )}
          <Link to='/favorites'>My favorites</Link>
          <button className='logout' onClick={handleSignOut}>
            Logout
          </button>
        </div>
      </main>
    </Container>
  )
}
