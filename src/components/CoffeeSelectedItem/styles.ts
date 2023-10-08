import styled from 'styled-components'

export const MainCoffeeSelected = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const Title = styled.div`
  color: ${(props) => props.theme['gray-800']};

  font-family: 'Roboto';
  font-size: 1rem;
  line-height: 130%;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const DivStyled = styled.div`
  display: flex;
  height: 2.2rem;
  gap: 0.5rem;
`

export const Price = styled.div`
  color: ${(props) => props.theme['gray-700']};
  text-align: right;
  font-family: 'Roboto';
  font-weight: 700;
  line-height: 130%;
`

export const MainContent = styled.div`
  display: flex;
  gap: 1.25rem;
`
