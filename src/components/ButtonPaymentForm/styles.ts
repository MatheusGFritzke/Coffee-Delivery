import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material/styles'

interface ButtomProps {
  selected?: boolean
}

export const Button = styled(MuiButton)(({ selected }: ButtomProps) => ({
  display: 'flex',
  padding: '1rem',
  alignItems: 'center',
  gap: '0.2rem',
  color: 'var(--base-text, #574F4D)',
  fontFamily: 'Roboto',
  fontSize: '0.75rem',
  lineHeight: '160%',
  textTransform: 'uppercase',
  borderRadius: '6px',
  backgroundColor: selected ? '#EBE5F9' : '#E6E5E5',
  border: selected ? '1px solid #8047F8' : '1px solid transparent',

  ':hover': {
    border: selected ? '1px solid #8047F8' : '1px solid #E6E5E5',
    backgroundColor: ' #D7D5D5',
  },
}))
