import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;
  margin-bottom: 2.5rem;

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin: -1.25rem auto;
  }
`

export const Title = styled.div`
  color: ${(props) => props.theme['gray-800']};
  text-align: center;

  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`

export const Description = styled.div`
  color: ${(props) => props.theme['gray-600']};
  text-align: center;

  font-family: 'Roboto';
  font-size: 0.875rem;
  line-height: 130%;
  padding: 0.5rem 1.25rem 1.5rem;
`

export const Price = styled.div`
  color: ${(props) => props.theme['gray-700']};

  font-family: 'Roboto';
  font-size: 0.875rem;
  line-height: 130%;

  span {
    color: ${(props) => props.theme['gray-700']};

    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
    margin-left: 0.25rem;
  }
`
export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  align-items: center;
`

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const Counter = styled.div`
  border-radius: 6px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['gray-400']};
  padding: 0.5rem;
  gap: 0.5rem;
`

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  width: 2.375rem;
  background: ${(props) => props.theme['purple-300']};
  padding: 0.5rem;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
`
