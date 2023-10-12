import { ReactNode, createContext, useEffect, useState } from 'react'

interface Coffee {
  price: string
  title: string
  image: string
  id: string
  quantity: number
}

interface Address {
  Rua: string
  Bairro: string
  CEP: string
  Cidade: string
  Complemento: string
  UF: string
  Numero: number
}

interface CoffeeContextType {
  data: Coffee[] | undefined
  quantity: number
  totalValue: number
  paymentForm: string
  address: Address | undefined
  setAddress: (address: Address | undefined) => void
  setQuantity: (value: number) => void
  setTotalValue: (value: number) => void
  setData: (value: Coffee[] | undefined) => void
  sumTotalValue: (data: Coffee[] | undefined) => string
  setPaymentForm: (value: string) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface HeaderShopContextProps {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: HeaderShopContextProps) {
  const [quantity, setQuantity] = useState(0)
  const [data, setData] = useState<Coffee[] | undefined>(undefined)
  const [totalValue, setTotalValue] = useState(0)
  const [paymentForm, setPaymentForm] = useState('CARTÃO DE CRÉDITO')
  const [address, setAddress] = useState<Address | undefined>(undefined)

  function getInitialData() {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:items-quantity-1.0.0',
    )
    let jsonParsed

    if (storedStateAsJSON) {
      jsonParsed = JSON.parse(storedStateAsJSON)
    }
    if (jsonParsed) {
      let _quantity = 0
      for (const item of jsonParsed) {
        _quantity = _quantity + item.quantity
      }
      setQuantity(_quantity)
      setData(jsonParsed)
    }
  }

  function sumTotalValue(data: Coffee[] | undefined) {
    if (data && Array.isArray(data)) {
      let totalValue = 0
      for (const item of data) {
        totalValue = totalValue + parseFloat(item.price) * item.quantity
      }
      return String(totalValue.toFixed(2)).replace('.', ',')
    }
    return ''
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <CoffeeContext.Provider
      value={{
        data,
        quantity,
        totalValue,
        paymentForm,
        address,
        setAddress,
        setPaymentForm,
        setData,
        setQuantity,
        setTotalValue,
        sumTotalValue,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
