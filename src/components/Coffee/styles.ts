import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  height: 19.375rem;
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px 36px;

  img {
    height: 7.5rem;
    width: 7.5rem;
    margin: -1.25rem auto;
  }
`
