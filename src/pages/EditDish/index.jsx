import { Link } from 'react-router-dom'
import { FiChevronLeft, FiUpload } from 'react-icons/fi'
import { Container, Form } from './styles'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { IngredientItem } from '../../components/IngredientItem'

export function EditDish() {
  return (
    <Container>
      <Header />

      <main>
        <div className='top'>
          <Link to='/'>
            <FiChevronLeft size={32} />
            return
          </Link>
          <h1>Edit dish</h1>
        </div>
        <Form>
          <div className='input-wrapper'>
            <div className='upload-image'>
              <Section title='Dish image' />
              <label htmlFor='upload'>
                Select image
                <FiUpload />
                <input id='upload' type='file' />
              </label>
            </div>

            <div className='name'>
              <Section title='Name' />
              <Input placeholder='Caesar salad' />
            </div>

            <div className='options'>
              <Section title='Category' />
              <select name='type'>
                <option value='main'>Main</option>
                <option value='drinks'>Drinks</option>
                <option value='desserts'>Desserts</option>
              </select>
            </div>

            <div className='ingredients'>
              <Section title='Ingredients' />
              <div className='tags'>
                <IngredientItem value='test' />
                <IngredientItem placeholder='test' value='salad' isNew />
              </div>
            </div>

            <div className='price'>
              <Section title='Price' />
              <Input placeholder='$0' />
            </div>

            <div className='description'>
              <Section title='Description' />
              <Textarea placeholder='Caesar Salad is a refreshing option for the summer.' />
            </div>
          </div>
          <div className='btns'>
            <Button className='delete' title='Delete dish' />
            <Button className='save' title='Save changes' />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  )
}
