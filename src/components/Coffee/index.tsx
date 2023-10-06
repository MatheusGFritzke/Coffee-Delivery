import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Type } from './components/Type'
import {
  Content,
  Title,
  Description,
  Price,
  Counter,
  Buy,
  IconDiv,
  Actions,
} from './styles'
import { useState } from 'react'

interface CoffeeProps {
  image: string
  types: Array<string>
  title: string
  description: string
  price: string
}

export function Coffee({
  image,
  types,
  title,
  description,
  price,
}: CoffeeProps) {
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
    <Content>
      <img src={image} alt="" />
      <Type types={types} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Buy>
        <Price>
          R$<span>{price}</span>
        </Price>
        <Actions>
          <Counter>
            <Minus size={14} color={'#8047F8'} onClick={minusQuantity} />
            {quantity}
            <Plus size={14} color={'#8047F8'} onClick={sumQuantity} />
          </Counter>
          <IconDiv>
            <ShoppingCart size={22} weight="fill" color={'#F3F2F2'} />
          </IconDiv>
        </Actions>
      </Buy>
    </Content>
  )
}
