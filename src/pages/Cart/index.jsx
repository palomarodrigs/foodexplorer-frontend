import { FiShoppingCart, FiChevronLeft } from 'react-icons/fi'
import { useState, useLayoutEffect } from 'react'
import { Container } from './styles'

import { useCart } from '../../hooks/cart'

import { Link } from 'react-router-dom'

import { Order } from '../../components/Order'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { PaymentStatus } from '../../components/PaymentStatus'

export function Cart() {
  const [methodPaymentOpen, setMethodPaymentOpen] = useState(false)

  const { cartItems, getTotalPrice } = useCart()

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
        {cartItems.length > 0 ? (
          <>
            <section className='cart'>
              <h2>My Order</h2>
              {cartItems.map((item) => (
                <div className='order' key={item.id}>
                  <Order item={item} />
                </div>
              ))}
              <p>Total: ${getTotalPrice()}</p>
              <Button className='advance' title='Advance' onClick={handlePayment} />
            </section>

            {methodPaymentOpen ? <PaymentStatus btnClose={handlePayment} /> : null}
          </>
        ) : (
          <section className='cart-empty'>
            <FiShoppingCart size={64} />

            <p>
              Your cart is empty. Explore our menu and discover irresistible dishes to add to your
              cart.
            </p>

            <Link to='/'>
              <FiChevronLeft />
              return to home
            </Link>
          </section>
        )}
      </main>

      <Footer />
    </Container>
  )
}
