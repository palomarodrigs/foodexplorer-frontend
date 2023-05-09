import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { Container } from './styles'

import { BurgerMenu } from '../BurgerMenu'
import { DishCount } from '../DishCount'
import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header() {
  const { signOut, user } = useAuth()

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const navigate = useNavigate()

  function handleCart() {
    navigate('/cart')
  }

  function handleNewDish() {
    navigate('/new')
  }

  return (
    <Container>
      <FiMenu size={32} className='menu-mobile' onClick={() => setMenuIsVisible(true)} />
      <BurgerMenu
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        onClick={() => setMenuIsVisible(false)}
      />

      <Logo />

      <div className='search'>
        <Input icon={FiSearch} placeholder='Search for dishes or ingredients' />
      </div>

      <nav>
        <ul>
          <li>
            <Link id='favorites' to='/favorites'>
              My favorites
            </Link>
          </li>
          <li>
            <Link id='history' to='/history'>
              Order history
            </Link>
          </li>
        </ul>
      </nav>

      {user && user.isAdmin ? (
        <Button className='btn-new' title='New dish' onClick={() => handleNewDish()} />
      ) : (
        <Button className='btn-cart' title='Cart (0)' onClick={() => handleCart()} />
      )}

      {user && user.isAdmin ? null : (
        <Link to='/profile'>
          <img className='profile' src={avatarURL} alt='Profile image' />
        </Link>
      )}

      <button className='logout' onClick={signOut}>
        <FiLogOut />
      </button>

      <div className='cart-mobile'>{user && user.isAdmin ? null : <DishCount />}</div>
    </Container>
  )
}
