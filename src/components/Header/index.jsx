import { FiSearch, FiLogOut, FiMenu } from 'react-icons/fi'
import { Container } from './styles'

import Logo from '../../assets/logo.svg'
import Receipt from '../../assets/receipt.svg'

import { Input } from '../Input'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Button className='menu-mobile' icon={FiMenu} />

      <div className='logo'>
        <img src={Logo} alt='logo explorer' />
        <h1>food explorer</h1>
      </div>

      <div className='search'>
        <Input icon={FiSearch} placeholder='Search for dishes or ingredients' />
      </div>

      <div className='content'>
        <Button title='Requests (0)' />

        <button className='logout'>
          <FiLogOut />
        </button>

        <a>
          <img src='https://github.com/palomarodrigs.png' alt='' />
        </a>
      </div>

      <button className='receipt-mobile'>
        <img src={Receipt} alt='' />
      </button>
    </Container>
  )
}
