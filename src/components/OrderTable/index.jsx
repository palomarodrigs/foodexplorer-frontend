import { FiChevronLeft } from 'react-icons/fi'
import { Container } from './styles'

import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function OrderTable({ data }) {
  const { user } = useAuth()

  const formatDate = (date) => {
    const dateFormatted = new Date(date)

    const monthFormatted = (dateFormatted.getMonth() + 1).toString().padStart(2, '0')
    const minutesFormatted = dateFormatted.getMinutes().toString().padStart(2, '0')

    const day = dateFormatted.getDate()

    const hours = dateFormatted.getHours() - 4
    const formattedHours = hours >= 0 ? hours : 24 + hours

    return `${monthFormatted}/${day} at ${formattedHours}h${minutesFormatted}`
  }

  return (
    <Container>
      {data.length > 0 ? (
        <main>
          <h1>Order history</h1>
          <table style={{ overflowY: 'auto' }}>
            <thead>
              <tr>
                <th>Status</th>
                <th>Code</th>
                <th>Detailing</th>
                <th>DateTime</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order) => (
                <tr key={String(order.id)}>
                  {user && user.isAdmin ? (
                    <td>
                      <select name='type'>
                        <option value='pending'>🔴 Pending</option>
                        <option value='preparing'>🟡 Preparing</option>
                        <option value='delivered'>🟢 Delivered</option>
                      </select>
                    </td>
                  ) : (
                    <td>
                      <span>{order.status}</span>
                    </td>
                  )}
                  <td>
                    <p>0000{order.id}</p>
                  </td>
                  <td>
                    <p>
                      <span>
                        {order.items.map((item) => `${item.quantity} x ${item.title}`).join(', ')}
                      </span>
                    </p>
                  </td>
                  <td>
                    <p>{formatDate(order.created_at)}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      ) : (
        <section className='order-empty'>
          <p>
            No requests registered yet. Explore our menu and discover irresistible dishes to order!
          </p>
          <Link to='/'>
            <FiChevronLeft />
            Return to home
          </Link>
        </section>
      )}
    </Container>
  )
}
