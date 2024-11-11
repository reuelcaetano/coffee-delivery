import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { Currency, QuantityInput } from "../../../Home/components/Product/styles"
import { ItemActions, ItemContainer, RemoveButton } from "./styles"

interface ItemProps {
  title: string
  thumb: string
}

export function Item({ title, thumb }: ItemProps) {
  return (
    <ItemContainer>
      <div>
        <img src={thumb} alt="" />
        <ItemActions>
          <h3>{title}</h3>
          <div>
            <QuantityInput>
              <button>
                <Minus />
              </button>
              <span>1</span>
              <button>
                <Plus />
              </button>
            </QuantityInput>
            <RemoveButton>
              <Trash size={16} />
              <span>REMOVER</span>
            </RemoveButton>
          </div>
        </ItemActions>
      </div>
      <strong>
        <Currency>9,90</Currency>
      </strong>
    </ItemContainer>
  )
}