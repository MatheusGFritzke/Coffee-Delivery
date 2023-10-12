import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  MainOrder,
  Content,
  SelectedCoffee,
  CompleteOrder,
  Address,
  Payment,
  Title,
  SelectedCoffeeDiv,
  IconText,
  GridTwo,
  GridTree,
  ContentButtons,
  Separator,
  ConfirmOrderMain,
  Values,
  TotalItems,
  Freight,
  Total,
  ConfirmOrderButton,
} from './styles'
import BasicTextFields from '../../components/TextField'
import ButtonPaymentForm from '../../components/ButtonPaymentForm'
import { CoffeeSelectedItem } from '../../components/CoffeeSelectedItem'
import { useContext, useEffect, useState } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export function Order() {
  const navigate = useNavigate()
  const {
    data,
    paymentForm,
    address,
    setAddress,
    setData,
    setQuantity,
    sumTotalValue,
    setPaymentForm,
  } = useContext(CoffeeContext)

  const [totalValue, setTotalValue] = useState('')

  useEffect(() => {
    if (!data) {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:items-quantity-1.0.0',
      )
      if (storedStateAsJSON) {
        setData(JSON.parse(storedStateAsJSON))
      }
    }
    if (data && parseFloat(sumTotalValue(data))) {
      const total = (
        Number(sumTotalValue(data).replace(',', '.')) + 3.5
      ).toFixed(2)
      setTotalValue(String(total).replace('.', ','))
    }
  }, [data, setData, setQuantity, sumTotalValue])

  function onChange(label: keyof typeof Address, event: string) {
    const _address = { ...address }
    _address[label] = event
    setAddress(_address)
    localStorage.setItem(
      '@coffee-delivery:address-1.0.0',
      JSON.stringify(_address),
    )
  }

  function _setPaymentForm(label: string) {
    setPaymentForm(label)
    localStorage.setItem('@coffee-delivery:payment-form-1.0.0', label)
  }

  function confirmOrder() {
    const coffess = localStorage.getItem(
      '@coffee-delivery:items-quantity-1.0.0',
    )
    const address = localStorage.getItem('@coffee-delivery:address-1.0.0')

    if (!coffess || !address || !validateAddress(JSON.parse(address))) {
      const options = {
        autoClose: 6000,
        type: toast.TYPE.ERROR,
        hideProgressBar: true,
        position: toast.POSITION.BOTTOM_CENTER,
      }
      return toast('Favor preencher o endereço por completo.', options)
    }
    localStorage.clear()
    setQuantity(0)
    setData(undefined)
    return navigate('/order/confirmed')
  }

  interface AddressProps {
    CEP: string
    Rua: string
    Numero: string
    Bairro: string
    Cidade: string
    UF: string
  }

  function validateAddress({
    CEP,
    Rua,
    Numero,
    Bairro,
    Cidade,
    UF,
  }: AddressProps) {
    if (CEP && Rua && Numero && Bairro && Cidade && UF) {
      return true
    } else return false
  }

  return (
    <MainOrder>
      <Content>
        <CompleteOrder>
          <Title>Complete seu pedido</Title>
          <Address>
            <IconText>
              <MapPinLine size={22} color="#C47F17" />
              <span>Endereço de Entrega</span>
            </IconText>
            <p>Informe o endereço onde deseja receber seu pedido</p>
            <BasicTextFields
              label="CEP"
              required
              onChange={(event) => onChange('CEP', event.target.value)}
            />
            <BasicTextFields
              label="Rua"
              required
              fullWidth
              onChange={(event) => onChange('Rua', event.target.value)}
            />
            <GridTwo>
              <BasicTextFields
                label="Numero"
                type="number"
                required
                onChange={(event) => onChange('Numero', event.target.value)}
              />
              <BasicTextFields
                label="Complemento"
                fullWidth
                onChange={(event) =>
                  onChange('Complemento', event.target.value)
                }
              />
            </GridTwo>
            <GridTree>
              <BasicTextFields
                label="Bairro"
                required
                onChange={(event) => onChange('Bairro', event.target.value)}
              />
              <BasicTextFields
                label="Cidade"
                fullWidth
                required
                onChange={(event) => onChange('Cidade', event.target.value)}
              />
              <BasicTextFields
                inputProps={{ maxLength: 2 }}
                label="UF"
                fullWidth
                required
                onChange={(event) => onChange('UF', event.target.value)}
              />
            </GridTree>
          </Address>
          <Payment>
            <IconText>
              <CurrencyDollar size={22} color="#8047F8" />
              <span>Pagamento</span>
            </IconText>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
            <ContentButtons>
              <ButtonPaymentForm
                selected={paymentForm === 'CARTÃO DE CRÉDITO'}
                label="CARTÃO DE CRÉDITO"
                icon={<CreditCard size={16} color="#8047F8" />}
                onClick={() => _setPaymentForm('CARTÃO DE CRÉDITO')}
              />
              <ButtonPaymentForm
                selected={paymentForm === 'CARTÃO DE DÉBITO'}
                label="CARTÃO DE DÉBITO"
                icon={<Bank size={16} color="#8047F8" />}
                onClick={() => _setPaymentForm('CARTÃO DE DÉBITO')}
              />
              <ButtonPaymentForm
                selected={paymentForm === 'DINHEIRO'}
                label="DINHEIRO"
                icon={<Money size={16} color="#8047F8" />}
                onClick={() => _setPaymentForm('DINHEIRO')}
              />
            </ContentButtons>
          </Payment>
        </CompleteOrder>
        <SelectedCoffeeDiv>
          <Title>Cafes selecionados</Title>
          <SelectedCoffee>
            {data &&
              data.map((coffee) => (
                <>
                  <CoffeeSelectedItem key={coffee.id} coffee={coffee} />
                  <Separator />
                </>
              ))}
            <ConfirmOrderMain>
              <Values>
                <TotalItems>
                  <div>Total de itens</div>
                  <div>R$ {sumTotalValue(data) || '0,00'}</div>
                </TotalItems>
                <Freight>
                  <div>Entrega</div>
                  <div>{data && totalValue ? 'R$ 3,50' : 'R$ 0,00'}</div>
                </Freight>
                <Total>
                  <div>Total</div>
                  <div>R$ {(data && totalValue) || '0,00'}</div>
                </Total>
              </Values>
              <ConfirmOrderButton
                disabled={!data}
                onClick={() => confirmOrder()}
              >
                confirmar pedido
              </ConfirmOrderButton>
            </ConfirmOrderMain>
          </SelectedCoffee>
        </SelectedCoffeeDiv>
      </Content>
    </MainOrder>
  )
}
