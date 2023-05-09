import { Container } from './styles'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Hero className='front-cover' />
        <div className='carousels'>
          <Carousel />
        </div>

        <Footer />
      </main>
    </Container>
  )
}
