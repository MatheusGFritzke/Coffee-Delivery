import {
  MainContent,
  Background,
  Separator,
  Content,
  BackgroundImage,
  Title,
  SubTitle,
  Text,
  IconSeparator,
} from './styles'
import backgroundImage from '../../assets/background.svg'
import backgroundCoffee from '../../assets/background-coffee.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IconText } from '../../components/IconText'
import { Cafes } from '../../components/Cafes'

export function Home() {
  return (
    <MainContent>
      <Background>
        <BackgroundImage src={backgroundImage} alt="" />
        <Content>
          <Separator>
            <Text>
              <Title>Econtre o café perfeito para qualquer hora do dia</Title>
              <SubTitle>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </SubTitle>
              <IconSeparator>
                <IconText color="#C47F17" text="Compra simples e segura">
                  <ShoppingCart size={22} weight="fill" color={'#FAFAFA'} />
                </IconText>
                <IconText
                  color="#574F4D"
                  text="Embalagem mantém o café intacto"
                >
                  <Package size={22} weight="fill" color={'#FAFAFA'} />
                </IconText>
              </IconSeparator>
              <IconSeparator>
                <IconText color="#DBAC2C" text="Entrega rápida e rastreada">
                  <Timer size={22} weight="fill" color={'#FAFAFA'} />
                </IconText>
                <IconText
                  color="#8047F8"
                  text="O café chega fresquinho até você"
                >
                  <Coffee size={22} weight="fill" color={'#FAFAFA'} />
                </IconText>
              </IconSeparator>
            </Text>
            <img src={backgroundCoffee} alt="" />
          </Separator>
        </Content>
      </Background>
      <Cafes />
    </MainContent>
  )
}
