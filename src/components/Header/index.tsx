import {
  HeaderContainer,
  Logo,
  ContentHeader,
  Location,
  Shop,
  Content,
} from './styles'
import { MapPin, ShoppingCart } from 'phosphor-react'

import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <ContentHeader>
        <Logo src={logo} alt="" />
        <Content>
          <Location>
            <MapPin size={22} weight="fill" color={'#8047F8'} />
            <p>Porto Alegre, RS</p>
          </Location>
          <Shop>
            <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
          </Shop>
        </Content>
      </ContentHeader>
    </HeaderContainer>
  )
}
