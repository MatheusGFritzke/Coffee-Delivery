import {
  MainCoffeeSelected,
  Title,
  Content,
  DivStyled,
  Price,
  MainContent,
} from './styles'
import coffeeImage from '../../assets/coffeeLogos/coffee1.png'
import { Counter } from '../Coffee/styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Button } from '../ButtonPaymentForm/styles'

export function CoffeeSelectedItem() {
  const [quantity, setQuantity] = useState(1)

  function minusQuantity() {
    setQuantity((value) => {
      if (value === 1) return value
      return value - 1
    })
  }

  function sumQuantity() {
    setQuantity((value) => {
      if (value === 10) return value
      return value + 1
    })
  }

  return (
    <MainCoffeeSelected>
      <MainContent>
        <img src={coffeeImage} alt="" />
        <Content>
          <Title>Expresso Tradicional</Title>
          <DivStyled>
            <Counter>
              <Minus
                size={14}
                color={'#8047F8'}
                style={{ cursor: 'pointer' }}
                onClick={minusQuantity}
              />
              {quantity}
              <Plus
                size={14}
                color={'#8047F8'}
                style={{ cursor: 'pointer' }}
                onClick={sumQuantity}
              />
            </Counter>
            <Button startIcon={<Trash size={16} color={'#8047F8'} />}>
              remover
            </Button>
          </DivStyled>
        </Content>
      </MainContent>
      <Price>R$ 9,90</Price>
    </MainCoffeeSelected>
  )
}
