import { FiChevronLeft } from 'react-icons/fi'
import { Container } from './styles'

import { OrderTable } from '../../components/OrderTable'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'
import { Link } from 'react-router-dom'
import { api } from '../../services/api'

export function OrderHistory() {
  const [orders, setOrders] = useState([])

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

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get('/carts')
      setOrders(response.data)
    }

    fetchOrders()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <div className='table-desktop'>
          <OrderTable data={orders} />
        </div>
        <div className='table-mobile'>
          {orders.length > 0 ? (
            orders.map((order) => {
              return (
                <table key={String(order.id)}>
                  <thead>
                    <tr>
                      <th>0000{order.id}</th>
                      {user && user.isAdmin ? null : <th>{order.status}</th>}
                      <th>{formatDate(order.created_at)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='tbody-wrapper'>
                      <td>
                        <p>
                          <span>
                            {order.items
                              .map((item) => `${item.quantity} x ${item.title}`)
                              .join(', ')}
                          </span>
                        </p>
                      </td>
                      {user && user.isAdmin ? (
                        <td>
                          <select name='type'>
                            <option value='pending'>🔴 Pending</option>
                            <option value='preparing'>🟡 Preparing</option>
                            <option value='delivered'>🟢 Delivered</option>
                          </select>
                        </td>
                      ) : null}
                    </tr>
                  </tbody>
                </table>
              )
            })
          ) : (
            <section className='order-empty'>
              <p>
                No requests registered yet. Explore our menu and discover irresistible dishes to
                order!
              </p>

              <Link to='/'>
                <FiChevronLeft />
                return to home
              </Link>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </Container>
  )
}
