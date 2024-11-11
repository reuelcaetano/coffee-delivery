import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
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
        </NavLink>
      </div>
    </HeaderContainer>
  )
}