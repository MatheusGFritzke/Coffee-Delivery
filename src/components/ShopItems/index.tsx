import { ShoppingCart } from 'phosphor-react'
import { Shop, Items } from './styles'

interface ShopItemsProps {
  items?: number
}

export function ShopItems({ items }: ShopItemsProps) {
  const itemValue = items === 0 ? undefined : items
  return (
    <Shop>
      {itemValue && <Items>{itemValue < 99 ? itemValue : '99+'}</Items>}
      <ShoppingCart size={22} weight="fill" color={'#C47F17'} />
    </Shop>
  )
}
