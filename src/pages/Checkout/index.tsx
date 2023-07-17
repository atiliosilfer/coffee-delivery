import { BillContainer, CardContainer, GridContainer } from './styles'
import { FormDelivery } from './components/FormDelivery'
import { CartItem } from './components/CartItem'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

const deliveryFormValidationSchema = zod.object({
  cep: zod.string().min(9, 'Informe o CEP.').max(9, 'Informe um CEP valido.'),
  street: zod.string().min(1, 'Informe a rua.'),
  adressNumber: zod.string().min(0, 'Informe o número.'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(0, 'Informe o Bairro.'),
  city: zod.string().min(0, 'Informe a cidade.'),
  uf: zod.string().min(2, 'Informe a UF.').max(2, 'Informe uma UF valida.'),
  paymentMethod: zod.string().min(1, 'Informe o método de pagamento.'),
})

type DeliveryFormData = zod.infer<typeof deliveryFormValidationSchema>

export function Checkout() {
  const { cartItens } = useContext(CartContext)
  const deliveryForm = useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryFormValidationSchema),
  })

  const { handleSubmit } = deliveryForm

  function handleConfirmOrder(data: DeliveryFormData) {
    console.log(data)
  }

  return (
    <GridContainer onSubmit={handleSubmit(handleConfirmOrder)}>
      <FormProvider {...deliveryForm}>
        <FormDelivery />
      </FormProvider>

      <div>
        <h2>Cafés selecionados</h2>

        <CardContainer>
          {cartItens.map((item) => (
            <CartItem key={item.id} order={item} />
          ))}

          <BillContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>

            <div>
              <span>Entrega </span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total </span>
              <span>R$ 33,20</span>
            </div>

            <button type="submit">CONFIRMAR PEDIDO</button>
          </BillContainer>
        </CardContainer>
      </div>
    </GridContainer>
  )
}
