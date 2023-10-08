import styledComponent from 'styled-components'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const MainConfirmedOrder = styledComponent.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`
export const Content = styledComponent.div`
  display: flex;
  gap: 2rem;
`

export const ImageContent = styledComponent.div`
display: flex;
align-items: end;
padding-top: 6.38rem;
`

export const ConfirmedOrder = styledComponent.div`
  display: flex;
  flex-direction: column;
`
export const Title = styledComponent.div`
  color: ${(props) => props.theme['yellow-300']};

  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  line-height: 130%;
  margin-bottom: 0.25rem;
`
export const Text = styledComponent.p`
  color: ${(props) => props.theme['gray-800']};

  font-family: 'Roboto';
  font-size: 1.25rem;
  line-height: 130%;
  margin-bottom: 2.5rem;
`
export const InfoContent = styledComponent.div`
  display: flex;
  width: 32.875rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 6px 36px;
  border: 1px solid ${(props) => props.theme['yellow-300']};
`

interface CircleIconProps {
  backgroundColor: string
}

export const CircleIcon = styled(Box)(
  ({ backgroundColor }: CircleIconProps) => ({
    display: 'flex',
    padding: '0.5rem',
    borderRadius: '1000px',
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    height: '2rem',
    width: '2rem',
  }),
)

export const ItemContent = styledComponent.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme['gray-700']};

  font-family: Roboto;
  font-size: 1rem;
  line-height: 130%;

  p {
    max-width: 19.375rem;
  }

  span {
    color: ${(props) => props.theme['gray-700']};
    font-size: 1rem;
    font-weight: 700;
    line-height: 130%;
  }
`
