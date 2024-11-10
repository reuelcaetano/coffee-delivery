import { HeaderContainer } from "./styles";
import logo from "../../assets/logo.svg"
import { MapPin, ShoppingCartSimple } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt=""></img>
      <div>
        <span><MapPin size={22} /> Porto Alegre, RS</span>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCartSimple size={22} />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}