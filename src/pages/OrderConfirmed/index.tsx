import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Content,
  MainConfirmedOrder,
  ConfirmedOrder,
  Title,
  Text,
  InfoContent,
  CircleIcon,
  ItemContent,
  ImageContent,
} from './styles'
import ilustration from '../../assets/Illustration.svg'
import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { useNavigate } from 'react-router-dom'

export function OrderConfirmed() {
  const navigate = useNavigate()
  const { address, paymentForm } = useContext(CoffeeContext)

  useEffect(() => {
    if (!address) return navigate('/')
  }, [address, navigate])

  return (
    <MainConfirmedOrder>
      <Content>
        <ConfirmedOrder>
          <Title>Uhu! Pedido confirmado</Title>
          <Text>Agora é só aguardar que logo o café chegará até você</Text>
          <InfoContent>
            <ItemContent>
              <CircleIcon backgroundColor="#8047F8">
                <MapPin size={16} weight="fill" color="white" />
              </CircleIcon>
              <p>
                Entrega em{' '}
                <span>
                  {address?.Rua}, {address?.Numero}
                </span>{' '}
                {address?.Bairro} - {address?.Cidade}, {address?.UF}
              </p>
            </ItemContent>
            <ItemContent>
              <CircleIcon backgroundColor="#DBAC2C">
                <Timer size={16} weight="fill" color="white" />
              </CircleIcon>
              <p>
                Previsão de entrega <br /> <span>20 min - 30 min</span>
              </p>
            </ItemContent>
            <ItemContent>
              <CircleIcon backgroundColor="#C47F17">
                <CurrencyDollar size={16} weight="fill" color="white" />
              </CircleIcon>
              <p>
                Pagamento na entrega <br /> <span>{paymentForm}</span>
              </p>
            </ItemContent>
          </InfoContent>
        </ConfirmedOrder>
        <ImageContent>
          <img src={ilustration} alt="" />
        </ImageContent>
      </Content>
    </MainConfirmedOrder>
  )
}
