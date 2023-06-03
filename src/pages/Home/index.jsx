import { Container } from './styles'

import { useState, useEffect } from 'react'

import { Header } from '../../components/Header'
import { Hero } from '../../components/Hero'
import { Footer } from '../../components/Footer'
import { Carousel } from '../../components/Carousel'

import { api } from '../../services/api'

export function Home() {
  const [dishes, setDishes] = useState([])
  const [search, setSearch] = useState('')

  const meals = dishes.filter((dish) => dish.category === 'meals')
  const desserts = dishes.filter((dish) => dish.category === 'desserts')
  const drinks = dishes.filter((dish) => dish.category === 'drinks')

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?title=${search}&ingredients=${search}`)
      const fetchedDishes = response.data
      setDishes(fetchedDishes)
    }

    fetchDishes()
  }, [search])

  return (
    <Container>
      <Header search={setSearch} />

      <main>
        <Hero className='front-cover' />
        <div className='carousels'>
          <Carousel meals={meals} desserts={desserts} drinks={drinks} />
        </div>
      </main>

      <Footer />
    </Container>
  )
}
