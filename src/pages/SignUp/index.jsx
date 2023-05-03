import { api } from '../../services/api'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import LogoExplorer from '../../assets/logo-explorer.svg'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert('Fill in all fields!')
    }

    if (password.length < 6) {
      return alert('The password must contain at least 6 characters!')
    }

    setLoading(true)

    api
      .post('/users', { name, email, password })
      .then(() => {
        alert('Successfully registered user!')
        navigate(-1)
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message)
        } else {
          alert('It was not possible to register')
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
        <h1>Create your account</h1>

        <label htmlFor='name'>Name</label>
        <Input placeholder='Example: Maria da Silva' onChange={(e) => setName(e.target.value)} />

        <label htmlFor='email'>Email</label>
        <Input
          placeholder='Example: example@example.com'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <Input placeholder='minimum 6 characters' onChange={(e) => setPassword(e.target.value)} />

        <Button title='Create account' onClick={handleSignUp} disabled={loading} />

        <Link to='/'>I already have account</Link>
      </Form>
    </Container>
  )
}
