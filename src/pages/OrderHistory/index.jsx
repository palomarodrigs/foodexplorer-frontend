import { Container } from './styles'

import { Header } from '../../components/Header'
import { OrderTable } from '../../components/OrderTable'
import { Footer } from '../../components/Footer'

export function OrderHistory() {
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
                <th>🔴 Pending</th>
                <th>20/05 às 18h00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de
                    Maracujá
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='table-mobile'>
          <table>
            <thead>
              <tr>
                <th>000004</th>
                <th>🔴 Pending</th>
                <th>20/05 às 18h00</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela, 1 x Suco de
                    Maracujá
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </Container>
  )
}
