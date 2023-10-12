import {
  HeaderContainer,
  Logo,
  ContentHeader,
  Location,
  Content,
} from './styles'
import { MapPin } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import { ShopItems } from '../ShopItems'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

export function Header() {
  const { quantity } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <ContentHeader>
        <NavLink to="/">
          <Logo src={logo} alt="" />
        </NavLink>
        <Content>
          <Location>
            <MapPin size={22} weight="fill" color={'#8047F8'} />
            <p>Porto Alegre, RS</p>
          </Location>
          <NavLink to="/order">
            <ShopItems items={quantity} />
          </NavLink>
        </Content>
      </ContentHeader>
    </HeaderContainer>
  )
}
