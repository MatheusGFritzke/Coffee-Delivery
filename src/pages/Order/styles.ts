import styledComponents from 'styled-components'
import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material'

export const MainOrder = styledComponents.div`
  display: grid;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`
export const Content = styledComponents.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 0fr;
`
export const CompleteOrder = styledComponents.div``

export const SelectedCoffee = styledComponents.div`
  width: 28rem;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background-color: ${(props) => props.theme['gray-200']};
`
export const Address = styledComponents.div`
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
export const Payment = styledComponents.div`
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
export const Title = styledComponents.div`
  color: ${(props) => props.theme['gray-800']};

  font-family: 'Baloo 2';
  font-size: 1.1125rem;
  font-weight: 700;
  line-height: 130%;
  margin-bottom: 1rem;
`
export const SelectedCoffeeDiv = styledComponents.div`
  display: flex;
  flex-direction: column;
`

export const IconText = styledComponents.div`
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
export const GridTwo = styledComponents.div`
  display: grid;
  grid-template-columns: 12.5rem auto;
  gap: 0.875rem;
`

export const GridTree = styledComponents.div`
  display: grid;
  grid-template-columns: 12.5rem auto 3.75rem;
  gap: 0.875rem;
`

export const ContentButtons = styledComponents.div`
  display: flex;
  margin-top: 2rem;
  gap: 0.875rem;
  height: 3.125rem;
`

export const Separator = styledComponents.div`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme['gray-400']};
  margin: 1.5rem 0;
`

export const ConfirmOrderMain = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Values = styledComponents.div`
  display: flex;
  flex-direction: column;
`

export const TotalItems = styledComponents.div`
  color: ${(props) => props.theme['gray-700']};
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`

export const Freight = styledComponents.div`
  color: ${(props) => props.theme['gray-700']};
  display: flex;
  margin-bottom: 0.75rem;
  width: 100%;
  justify-content: space-between;

  text-align: right;

  font-family: 'Roboto';
  line-height: 130%;
`

export const Total = styledComponents.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: ${(props) => props.theme['gray-800']};

  text-align: right;

  font-family: 'Roboto';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
`

export const ConfirmOrderButton = styled(MuiButton)(() => ({
  borderRadius: '6px',
  backgroundColor: '#DBAC2C',
  display: 'flex',
  padding: '0.75rem 0.5rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.25rem',
  alignSelf: 'stretch',
  color: '#FFF',
  fontFamily: 'Roboto',
  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: '160%',
  textTransform: 'uppercase',

  ':hover': {
    backgroundColor: ' #C47F17',
  },
}))
