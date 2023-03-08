import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import LogoExplorer from '../../assets/logo-explorer.svg'

export function SignIn() {
  return (
    <Container>
      <div className='header'>
        <img src={LogoExplorer} alt='logo explorer' />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h1>Login</h1>

        <label htmlFor='email'>Email</label>
        <Input placeholder='Example: example@example.com' />

        <label htmlFor='password'>Password</label>
        <Input placeholder='minimum 6 characters' />

        <Button title='Enter' />

        <Link to='/register'>Create account</Link>
      </Form>
    </Container>
  )
}
