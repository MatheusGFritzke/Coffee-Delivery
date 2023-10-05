import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh);
  margin: auto;

  background: ${(props) => props.theme['gray-100']};
  /* border-radius: 8px; */

  display: flex;
  flex-direction: column;
`
