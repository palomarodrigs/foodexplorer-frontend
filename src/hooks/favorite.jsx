import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './auth'

export const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
  const { user } = useAuth()
  const [favorites, setFavorites] = useState([])

  const addFavorite = (dish) => {
    const isAlreadyFavorite = favorites.some((favoriteDish) => favoriteDish.id === dish.id)

    if (isAlreadyFavorite) {
      alert('The dish is already in the favorites.')
      return
    }

    setFavorites((prevFavorites) => [...prevFavorites, dish])
    alert('Dish added to favorites!')
  }

  const removeFavorite = (dishId) => {
    const isConfirm = window.confirm('Are you sure you want to remove the dish from favorites?')

    if (isConfirm) {
      setFavorites((prevFavorites) =>
        prevFavorites.filter((favoriteDish) => favoriteDish.id !== dishId)
      )
    }
  }

  const isFavorite = (dish) => {
    return favorites.some((favoriteDish) => favoriteDish.id === dish.id)
  }

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem(`@foodexplorer:favorites-${user?.id}`)) || []
    setFavorites(storedFavorites)
  }, [user])

  useEffect(() => {
    if (user) {
      localStorage.setItem(`@foodexplorer:favorites-${user.id}`, JSON.stringify(favorites))
    }
  }, [favorites, user])

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export const useFavorite = () => {
  const context = useContext(FavoriteContext)

  return context
}
