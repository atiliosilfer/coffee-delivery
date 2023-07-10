import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

import {
  CardContainer,
  PaymentOption,
  PaymentOptionContainer,
  CardTitle,
  FormGrid,
  FormGridItem,
} from './styles'

export function FormCheckout() {
  return (
    <div>
      <h2>Complete seu pedido</h2>
      <CardContainer>
        <CardTitle colorIcon="yellow-dark">
          <MapPinLine size={22} />
          <div>
            <h3>Endereço de Entrega</h3>
            <h4>Informe o endereço onde deseja receber seu pedido</h4>
          </div>
        </CardTitle>

        <FormGrid>
          <FormGridItem startColumn={1} columnSize={4}>
            <input type="text" placeholder="CEP" />
          </FormGridItem>
          <FormGridItem startColumn={1} columnSize={12}>
            <input type="text" placeholder="Rua" />
          </FormGridItem>
          <FormGridItem startColumn={1} columnSize={4}>
            <input type="number" placeholder="Número" />
          </FormGridItem>
          <FormGridItem startColumn={5} columnSize={8}>
            <input type="text" placeholder="Complemento" />
          </FormGridItem>
          <FormGridItem startColumn={1} columnSize={4}>
            <input type="text" placeholder="Bairro" />
          </FormGridItem>
          <FormGridItem startColumn={5} columnSize={6}>
            <input type="text" placeholder="Cidade" />
          </FormGridItem>
          <FormGridItem startColumn={11} columnSize={2}>
            <input type="text" placeholder="UF" />
          </FormGridItem>
        </FormGrid>
      </CardContainer>

      <CardContainer>
        <CardTitle colorIcon="purple">
          <CurrencyDollar size={22} />
          <div>
            <h3>Pagamento</h3>
            <h4>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </h4>
          </div>
        </CardTitle>

        <PaymentOptionContainer>
          <PaymentOption>
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </PaymentOption>
          <PaymentOption selected={true}>
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </PaymentOption>
          <PaymentOption>
            <Money size={16} />
            DINHEIRO
          </PaymentOption>
        </PaymentOptionContainer>
      </CardContainer>
    </div>
  )
}
