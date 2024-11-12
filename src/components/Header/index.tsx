import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export function Header() {
  const { cart } = useContext(CartContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt=""></img>
      </NavLink>
      <div>
        <span>
          <MapPin size={22} weight="fill" />
          <p>
            Porto Alegre, RS
          </p>
        </span>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCartSimple size={22} weight="fill" />
          {cart.length > 0 && <span>{cart.length}</span>}
        </NavLink>
      </div>
    </HeaderContainer>
  )
}