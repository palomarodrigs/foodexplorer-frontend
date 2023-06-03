import { Container } from './styles'
import { FiX } from 'react-icons/fi'

import Pix from '../../assets/pix-logo.svg'
import QrCode from '../../assets/qrcode.svg'
import CreditCard from '../../assets/credit-card.svg'

import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../../hooks/cart'
import { api } from '../../services/api'

export function PaymentStatus({ btnClose }) {
  const [number, setNumber] = useState('')
  const [cvc, setCvc] = useState('')
  const [date, setDate] = useState('')
  const [isPix, setIsPix] = useState(false)
  const [isCredit, setIsCredit] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const { cartItems, clearCart } = useCart()

  const handleNumberCard = (event) => {
    const limit = 19
    const inputNumber = event.target.value.replace(/\D/g, '')
    let formattedNumber = ''

    for (let i = 0; i < inputNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedNumber += ' '
      }
      formattedNumber += inputNumber[i]
    }

    if (formattedNumber.length <= limit) {
      setNumber(formattedNumber)
    }
  }

  const handleCvc = (event) => {
    const limit = 3
    const inputValue = event.target.value.replace(/\D/g, '')
    setCvc(inputValue.slice(0, limit))
  }

  const handleFormattedDate = (event) => {
    const inputDate = event.target.value

    // remover caracteres nao numericos
    const numericDate = inputDate.replace(/\D/g, '')

    const limitDate = numericDate.slice(0, 4)

    if (limitDate.length === 4) {
      const formattedDate = `${limitDate.substring(0, 2)}/${limitDate.substring(2, 4)}`
      setDate(formattedDate)
    } else {
      setDate(limitDate)
    }
  }

  const handleFinishPayment = async () => {
    setIsLoading(true)

    if (isCredit) {
      if (number.length < 16) {
        alert('Invalid card numbers. Please enter the 16 digits.')
        setIsLoading(false)
        return
      }

      if (date.length < 4) {
        alert('Invalid date. Please enter a valid date.')
        setIsLoading(false)
        return
      }

      if (cvc.length < 3) {
        alert('Invalid CVC. Please enter the 3 digits.')
        setIsLoading(false)
        return
      }
    }

    try {
      await api.post('/carts', {
        status: '🔴 Pending',
        paymentMethod: isPix ? 'pix' : 'credit',
        orders: cartItems.map((item) => ({
          id: item.id,
          title: item.title,
          quantity: item.quantity
        }))
      })
      alert('Payment accepted! You will be redirected to track your order.')
      navigate('/history')
      clearCart()
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
        setIsLoading(false)
      } else {
        alert('It was not possible to process the payment.')
        setIsLoading(false)
      }
    }
  }

  function selectPix() {
    setIsPix(true)
    setIsCredit(false)
  }

  function selectCredit() {
    setIsPix(false)
    setIsCredit(true)
  }

  useEffect(() => {
    setIsPix(true)
    setIsCredit(false)
  }, [])

  return (
    <Container>
      <button id='close' onClick={btnClose}>
        <FiX size={32} />
        Close
      </button>
      <div className='content'>
        <h2>Payment</h2>

        <div className='method-payment'>
          <div className='options'>
            <button className='pix' onClick={selectPix}>
              <img src={Pix} alt='Icon pix' />
              Pix
            </button>

            <button className='credit-card' onClick={selectCredit}>
              <img src={CreditCard} alt='Icon credit card' />
              Credit Card
            </button>
          </div>
          {isPix && (
            <div className='qrcode ' id='qrcode'>
              <img src={QrCode} alt='Logo of qrcode' />
            </div>
          )}

          {isCredit && (
            <div className='card-fields'>
              <div id='number-card'>
                <Section title='Card number' />
                <Input
                  placeholder='0000 0000 0000 0000'
                  value={number}
                  onChange={handleNumberCard}
                />
              </div>

              <div className='card-wrapper'>
                <div id='validate'>
                  <Section title='Validation' />
                  <Input
                    id='date'
                    placeholder='04/25'
                    maxLength='5'
                    value={date}
                    onChange={handleFormattedDate}
                  />
                </div>

                <div id='code-card'>
                  <Section title='CVC' />
                  <Input
                    id='code'
                    placeholder='000'
                    type='password'
                    value={cvc}
                    onChange={handleCvc}
                  />
                </div>
              </div>
            </div>
          )}

          <Button
            className='send-payment'
            title={isLoading ? 'Processing payment...' : 'Finish payment'}
            onClick={handleFinishPayment}
            disabled={isLoading}
          />
        </div>
      </div>
    </Container>
  )
}
