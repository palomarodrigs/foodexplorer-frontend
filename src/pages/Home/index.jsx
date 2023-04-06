import { Container } from './styles'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'

export function Home() {
  const isEdit = false

  return (
    <Container>
      <Header />

      <main>
        <div className='main-content'>
          <Hero className='front-cover' />

          <div className='carousels'>
            <Carousel isEdit={isEdit} />
          </div>
        </div>

        <Footer />
      </main>
    </Container>
  )
}
