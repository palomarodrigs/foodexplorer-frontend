import { Container } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { FavoriteItem } from '../../components/FavoriteItem'

export function Favorites() {
  return (
    <Container>
      <Header />

      <main>
        <h1>My favorites</h1>

        <div className='favorites'>
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
          <FavoriteItem />
        </div>
      </main>

      <Footer />
    </Container>
  )
}
