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
  const [isCreating, setIsCreating] = useState(false)

  const navigate = useNavigate()

  function handleSignUp() {
    setIsCreating(false)

    if (!name  || !password) {
      return alert('Fill in all fields!')
    }

    if(!email || !email.includes('@') || !email.includes(".com")){
      return alert('create a valid email')
    }

    if (password.length < 6) {
      alert('The password must contain at least 6 characters!')
      setPassword("")
      return
    }

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
          type="email"
          placeholder='Example: example@example.com'
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor='password'>Password</label>
        <Input
          value={password}
          placeholder='minimum 6 characters'
          type='password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button
          title={isCreating ? 'Creating...' : 'Create'}
          onClick={handleSignUp}
          disabled={isCreating}
        />

        <Link to='/'>I already have account</Link>
      </Form>
    </Container>
  )
}
