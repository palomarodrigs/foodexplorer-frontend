import { Container } from './styles'

import { Header } from '../../components/Header'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Banner />
        <span>Meals</span>

        <p>dashjsahdawu</p>
      </main>

      <Footer />
    </Container>
  )
}
