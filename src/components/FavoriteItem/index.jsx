import { Container } from './styles'

import { ButtonText } from '../../components/ButtonText'

export function FavoriteItem() {
  return (
    <Container>
      <div className='favorites-list'>
        <div className='favorites-wrapper'>
          <img src='' alt='' />
          <div className='item'>
            <span>Spaghetti</span>
            <ButtonText title='Remove from Favorites' />
          </div>
        </div>
      </div>
    </Container>
  )
}
