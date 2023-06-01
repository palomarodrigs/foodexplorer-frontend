import { FiChevronLeft } from 'react-icons/fi'
import { Container } from './styles'

import { Link } from 'react-router-dom'

import { useFavorite } from '../../hooks/favorite'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FavoriteItem } from '../../components/FavoriteItem'

export function Favorites() {
  const { favorites } = useFavorite()
  return (
    <Container>
      <Header />

      {favorites.length > 0 ? (
        <main>
          <h1>My favorites</h1>
          <div className='favorites'>
            {favorites.map((dish) => (
              <FavoriteItem key={dish.id} dish={dish} />
            ))}
          </div>
        </main>
      ) : (
        <main>
          <div className='favorites-empty'>
            <p>
              No dishes have been added yet. Explore our menu and discover irresistible dishes to
              add to your favorites.
            </p>

            <Link to='/'>
              <FiChevronLeft />
              return to home
            </Link>
          </div>
        </main>
      )}

      <Footer />
    </Container>
  )
}
