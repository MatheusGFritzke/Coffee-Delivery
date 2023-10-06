import { useEffect, useState } from 'react'
import { MainContent, Title, CoffeeList } from './styles'
import { Coffee } from '../Coffee'
import { mountImagesProps } from '../../constants/coffeeList'

export function Cafes() {
  const [coffeeLogos, setCoffeeLogos] = useState<string[]>([])

  useEffect(() => {
    const importImages = async () => {
      const imageImports = await Promise.all(
        Array.from(
          { length: 14 },
          (_, i) => import(`../../assets/coffeeLogos/coffee${i + 1}.png`),
        ),
      )

      const list = []
      for (const item of imageImports) {
        list.push(item.default)
      }

      setCoffeeLogos(list)
    }

    importImages()
  }, [])

  const coffeeList = mountImagesProps(coffeeLogos)

  return (
    <MainContent>
      <Title>Nossos cafés</Title>
      <CoffeeList>
        {coffeeList.map(({ image, types, title, description, price }) => (
          <Coffee
            key={image}
            image={image}
            types={types}
            title={title}
            description={description}
            price={price}
          />
        ))}
      </CoffeeList>
    </MainContent>
  )
}
