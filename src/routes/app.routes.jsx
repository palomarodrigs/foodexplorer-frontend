import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Favorites } from '../pages/Favorites'
import { Cart } from '../pages/Cart'
import { OrderHistory } from '../pages/OrderHistory'
import { Profile } from '../pages/Profile'
import { Details } from '../pages/Details'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/edit/:id' element={<EditDish />} />
      <Route path='/new' element={<NewDish />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/history' element={<OrderHistory />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  )
}
