import { BillContainer, CardContainer, GridContainer } from './styles'
import { FormDelivery } from './components/FormDelivery'
import { CartItem } from './components/CartItem'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { toast } from 'react-toastify'
import { EmptyCart } from './components/EmptyCart'

const deliveryFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(9, 'Informe um CEP valido.')
    .max(9, 'Informe um CEP valido.'),
  street: zod.string().min(0, 'Informe a rua.'),
  adressNumber: zod.string().min(0, 'Informe o número.'),
  complement: zod.string().optional(),
  neighborhood: zod.string().min(0, 'Informe o Bairro.'),
  city: zod.string().min(0, 'Informe a cidade.'),
  uf: zod
    .string()
    .min(2, 'Informe uma UF valida.')
    .max(2, 'Informe uma UF valida.'),
  paymentMethod: zod
    .string({
      required_error: 'Informe o método de pagamento.',
      invalid_type_error: 'Informe o método de pagamento.',
    })
    .min(0, 'Informe o método de pagamento.'),
})

type DeliveryFormData = zod.infer<typeof deliveryFormValidationSchema>

export function Checkout() {
  const { cartItens, totalOrderValue } = useContext(OrderContext)
  const deliveryForm = useForm<DeliveryFormData>({
    resolver: zodResolver(deliveryFormValidationSchema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = deliveryForm

  function handleConfirmOrder(data: DeliveryFormData) {
    console.log(data)
  }

  function handleConfirmWithError() {
    Object.keys(errors).forEach((key: string) => {
      toast.error((errors as any)[key].message)
    })
  }

  return (
    <>
      {cartItens.length === 0 ? (
        <EmptyCart />
      ) : (
        <GridContainer
          onSubmit={handleSubmit(handleConfirmOrder, handleConfirmWithError)}
        >
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
                  <span>
                    R${' '}
                    {totalOrderValue.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <div>
                  <span>Entrega </span>
                  <span>R$ 3,50</span>
                </div>

                <div>
                  <span>Total </span>
                  <span>
                    R${' '}
                    {(totalOrderValue + 3.5).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>

                <button type="submit">CONFIRMAR PEDIDO</button>
              </BillContainer>
            </CardContainer>
          </div>
        </GridContainer>
      )}
    </>
  )
}
