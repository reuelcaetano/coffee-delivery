import { ProductContainer } from "./styles";
import { ShoppingCart } from "@phosphor-icons/react";
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

const flavors = {
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
  tags: string[]
  title: string
  description: string
  price: string
  thumb: keyof typeof flavors
}

export function Product({ tags, title, description, price, thumb }: ProductProps) {
  return (
    <ProductContainer>
      <img src={flavors[thumb]} alt="" />
      <div>
        <div>
          {tags.map((tag) => { return <span>{tag}</span>})}
        </div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <footer>
        <span>{price}</span>
        <input type="number" />
        <button>
          <ShoppingCart size={22}/>
        </button>
      </footer>
    </ProductContainer>
  )
}