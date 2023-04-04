import { Container } from './styles'

import { OrderTable } from '../../components/OrderTable'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function OrderHistory() {
  const isAdmin = false

  return (
    <Container>
      <Header />

      <main>
        <div className='table-desktop'>
          <OrderTable />
        </div>

        <div className='table-mobile'>
          <h1>Orders</h1>

          <table>
            <thead>
              <tr>
                <th>000004</th>
                {isAdmin ? '' : <th>🔴 Pending</th>}
                <th>05/20 at 18h00</th>
              </tr>
            </thead>

            <tbody>
              <tr className='tbody-wrapper'>
                <td>
                  <p>
                    1 x Radish Salad, 1 x Parma Toast, 1 x Cinnamon Tea, 1 x Passion Fruit Juice
                  </p>
                </td>

                {isAdmin ? (
                  <td>
                    <select name='type'>
                      <option value='pending'>🔴 Pending</option>
                      <option value='preparing'>🟡 Preparing</option>
                      <option value='delivered'>🟢 Delivered</option>
                    </select>
                  </td>
                ) : (
                  ''
                )}
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th>000004</th>
                {isAdmin ? '' : <th>🔴 Pending</th>}
                <th>05/20 at 18h00</th>
              </tr>
            </thead>

            <tbody>
              <tr className='tbody-wrapper'>
                <td>
                  <p>
                    1 x Radish Salad, 1 x Parma Toast, 1 x Cinnamon Tea, 1 x Passion Fruit Juice
                  </p>
                </td>

                {isAdmin ? (
                  <td>
                    <select name='type'>
                      <option value='pending'>🔴 Pending</option>
                      <option value='preparing'>🟡 Preparing</option>
                      <option value='delivered'>🟢 Delivered</option>
                    </select>
                  </td>
                ) : (
                  ''
                )}
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
