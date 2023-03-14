import { Container } from './styles'

import { Header } from '../../components/Header'
import { Order } from '../../components/Order'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import Pix from '../../assets/pix-logo.svg'
import QrCode from '../../assets/qrcode.svg'
import CreditCard from '../../assets/credit-card.svg'

export function Cart() {
  return (
    <Container>
      <Header />

      <main>
        <section className='orders'>
          <h2>My order</h2>
          <Order />
          <Order />
          <Order />
          <Order />
          <p>Total: $100</p>

          <Button className='advance' title='Advance' />
        </section>

        <section className='payment'>
          <h2>Payment</h2>

          <div className='method-payment'>
            <div className='options'>
              <button className='pix-option'>
                <img src={Pix} alt='' />
                Pix
              </button>

              <button className='creditcard-option'>
                <img src={CreditCard} alt='' />
                Credit Card
              </button>
            </div>
            <div className='qrcode'>
              <img src={QrCode} alt='' />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Container>
  )
}
