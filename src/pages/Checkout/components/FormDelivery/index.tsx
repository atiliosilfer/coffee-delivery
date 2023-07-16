import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import InputMask from 'react-input-mask'

import {
  CardContainer,
  PaymentOptionContainer,
  CardTitle,
  FormGrid,
  FormGridItem,
  PaymentOptionItem,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function FormDelivery() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext()
  const paymentMethod = watch('paymentMethod')

  console.log(errors)

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
            <InputMask
              id="cep"
              mask="99999-999"
              type="text"
              placeholder="CEP"
              required
              {...register('cep')}
            />
          </FormGridItem>
          <FormGridItem startColumn={1} columnSize={12}>
            <input
              id="street"
              type="text"
              placeholder="Rua"
              required
              {...register('street')}
            />
          </FormGridItem>
          <FormGridItem startColumn={1} columnSize={4}>
            <input
              id="adressNumber"
              type="number"
              placeholder="Número"
              {...register('adressNumber')}
            />
          </FormGridItem>
          <FormGridItem startColumn={5} columnSize={8}>
            <input
              id="complement"
              type="text"
              placeholder="Complemento"
              {...register('complement')}
            />
          </FormGridItem>
          <FormGridItem startColumn={1} columnSize={4}>
            <input
              id="neighborhood"
              type="text"
              placeholder="Bairro"
              required
              {...register('neighborhood')}
            />
          </FormGridItem>
          <FormGridItem startColumn={5} columnSize={6}>
            <input
              id="city"
              type="text"
              placeholder="Cidade"
              required
              {...register('city')}
            />
          </FormGridItem>
          <FormGridItem startColumn={11} columnSize={2}>
            <input
              id="uf"
              type="text"
              placeholder="UF"
              required
              {...register('uf')}
            />
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
          <PaymentOptionItem checked={paymentMethod === 'credit-card'}>
            <input
              type="radio"
              value="credit-card"
              {...register('paymentMethod')}
            />
            <CreditCard size={16} />
            CARTÃO DE CRÉDITO
          </PaymentOptionItem>
          <PaymentOptionItem checked={paymentMethod === 'debit-card'}>
            <input
              type="radio"
              value="debit-card"
              {...register('paymentMethod')}
            />
            <Bank size={16} />
            CARTÃO DE DÉBITO
          </PaymentOptionItem>
          <PaymentOptionItem checked={paymentMethod === 'money'}>
            <input type="radio" value="money" {...register('paymentMethod')} />
            <Money size={16} />
            DINHEIRO
          </PaymentOptionItem>
        </PaymentOptionContainer>
      </CardContainer>
    </div>
  )
}
