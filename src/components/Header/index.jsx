import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { Container } from './styles'

import { LogoAdmin } from '../LogoAdmin'
import { BurgerMenu } from '../BurgerMenu'
import { DishCount } from '../DishCount'
import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const isAdmin = false

  const navigate = useNavigate()

  const { signOut } = useAuth()

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

      <div className='logo'>{isAdmin ? <LogoAdmin /> : <Logo />}</div>

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

      {isAdmin ? (
        <Button className='btn-new' title='New dish' onClick={() => handleNewDish()} />
      ) : (
        <Button className='btn-cart' title='Cart (0)' onClick={() => handleCart()} />
      )}

      <Link to='/profile'>
        <img className='profile' src='https://github.com/palomarodrigs.png' alt='Profile image' />
      </Link>

      <button className='logout' onClick={signOut}>
        <FiLogOut />
      </button>

      <div className='cart-mobile' onClick={() => handleCart()}>
        {isAdmin ? null : <DishCount />}
      </div>
    </Container>
  )
}
