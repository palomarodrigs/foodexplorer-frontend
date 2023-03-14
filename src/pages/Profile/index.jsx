import { FiCamera, FiUser, FiMail, FiLock, FiLogOut, FiChevronLeft } from 'react-icons/fi'
import { Container, Form, Avatar } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { Link } from 'react-router-dom'

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <button type="button">
            <FiChevronLeft size={32} />
          </button>
        </Link>

        <button className="logout" type="button">
          <FiLogOut size={25} />
        </button>
      </header>

      <Form>
        <Avatar>
          <img src="http://github.com/palomarodrigs.png" alt="" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          // value={name}
          // onChange={e => setName(e.target.value)}
        />

        <Input placeholder="Mail" type="text" icon={FiMail} />

        <Input placeholder="Current password" type="password" icon={FiLock} />

        <Input placeholder="New password" type="password" icon={FiLock} />

        <Button title="Save" />
      </Form>

      <Footer />
    </Container>
  )
}
