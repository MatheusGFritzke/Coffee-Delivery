import { TypesProps } from '../..'
import { Content, Tag } from './styles'

interface TypeProps {
  types: TypesProps
}

export function Type({ types }: TypeProps) {
  return (
    <Content>
      {types.map((type) => (
        <Tag key={type}>{type}</Tag>
      ))}
    </Content>
  )
}
