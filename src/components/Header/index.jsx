import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi'
import Receipt from '../../assets/receipt.svg'

import { Container } from './styles'
import { Link } from 'react-router-dom'

import { LogoAdmin } from '../LogoAdmin'
import { Logo } from '../Logo'
import { Input } from '../Input'
import { Button } from '../Button'
import { ButtonText } from '../ButtonText'

export function Header() {
  const isAdmin = true

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
          <Button title='Requests (0)' />
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
