import { Container } from './styles'

import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'

export function Home() {
  const isEdit = true

  return (
    <Container>
      <Header />

      <main>
        <div className='content'>
          <Banner className='banner' />

          <div className='carousels'>
            <Carousel isEdit={isEdit} />
          </div>
        </div>

        <Footer />
      </main>
    </Container>
  )
}
