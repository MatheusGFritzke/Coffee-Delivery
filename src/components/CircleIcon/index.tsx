import { ReactNode } from 'react'
import { Content } from './styles'

interface CircleIconProps {
  children: ReactNode
  color: string
}

export function CircleIcon({ children, color }: CircleIconProps) {
  return <Content color={color}>{children}</Content>
}
