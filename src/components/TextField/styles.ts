import { TextField } from '@mui/material'
import styled from 'styled-components'

export const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#C47F17',
  },
  '& label': {
    color: '#8D8686',
    fontFamily: 'Roboto',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#8D8686',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#E6E5E5',
    },
    '&:hover fieldset': {
      borderColor: '#C47F17',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#C47F17',
    },
  },
  '& .MuiInputBase-input': {
    backgroundColor: '#EDEDED',
    borderRadius: '4px',
    fontFamily: 'Roboto',
    color: '#574F4D',
  },
})

export const Content = styled.div`
  display: flex;
`
