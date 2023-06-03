import { Link } from 'react-router-dom'
import { FiChevronLeft, FiUpload } from 'react-icons/fi'
import { Container, Form } from './styles'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { IngredientItem } from '../../components/IngredientItem'

import { api } from '../../services/api'

export function NewDish() {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('meals')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  const navigate = useNavigate()

  function handleAddIngredient() {
    if (newIngredient.trim() === '') {
      alert('Please enter an ingredient!')
    } else {
      setIngredients((prev) => [...prev, newIngredient])
      setNewIngredient('')
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prev) => prev.filter((ingredient) => ingredient !== deleted))
  }

  async function handleCreateNewDish() {
    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', title)
    formData.append('category', category)
    formData.append('ingredients', ingredients.join(','))
    formData.append('price', price)
    formData.append('description', description)

    if (newIngredient) {
      return alert('You need to add the ingredient to create.')
    }

    const priceValue = formData.get('price')
    if (priceValue === '0') {
      alert('The price must be greater than $0!')
      return
    }

    if (!image || !title || !category || !ingredients || !price || !description) {
      alert('All fields are required to create the dish.')
      return
    }

    setIsSaving(true)
    try {
      await api.post('/dishes', formData)
      alert('Dish created successfully!')
      navigate(-1)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
        setIsSaving(false)
      } else {
        alert('It was not possible create the dish.')
        setIsSaving(false)
      }
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <div className='top'>
          <Link to='/'>
            <FiChevronLeft size={32} />
            return
          </Link>
          <h1>New dish</h1>
        </div>
        <Form>
          <div className='input-wrapper'>
            <div className='upload-image'>
              <Section title='Dish image' />
              <label htmlFor='upload'>
                {image ? image.name : 'Select image'}
                <FiUpload />
                <input id='upload' type='file' onChange={(e) => setImage(e.target.files[0])} />
              </label>
            </div>

            <div className='name'>
              <Section title='Name' />
              <Input placeholder='Ex.: Ceasar salad' onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='options'>
              <Section title='Category' />
              <select name='type' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value='meals'>Meals</option>
                <option value='drinks'>Drinks</option>
                <option value='desserts'>Desserts</option>
              </select>
            </div>

            <div className='ingredients'>
              <Section title='Ingredients' />
              <div className='tags'>
                {ingredients.map((ingredient, index) => (
                  <IngredientItem
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))}

                <IngredientItem
                  isNew
                  placeholder='New'
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredient}
                />
              </div>
            </div>

            <div className='price'>
              <Section title='Price' />
              <Input type='number' placeholder='$0' onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className='description'>
              <Section title='Description' />
              <Textarea
                placeholder='Briefly talk about the dish, its ingredients, and composition'
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>

          <div className='save-changes'>
            <Button
              title={isSaving ? 'Saving...' : 'Save changes'}
              onClick={handleCreateNewDish}
              disabled={isSaving}
            />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  )
}
