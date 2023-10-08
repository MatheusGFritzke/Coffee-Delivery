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

export function Order() {
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
            <BasicTextFields label="CEP" required />
            <BasicTextFields label="Rua" required fullWidth />
            <GridTwo>
              <BasicTextFields label="Numero" required />
              <BasicTextFields label="Complemento" fullWidth />
            </GridTwo>
            <GridTree>
              <BasicTextFields label="Bairro" required />
              <BasicTextFields label="Cidade" fullWidth />
              <BasicTextFields label="UF" fullWidth />
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
                selected
                label="CARTAO DE CREDITO"
                icon={<CreditCard size={16} color="#8047F8" />}
              />
              <ButtonPaymentForm
                label="CARTAO DE DEBITO"
                icon={<Bank size={16} color="#8047F8" />}
              />
              <ButtonPaymentForm
                label="DINHEIRO"
                icon={<Money size={16} color="#8047F8" />}
              />
            </ContentButtons>
          </Payment>
        </CompleteOrder>
        <SelectedCoffeeDiv>
          <Title>Cafes selecionados</Title>
          <SelectedCoffee>
            <CoffeeSelectedItem />
            <Separator />
            <CoffeeSelectedItem />
            <Separator />
            <CoffeeSelectedItem />
            <Separator />
            <ConfirmOrderMain>
              <Values>
                <TotalItems>
                  <div>Total de itens</div>
                  <div>R$ 29,70</div>
                </TotalItems>
                <Freight>
                  <div>Entrega</div>
                  <div>R$ 3,50</div>
                </Freight>
                <Total>
                  <div>Total</div>
                  <div>R$ 33,20</div>
                </Total>
              </Values>
              <ConfirmOrderButton>confirmar pedido</ConfirmOrderButton>
            </ConfirmOrderMain>
          </SelectedCoffee>
        </SelectedCoffeeDiv>
      </Content>
    </MainOrder>
  )
}
