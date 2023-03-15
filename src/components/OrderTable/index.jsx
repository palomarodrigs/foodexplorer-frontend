import { Container } from './styles'

export function OrderTable() {
  return (
    <Container>
      <main>
        <h1>Order history</h1>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Code</th>
              <th>Detailing</th>
              <th>DateTime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>🔴 Pending</span>
              </td>
              <td>
                <p>00000004</p>
              </td>
              <td>
                <p>1 x Radish Salad, 1 x Parma Toast</p>
              </td>
              <td>
                <p>05/20 at 18h00</p>
              </td>
            </tr>

            <tr>
              <td>
                <span>🟡 Preparing</span>
              </td>
              <td>
                <p>00000003</p>
              </td>
              <td>
                <p>1 x Radish Salad, 1 x Parma Toast, 1 x Cinnamon Tea, 1 x Passion Fruit Juice</p>
              </td>
              <td>
                <p>05/20 at 18h00</p>
              </td>
            </tr>
            {/* <tr>Preparing</tr>
            <tr>Delivered</tr>
            <tr>Delivered</tr> */}
          </tbody>
        </table>
      </main>
    </Container>
  )
}
