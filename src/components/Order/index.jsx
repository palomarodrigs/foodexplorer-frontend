import { Container } from './styles'

export function Order() {
  return (
    <Container>
      <div className='orders'>
        <img src='' alt='' />
        <div className='details'>
          <div className='product'>
            <span>1 x</span>
            <span>Salad Radish</span>
            <p>$25</p>
          </div>
          <button>Remove</button>
        </div>
      </div>
    </Container>
  )
}
