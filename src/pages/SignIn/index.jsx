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
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()

  function handleSignIn() {
    signIn({ email, password })
    setLoading(true)
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
        <Input placeholder='minimum 6 characters' onChange={(e) => setPassword(e.target.value)} />

        <Button title='Enter' onClick={handleSignIn} disabled={loading} />

        <Link to='/register'>Create account</Link>
      </Form>
    </Container>
  )
}
