import { Minus, Plus } from 'phosphor-react'
import { FormContainer } from './styles'

interface OrderCounterFormProps {
  amount: number
  onClick: (newAmount: number) => void
}

export function OrderCounterForm({ amount, onClick }: OrderCounterFormProps) {
  function handleOnClickPlusButton() {
    const newAmount = amount + 1

    onClick(newAmount)
  }

  function handleOnClickMinusButton() {
    const newAmount = amount === 1 ? 1 : amount - 1

    onClick(newAmount)
  }

  return (
    <FormContainer>
      <button type="button" onClick={handleOnClickMinusButton}>
        <Minus size={14} weight="bold" />
      </button>

      <input type="number" value={amount} disabled />

      <button type="button" onClick={handleOnClickPlusButton}>
        <Plus size={14} weight="bold" />
      </button>
    </FormContainer>
  )
}
