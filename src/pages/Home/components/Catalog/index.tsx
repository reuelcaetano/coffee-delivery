import { useContext } from "react";
import { CatalogContainer } from "./styles";
import { Product } from "../Product";
import { CartContext } from "../../../../contexts/cartContext";

export function Catalog() {
  const { stock } = useContext(CartContext)

  return (
    <CatalogContainer>
      <h2>Nossos cafés</h2>
      <div>
        {stock.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              tags={product.tags}
              title={product.title}
              description={product.description}
              price={product.price}
              thumb={product.thumb}
            />
          )
        })}
      </div>
    </CatalogContainer>
  )
}