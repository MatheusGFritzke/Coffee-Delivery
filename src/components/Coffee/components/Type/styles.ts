import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  gap: 0.25rem;
  margin: 2rem auto 1rem auto;
`
export const Tag = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['yellow-100']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  color: ${(props) => props.theme['yellow-300']};
  font-family: 'Roboto';
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`
