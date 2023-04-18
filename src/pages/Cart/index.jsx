import { Container } from './styles'
import { useState, useLayoutEffect } from 'react'

import { Order } from '../../components/Order'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { PaymentStatus } from '../../components/PaymentStatus'

export function Cart() {
  const [methodPaymentOpen, setMethodPaymentOpen] = useState(false)

  const handlePayment = () => {
    setMethodPaymentOpen((prev) => !prev)
  }

  useLayoutEffect(() => {
    const handleResize = () => {
      const isResponsive = window.innerWidth <= 900
      if (isResponsive) {
        setMethodPaymentOpen(false)
      } else {
        setMethodPaymentOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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

          <Button className='advance' title='Advance' onClick={handlePayment} />
        </section>
        {methodPaymentOpen ? <PaymentStatus btnClose={handlePayment} /> : null}
      </main>

      <Footer />
    </Container>
  )
}
