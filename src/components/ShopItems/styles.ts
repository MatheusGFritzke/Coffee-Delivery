import styled from 'styled-components'

export const Shop = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['yellow-100']};
  padding: 0.5rem;
  cursor: pointer;
  text-decoration: none;
`

export const Items = styled.div`
  width: 20px;
  display: flex;
  flex-shrink: 0;
  text-align: center;
  align-items: center;
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
  background: ${(props) => props.theme['yellow-300']};
  position: absolute;
  margin-left: 1.15rem;
  margin-top: -2.3rem;
  height: 20px;
  justify-content: center;
  z-index: 999;

  font-family: 'Roboto';
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.72px;
`
