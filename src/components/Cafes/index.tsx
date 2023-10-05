import { MainContent, Title, CoffeeList } from './styles'
import coffee1 from '../../assets/coffee-1.png'
import { Coffee } from '../Coffee'

const coffeeList = [
  {
    image: coffee1,
    type: ['Tradicional', 'Gelado'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
  },
]

export function Cafes() {
  return (
    <MainContent>
      <Title>Nossos cafés</Title>
      <CoffeeList>
        {coffeeList.map(({ image, type, title, description, price }) => (
          <Coffee
            key={image}
            image={image}
            types={type}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </CoffeeList>
    </MainContent>
  )
}
