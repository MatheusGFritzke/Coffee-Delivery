import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  background-color: ${(props) => props.color};
  max-width: 2.3rem;
  max-height: 2.3rem;
  padding: 8px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 1000px;
`
