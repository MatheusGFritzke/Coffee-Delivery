import { Type } from './components/Type'
import { Content } from './styles'

export interface TypesProps {
  map(
    arg0: (type: string) => import('react/jsx-runtime').JSX.Element,
  ): import('react').ReactNode
  type: string
}

interface CoffeeProps {
  image: string
  types: TypesProps[]
  title: string
  description: string
  price: string
}

export function Coffee({
  image,
  types,
  title,
  description,
  price,
}: CoffeeProps) {
  return (
    <Content>
      <img src={image} alt="" />
      <Type types={types} />
    </Content>
  )
}
