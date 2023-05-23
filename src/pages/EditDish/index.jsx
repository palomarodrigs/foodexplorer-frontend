import { FiChevronLeft, FiUpload } from 'react-icons/fi'
import { Container, Form } from './styles'
import { Link } from 'react-router-dom'

import { api } from '../../services/api'

import { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Textarea } from '../../components/Textarea'
import { IngredientItem } from '../../components/IngredientItem'

export function EditDish() {
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const fileInputRef = useRef(null)

  const { id } = useParams()
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

  async function handleUpdateDish() {
    if (image) {
      const dishFilename = new FormData()
      dishFilename.append('image', image)

      await api.patch(`dishes/${id}`, dishFilename)
    }

    if (ingredients.length === 0) {
      alert('Please provide at least one ingredient!')
      return
    }

    if (Number(price) === 0) {
      alert('The price must be greater than $0!')
      return
    }

    const newCategory = Array.isArray(category) ? category[0].name : category

    const dishData = {
      title,
      category: newCategory,
      ingredients,
      price,
      description
    }

    setIsLoading(true)

    try {
      await api.put(`/dishes/${id}`, dishData)
      alert('Dish updated successfully!')
      navigate(`/details/${id}`)
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
        setIsLoading(false)
      } else {
        alert('It was not possible update the dish.')
        setIsLoading(false)
      }
    }
  }

  async function handleDeleteDish() {
    const isConfirm = confirm('Are you sure you want to delete the dish?')

    setIsDeleting(true)
    try {
      if (isConfirm) {
        await api.delete(`/dishes/${id}`)
        navigate('/')
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
        setIsDeleting(false)
      } else {
        alert('It was not possible delete the dish.')
        setIsDeleting(false)
      }
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`)
      const { title, description, category, price, ingredients, image } = response.data

      setImage({ preview: image, name: image })
      setTitle(title)
      setDescription(description)
      setCategory(category)
      setPrice(price)
      setIngredients(ingredients.map((ingredient) => ingredient.name))
    }

    fetchDish()
  }, [])

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
                {image && image.name ? image.name : 'Select image'}
                <FiUpload />
                <input
                  id='upload'
                  type='file'
                  onChange={(e) => setImage(e.target.files[0])}
                  ref={fileInputRef}
                />
              </label>
            </div>

            <div className='name'>
              <Section title='Name' />
              <Input
                placeholder='Caesar salad'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
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
              <Input
                type='number'
                value={price}
                placeholder='$0'
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className='description'>
              <Section title='Description' />
              <Textarea
                placeholder='Caesar Salad is a refreshing option for the summer.'
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className='btns'>
            <Button
              className='delete'
              title={isDeleting ? 'Deleting...' : 'Delete dish'}
              disabled={isDeleting}
              onClick={handleDeleteDish}
            />
            <Button
              className='save'
              title={isLoading ? 'Loading...' : 'Save changes'}
              disabled={isLoading}
              onClick={handleUpdateDish}
            />
          </div>
        </Form>
      </main>

      <Footer />
    </Container>
  )
}
