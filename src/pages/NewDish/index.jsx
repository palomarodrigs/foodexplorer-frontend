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
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('main')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)

  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients((prev) => [...prev, newIngredient])
    setNewIngredient('')
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prev) => prev.filter((ingredient) => ingredient !== deleted))
  }

  async function handleCreateNewDish() {
    const dishData = {
      title,
      category,
      ingredients,
      price,
      description
    }

    const formData = new FormData()
    formData.append('image', selectedFile)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    await api.post('/dishes', dishData, formData, config)
    alert('Dish created successfully!')
    navigate(-1)
  }

  function handleFileChange(event) {
    const file = event.target.files[0]
    setSelectedFile(file)
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
                {selectedFile ? selectedFile.name : 'Select image'}
                <FiUpload />
                <input id='upload' type='file' onChange={handleFileChange} />
              </label>
            </div>

            <div className='name'>
              <Section title='Name' />
              <Input placeholder='Ex.: Ceasar salad' onChange={(e) => setTitle(e.target.value)} />
            </div>

            <div className='options'>
              <Section title='Category' />
              <select name='type' value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value='main'>Main</option>
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
              <Input placeholder='$0' onChange={(e) => setPrice(e.target.value)} />
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
            <Button title='Save changes' onClick={handleCreateNewDish} />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  )
}
