import { CssTextField, Content } from './styles'

interface TextFieldProps {
  label: string
  fullWidth?: boolean
  required?: boolean
  width?: string
}

export default function BasicTextFields({
  label,
  fullWidth,
  required,
  width,
}: TextFieldProps) {
  return (
    <Content>
      <CssTextField
        label={label}
        id="custom-css-outlined-input"
        size="small"
        required={required}
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
