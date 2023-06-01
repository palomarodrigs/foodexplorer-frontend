import { Container } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { useFavorite } from '../../hooks/favorite'

import { api } from '../../services/api'

import imagePlaceholder from '../../assets/image_placeholder.svg'

export function FavoriteItem({ dish }) {
  const { removeFavorite } = useFavorite()

  const imageURL = dish.image ? `${api.defaults.baseURL}/files/${dish.image}` : imagePlaceholder

  const handleRemoveFavorite = () => {
    removeFavorite(dish.id)
  }

  return (
    <Container>
      <div className='favorites-list'>
        <div className='favorites-wrapper'>
          <img src={imageURL} alt={dish.title} />
          <div className='item'>
            <span>{dish.title}</span>
            <ButtonText title='Remove from Favorites' onClick={handleRemoveFavorite} />
          </div>
        </div>
      </div>
    </Container>
  )
}
