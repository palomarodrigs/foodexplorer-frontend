import { Container, PaymentContainer } from './styles'
import { FiX } from 'react-icons/fi'

import Pix from '../../assets/pix-logo.svg'
import QrCode from '../../assets/qrcode.svg'
import CreditCard from '../../assets/credit-card.svg'
import Clock from '../../assets/clock.svg'
import Check from '../../assets/check.svg'
import ForkKnife from '../../assets/forknife.svg'

import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { useState, useEffect } from 'react'

export function PaymentStatus({ btnClose }) {
  const [isPix, setIsPix] = useState(false)
  const [isCredit, setIsCredit] = useState(false)

  const [awaitingPayment, setAwaitingPayment] = useState(false)
  const [approvedPayment, setApprovedPayment] = useState(false)
  const [orderDelivered, setOrderDelivered] = useState(false)

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
                <Input placeholder='0000 0000 0000 0000' />
              </div>

              <div className='card-wrapper'>
                <div id='validate'>
                  <Section title='Validation' />
                  <Input id='date' placeholder='04/25' />
                </div>

                <div id='code-card'>
                  <Section title='CVC' />
                  <Input id='code' placeholder='000' />
                </div>
              </div>

              <Button className='send-payment' title='Finish payment' />
            </div>
          )}

          {awaitingPayment && (
            <PaymentContainer>
              <img src={Clock} />
              <span>Waiting for payment in the box!</span>
            </PaymentContainer>
          )}

          {approvedPayment && (
            <PaymentContainer>
              <img src={Check} />
              <span>Payment approved!</span>
            </PaymentContainer>
          )}

          {orderDelivered && (
            <PaymentContainer>
              <img src={ForkKnife} />
              <span>Order delivered!</span>
            </PaymentContainer>
          )}
        </div>
      </div>
    </Container>
  )
}
