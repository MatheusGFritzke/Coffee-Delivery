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

export function OrderConfirmed() {
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos
                - Porto Alegre, RS
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
                Pagamento na entrega <br /> <span>Cartão de Crédito</span>
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
