import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { Currency, QuantityInput } from "../../../Home/components/Product/styles"
import { ItemActions, ItemContainer, RemoveButton } from "./styles"
import { flavors } from "../../../Home/components/Product"
import { useContext, useState } from "react"
import { CartContext } from "../../../../contexts/cartContext"

interface ItemProps {
  id: number
  title: string
  thumb: string
  price: number
}

export function Item({ id, title, thumb, price }: ItemProps) {
  const { removeItem } = useContext(CartContext)
  const [ quantity, setQuantity ] = useState(1)

  function handlePlus() {
    setQuantity((state) => state + 1)
  }
  
  function handleMinus() {
    if (quantity > 1) {
      setQuantity((state) => state -1 )
    }
  }
  return (
    <ItemContainer>
      <div>
        <img src={flavors[thumb]} alt="" />
        <ItemActions>
          <h3>{title}</h3>
          <div>
            <QuantityInput>
              <button onClick={() => handleMinus()}>
                <Minus />
              </button>
              <span>{quantity}</span>
              <button onClick={() => handlePlus()}>
                <Plus />
              </button>
            </QuantityInput>
            <RemoveButton onClick={() => removeItem(id)}>
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveButton>
          </div>
        </ItemActions>
      </div>
      <strong>
        <Currency>{(price * quantity).toFixed(2).replace('.',',')}</Currency>
      </strong>
    </ItemContainer>
  )
}