import { FiCamera, FiUser, FiMail, FiLock, FiChevronLeft } from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'

import { useState } from 'react'
import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Link } from 'react-router-dom'
import { api } from '../../services/api'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [newPassword, setNewPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
  const [avatar, setAvatar] = useState(avatarURL)
  const [avatarFile, setAvatarFile] = useState(null)
  const [isUpdating, setIsUpdating] = useState(false)

  async function handleUpdate() {
    setIsUpdating(true)

    if (newPassword && newPassword.length < 6) {
      setIsUpdating(false)
      return alert('The new password must contain at least 6 characters!')
    }

    if ((newPassword && !oldPassword) || (!newPassword && oldPassword)) {
      setIsUpdating(false)
      return alert('Please provide both the old and new password to update.')
    }

    const updated = {
      name,
      email,
      password: newPassword ? newPassword : undefined,
      old_password: newPassword ? oldPassword : undefined
    }

    const userUpdated = Object.assign(user, updated)
    await updateProfile({ user: userUpdated, avatarFile })
    setIsUpdating(false)

    setOldPassword('')
    setNewPassword('')
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0]
    setAvatarFile(file)

    const imagePreview = URL.createObjectURL(file)
    setAvatar(imagePreview)
  }

  return (
    <Container>
      <header>
        <Link to='/'>
          <button type='button'>
            <FiChevronLeft size={32} />
          </button>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />
          <label htmlFor='avatar'>
            <FiCamera />

            <input id='avatar' type='file' onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <Input
          placeholder='Name'
          type='text'
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder='Mail'
          type='text'
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder='Current password'
          type='password'
          icon={FiLock}
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          placeholder='New password'
          type='password'
          icon={FiLock}
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Button
          title={isUpdating ? 'Updating...' : 'Save'}
          onClick={handleUpdate}
          disabled={isUpdating}
        />
      </Form>

      <Footer />
    </Container>
  )
}
