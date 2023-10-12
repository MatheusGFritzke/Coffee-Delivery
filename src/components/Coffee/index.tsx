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
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

interface CoffeeProps {
  image: string
  types: Array<string>
  title: string
  description: string
  price: string
  id: string
}

export function Coffee({
  id,
  image,
  types,
  title,
  description,
  price,
}: CoffeeProps) {
  const { setQuantity, setData } = useContext(CoffeeContext)
  const [quantity, setQuantityItems] = useState(1)

  function minusQuantity() {
    setQuantityItems((value) => {
      if (value === 1) return value
      return value - 1
    })
  }

  function sumQuantity() {
    setQuantityItems((value) => {
      if (value === 10) return value
      return value + 1
    })
  }

  interface setDataProps {
    id: string
    quantity: number
    title: string
    price: string
    image: string
  }

  function _setData(data: setDataProps) {
    let setDiffecenceCoffee = true
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:items-quantity-1.0.0',
    )
    let jsonParsed

    if (storedStateAsJSON) {
      jsonParsed = JSON.parse(storedStateAsJSON)
    }

    let newItems = []

    if (jsonParsed) {
      for (let i = 0; i < jsonParsed.length; i++) {
        const element = jsonParsed[i]
        if (element.id === data.id) {
          setDiffecenceCoffee = false
          jsonParsed[i].quantity = jsonParsed[i].quantity + data.quantity
        }
      }
      if (setDiffecenceCoffee) newItems = [...jsonParsed, data]
      else newItems = [...jsonParsed]
    } else {
      newItems = [data]
    }

    const stateJSON = JSON.stringify(newItems)
    localStorage.setItem('@coffee-delivery:items-quantity-1.0.0', stateJSON)
    let _quantity = 0
    for (const item of newItems) {
      _quantity = _quantity + item.quantity
    }

    setQuantity(_quantity)
    setData(newItems)
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
          <IconDiv
            onClick={() => _setData({ id, quantity, image, price, title })}
          >
            <ShoppingCart size={22} weight="fill" color={'#F3F2F2'} />
          </IconDiv>
        </Actions>
      </Buy>
    </Content>
  )
}
