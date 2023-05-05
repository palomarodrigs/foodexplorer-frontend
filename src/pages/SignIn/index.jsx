import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import LogoExplorer from '../../assets/logo-explorer.svg'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { signIn } = useAuth()

  function handleSignIn() {
    setIsLoading(true)
    signIn({ email, password })
      .then(() => {
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('It was not possible to sign in')
        }
      })
  }

  return (
    <Container>
      <div className='header'>
        <img src={LogoExplorer} alt='logo explorer' />
        <h1>food explorer</h1>
      </div>

      <Form>
        <h1>Login</h1>

        <label htmlFor='email'>Email</label>
        <Input
          placeholder='Example: example@example.com'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <Input
          placeholder='minimum 6 characters'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title={isLoading ? 'Loading...' : 'Enter'}
          onClick={handleSignIn}
          disabled={isLoading}
        />

        <Link to='/register'>Create account</Link>
      </Form>
    </Container>
  )
}
