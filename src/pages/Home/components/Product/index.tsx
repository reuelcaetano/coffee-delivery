import { ButtonAction, Currency, ProductContainer, QuantityInput } from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import expressoCoffee from "../../../../assets/coffees/Expresso.png"
import americanoCoffee from "../../../../assets/coffees/Americano.png"
import expressoCremosoCoffee from "../../../../assets/coffees/Expresso_Cremoso.png"
import expressoGeladoCoffee from "../../../../assets/coffees/Cafe_Gelado.png"
import cafeLeiteCoffee from "../../../../assets/coffees/Cafe_com_Leite.png"
import latteCoffee from "../../../../assets/coffees/Latte.png"
import capuccinoCoffee from "../../../../assets/coffees/Capuccino.png"
import macchiatoCoffee from "../../../../assets/coffees/Macchiato.png"
import mochaccinoCoffee from "../../../../assets/coffees/Mochaccino.png"
import chocolateQuenteCoffee from "../../../../assets/coffees/Chocolate_Quente.png"
import cubanoCoffee from "../../../../assets/coffees/Cubano.png"
import havaianoCoffee from "../../../../assets/coffees/Havaiano.png"
import arabeCoffee from "../../../../assets/coffees/Arabe.png"
import irlandesCoffee from "../../../../assets/coffees/Irlandes.png"
import { useContext, useState } from "react";
import { CartContext } from "../../../../contexts/cartContext";

export const flavors = {
  'expresso': expressoCoffee,
  'americano': americanoCoffee,
  'expresso_cremoso': expressoCremosoCoffee,
  'expresso_gelado': expressoGeladoCoffee,
  'cafe_leite': cafeLeiteCoffee,
  'latte': latteCoffee,
  'capuccino': capuccinoCoffee,
  'macchiato': macchiatoCoffee,
  'mochaccino': mochaccinoCoffee,
  'chocolate_quente': chocolateQuenteCoffee,
  'cubano': cubanoCoffee,
  'havaiano': havaianoCoffee,
  'arabe': arabeCoffee,
  'irlandes': irlandesCoffee,
}

interface ProductProps {
  id: number
  tags: string[]
  title: string
  description: string
  price: number
  thumb: keyof typeof flavors
}

export function Product({ id, tags, title, description, price, thumb }: ProductProps) {
  const { insertItem } = useContext(CartContext)
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
    <ProductContainer>
      <img src={flavors[thumb]} alt="" />
      <div>
        <div>
          {tags.map((tag) => {
            return <span key={tag}>{tag}</span>
          })}
        </div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <footer>
        <strong>
          <Currency>{price.toFixed(2).replace('.',',')}</Currency>
        </strong>
        <QuantityInput>
          <button onClick={() => handleMinus()}>
            <Minus />
          </button>
          <span>{quantity}</span>
          <button onClick={() => handlePlus()}>
            <Plus />
          </button>
        </QuantityInput>
        <ButtonAction onClick={() => insertItem(id, quantity)}>
          <ShoppingCartSimple size={22} weight="fill"/>
        </ButtonAction>
      </footer>
    </ProductContainer>
  )
}