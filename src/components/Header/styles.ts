import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0 10rem 0 10rem;
`

export const Content = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const Logo = styled.img`
  height: 2.5rem;
  width: 5.3125rem;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['purple-100']};
  p {
    color: ${(props) => props.theme['purple-300']};
    font-size: 0.875rem;
    font-family: Roboto;
  }
`

export const Shop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-100']};
  padding: 0.5rem;
  cursor: pointer;
`
export const ContentHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;
`
