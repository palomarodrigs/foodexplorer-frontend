import { Container } from './styles'

import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Carousel } from '../../components/Carousel'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Banner />

        <div className='content'>{/* <Carousel /> */}</div>
      </main>

      <Footer />
    </Container>
  )
}
