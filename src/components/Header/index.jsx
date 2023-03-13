import Receipt from '../../assets/receipt.svg'
import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi'

import { Link } from 'react-router-dom'
import { Container } from './styles'

import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'
import { LogoAdmin } from '../LogoAdmin'
import { ButtonText } from '../ButtonText'

import { useNavigate } from 'react-router-dom'

export function Header() {
  const isAdmin = false

  const navigate = useNavigate()

  function handleCart() {
    navigate('/cart')
  }

  return (
    <Container>
      <Button className='menu-mobile' icon={FiMenu} />

      <div className='logo'>{isAdmin ? <LogoAdmin /> : <Logo />}</div>

      <div className='search'>
        <Input icon={FiSearch} placeholder='Search for dishes or ingredients' />
      </div>

      {isAdmin ? (
        ''
      ) : (
        <div className='btns'>
          <ButtonText title='My favorites' />
          <ButtonText title='Order history' />
        </div>
      )}

      <div className='content'>
        {isAdmin ? (
          <Button className='new' title='New dish' />
        ) : (
          <Button title='Cart (0)' onClick={() => handleCart()} />
        )}

        <button className='logout'>
          <FiLogOut />
        </button>

        <Link to='/profile'>
          <img className='profile' src='https://github.com/palomarodrigs.png' alt='' />
        </Link>
      </div>

      {isAdmin ? (
        ''
      ) : (
        <button className='receipt-mobile'>
          <img src={Receipt} alt='' />
        </button>
      )}
    </Container>
  )
}
