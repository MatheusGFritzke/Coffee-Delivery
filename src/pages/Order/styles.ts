import styled from 'styled-components'

export const MainOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`
export const CompleteOrder = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
`
export const SelectedCoffee = styled.div`
  width: 28rem;
  height: 31.125rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['gray-200']};
`
export const Address = styled.div`
  width: 40rem;
  height: 23.25rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-200']};
  margin-bottom: 0.75rem;

  p {
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin-left: 1.875rem;
    margin-top: 2px;
    margin-bottom: 2rem;
  }
`
export const Payment = styled.div`
  width: 40rem;
  height: 13rem;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['gray-200']};

  p {
    color: ${(props) => props.theme['gray-700']};
    font-family: 'Roboto';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    margin: 0 1.875rem 2px;
  }
`
export const Title = styled.div`
  color: ${(props) => props.theme['gray-800']};

  font-family: 'Baloo 2';
  font-size: 1.1125rem;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 1rem;
`
export const SelectedCoffeeDiv = styled.div`
  display: flex;
  flex-direction: column;
`

export const IconText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${(props) => props.theme['gray-800']};
    font-family: 'Roboto';
    font-size: 1rem;
    line-height: 130%;
  }
`
export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 12.5rem auto;
  gap: 0.875rem;
`

export const GridTree = styled.div`
  display: grid;
  grid-template-columns: 12.5rem auto 3.75rem;
  gap: 0.875rem;
`

export const ContentButtons = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 0.875rem;
  height: 3.125rem;
`
