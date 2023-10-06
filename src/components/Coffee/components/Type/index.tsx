import { Content, Tag } from './styles'

interface TypeProps {
  types: string[]
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
