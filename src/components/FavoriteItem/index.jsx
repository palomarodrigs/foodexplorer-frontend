import { Container } from './styles'

import { ButtonText } from '../../components/ButtonText'

import Spaghetti from '../../assets/spaghetti.png'

export function FavoriteItem() {
  return (
    <Container>
      <div className='favorites-list'>
        <div className='favorites-wrapper'>
          <img src={Spaghetti} alt='' />
          <div className='item'>
            <span>Spaghetti</span>
            <ButtonText title='Remove from Favorites' />
          </div>
        </div>
      </div>
    </Container>
  )
}
