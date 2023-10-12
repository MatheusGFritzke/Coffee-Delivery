import { ChangeEvent } from 'react'
import { CssTextField, Content } from './styles'

interface TextFieldProps {
  label: string
  fullWidth?: boolean
  required?: boolean
  width?: string
  type?: string
  inputProps?: object
  style?: object
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export default function BasicTextFields({
  label,
  fullWidth,
  required,
  width,
  type,
  inputProps,
  onChange,
}: TextFieldProps) {
  return (
    <Content>
      <CssTextField
        type={type}
        onChange={(e) => onChange(e)}
        label={label}
        id="custom-css-outlined-input"
        size="small"
        required={required}
        inputProps={inputProps}
        sx={{
          width: !fullWidth ? width || '12.5rem' : undefined,
          flexGrow: fullWidth ? 1 : undefined,
          marginBottom: '1.325rem',
        }}
        fullWidth={fullWidth}
      />
    </Content>
  )
}
