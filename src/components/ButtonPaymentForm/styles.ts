import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export const Button = styled(MuiButton)(() => ({
  display: 'flex',
  padding: '16px',
  alignItems: 'center',
  gap: '0.2rem',
  color: 'var(--base-text, #574F4D)',
  fontFamily: 'Roboto',
  fontSize: '12px',
  lineHeight: '160%',
  textTransform: 'uppercase',
  borderRadius: '6px',
  background: 'var(--base-button, #E6E5E5)',
  border: '1px solid transparent',

  ':hover': {
    border: '1px solid #8047F8',
    background: 'var(--brand - purple - light, #EBE5F9)',
  },
}))
