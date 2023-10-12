import styled from 'styled-components'

export const MainContent = styled.div`
  max-width: 90rem;
  padding: 0 10rem;
  margin: auto;
`
export const Title = styled.div`
  color: ${(props) => props.theme['gray-700']};
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;
`
export const CoffeeList = styled.div`
  margin-top: 3.375rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
`
