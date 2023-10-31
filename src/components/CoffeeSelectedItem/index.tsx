import {
  MainCoffeeSelected,
  Title,
  Content,
  DivStyled,
  Price,
  MainContent,
} from './styles'
import { Counter } from '../Coffee/styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { Button } from '../ButtonPaymentForm/styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'

interface Coffee {
  quantity: number
  id: string
  title: string
  price: string
  image: string
}
interface Data {
  coffee: Coffee
}

export function CoffeeSelectedItem({ coffee }: Data) {
  const { setQuantity, data, setData } = useContext(CoffeeContext)
  const [_quantity, _setQuantity] = useState(coffee.quantity)

  function getInitialData() {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:items-quantity-1.0.0',
    )
    let jsonParsed

    if (storedStateAsJSON) {
      jsonParsed = JSON.parse(storedStateAsJSON)
    }
    if (jsonParsed) {
      let _quantity = 0
      for (const item of jsonParsed) {
        _quantity = _quantity + item.quantity
      }
      setQuantity(_quantity)
      setData(jsonParsed)
    }
  }

  useEffect(() => {
    getInitialData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function atualizeLocalStorage(quantity: number) {
    if (Array.isArray(data)) {
      for (const item of data) {
        if (item.id === coffee.id) item.quantity = quantity
      }
      localStorage.setItem(
        '@coffee-delivery:items-quantity-1.0.0',
        JSON.stringify(data),
      )
    }
  }

  function atualizeQuantity(_data: Coffee[] | undefined) {
    if (Array.isArray(_data)) {
      let _quantity = 0
      for (const item of _data) {
        _quantity = _quantity + item.quantity
      }
      setQuantity(_quantity)
    } else {
      setQuantity(0)
    }
  }

  function minusQuantity() {
    _setQuantity((value) => {
      if (value === 1) return value
      return value - 1
    })
    if (_quantity !== 1) atualizeLocalStorage(_quantity - 1)
    atualizeQuantity(data)
  }

  function sumQuantity() {
    _setQuantity((value) => {
      return value + 1
    })
    atualizeLocalStorage(_quantity + 1)
    atualizeQuantity(data)
  }

  function deleteItem(id: string) {
    const listOfActiveItems = data?.filter((coffee) => coffee.id !== id)

    localStorage.setItem(
      '@coffee-delivery:items-quantity-1.0.0',
      JSON.stringify(
        listOfActiveItems && listOfActiveItems?.length > 0
          ? listOfActiveItems
          : '',
      ),
    )
    setData(
      listOfActiveItems && listOfActiveItems?.length > 0
        ? listOfActiveItems
        : undefined,
    )
    atualizeQuantity(listOfActiveItems)
  }

  return (
    <MainCoffeeSelected>
      <MainContent>
        <img src={coffee.image} alt="" />
        <Content>
          <Title>{coffee.title}</Title>
          <DivStyled>
            <Counter>
              <Minus
                size={14}
                color={'#8047F8'}
                style={{ cursor: 'pointer' }}
                onClick={minusQuantity}
              />
              {_quantity}
              <Plus
                size={14}
                color={'#8047F8'}
                style={{ cursor: 'pointer' }}
                onClick={sumQuantity}
              />
            </Counter>
            <Button
              onClick={() => deleteItem(coffee.id)}
              startIcon={<Trash size={16} color={'#8047F8'} />}
            >
              remover
            </Button>
          </DivStyled>
        </Content>
      </MainContent>
      <Price>R$ {String(coffee.price).replace('.', ',')}</Price>
    </MainCoffeeSelected>
  )
}
