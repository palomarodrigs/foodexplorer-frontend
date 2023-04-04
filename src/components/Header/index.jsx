import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { Container } from './styles'

import { LogoAdmin } from '../LogoAdmin'
import { MenuMobile } from '../MenuMobile'
import { DishCount } from '../DishCount'
import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'

import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  const isAdmin = false

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
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
        onClick={() => setMenuIsVisible(false)}
      />

      <div className='logo'>{isAdmin ? <LogoAdmin /> : <Logo />}</div>

      <div className='search'>
        <Input icon={FiSearch} placeholder='Search for dishes or ingredients' />
      </div>

      <Link id='favorites' to='/favorites'>
        My favorites
      </Link>

      <Link id='history' to='/history'>
        Order history
      </Link>

      <div className='content'>
        {isAdmin ? (
          <Button className='new' title='New dish' onClick={() => handleNewDish()} />
        ) : (
          <Button title='Cart (0)' onClick={() => handleCart()} />
        )}

        <button className='logout'>
          <FiLogOut />
        </button>

        <Link to='/profile'>
          <img className='profile' src='https://github.com/palomarodrigs.png' alt='Profile image' />
        </Link>
      </div>

      <div className='cart-mobile' onClick={() => handleCart()}>
        {isAdmin ? '' : <DishCount />}
      </div>
    </Container>
  )
}
