import { Items, TextIcon } from '../../pages/Home/styles'
import { CircleIcon } from '../CircleIcon'
import { ReactNode } from 'react'

interface IconTextProps {
  color: string
  text: string
  children: ReactNode
}

export function IconText({ color, children, text }: IconTextProps) {
  return (
    <Items>
      <CircleIcon color={color}>{children}</CircleIcon>
      <TextIcon>{text}</TextIcon>
    </Items>
  )
}
