import { Container } from './styles'
import CardCarousel from '../../components/Carousel/components/CardCarousel'

import { meals, desserts, drinks } from './data'

export function Carousel({ isEdit }) {
  return (
    <Container>
      <CardCarousel props={meals} title='Meals' isEdit={isEdit} />
      <CardCarousel props={desserts} title='Desserts' isEdit={isEdit} />
      <CardCarousel props={drinks} title='Drinks' isEdit={isEdit} />
    </Container>
  )
}
