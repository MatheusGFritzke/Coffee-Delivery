import Stack from '@mui/material/Stack'
import { ReactNode } from 'react'
import { Button } from './styles'

interface ButtonPaymentFormProps {
  label: string
  icon: ReactNode
}

export default function ButtonPaymentForm({
  icon,
  label,
}: ButtonPaymentFormProps) {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        startIcon={icon}
        sx={{
          width: '11.25rem',
          fontSize: '0.75rem',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        {label}
      </Button>
    </Stack>
  )
}
