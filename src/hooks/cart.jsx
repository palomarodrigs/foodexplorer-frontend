import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './auth'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const { user } = useAuth()
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem(`@foodexplorer:cartItems-${user?.id}`)) || []
  )

  const addToCart = (item, quantity) => {
    const existingItemInCart = cartItems.findIndex((cartItem) => cartItem.id === item.id)

    if (existingItemInCart !== -1) {
      const updatedCartItems = [...cartItems]
      updatedCartItems[existingItemInCart].quantity += quantity
      setCartItems(updatedCartItems)
    } else {
      const newItem = { ...item, quantity }
      setCartItems([...cartItems, newItem])
    }

    alert('Dish added to cart')
  }

  const removeFromCart = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
    const isConfirm = window.confirm('Are you sure you want to remove the dish from the cart?')

    if (isConfirm) {
      setCartItems(updatedCart)
    }
  }

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const clearCart = () => {
    setCartItems([])
  }

  useEffect(() => {
    if (user) {
      const userCartItems =
        JSON.parse(localStorage.getItem(`@foodexplorer:cartItems-${user.id}`)) || []
      setCartItems(userCartItems)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      localStorage.setItem(`@foodexplorer:cartItems-${user.id}`, JSON.stringify(cartItems))
    }
  }, [cartItems, user])

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, getTotalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  return context
}
