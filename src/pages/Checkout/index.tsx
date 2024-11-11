import { CreditCard, CurrencyDollar, MapPin, Money } from "@phosphor-icons/react";
import { AddressContainer, AddressForm, ButtonCustom, CheckoutContainer, Description, PaymentContainer, PaymentType } from "./styles";
import { Item } from "./components/Item";
import expressoCoffee from "../../assets/coffees/Americano.png"
import latte from "../../assets/coffees/Latte.png"
import { NavLink } from "react-router-dom";

export function Checkout() {
  return (
    <CheckoutContainer>
      <main>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <header>
            <span>
              <MapPin size={22} />
            </span>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <AddressForm>
            <input type="text" placeholder="CEP" style={{ gridArea: 'cep' }}></input>
            <input type="text" placeholder="Rua" style={{ gridArea: 'street' }}></input>
            <input type="text" placeholder="Número" style={{ gridArea: 'number' }}></input>
            <input type="text" placeholder="Complemento" style={{ gridArea: 'complement' }}></input>
            <input type="text" placeholder="Bairro" style={{ gridArea: 'district' }}></input>
            <input type="text" placeholder="Cidade" style={{ gridArea: 'city' }}></input>
            <input type="text" placeholder="UF" style={{ gridArea: 'state' }}></input>
          </AddressForm>
        </AddressContainer>
        <PaymentContainer>
          <footer>
            <header>
              <span>
                <CurrencyDollar size={22} />
              </span>
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </header>
            <fieldset>
              <PaymentType>
                <input type="checkbox" id="credit"></input>
                <label htmlFor="credit">
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </label>
              </PaymentType>
              <PaymentType>
                <input type="checkbox" id="debit"></input>
                <label htmlFor="debit">
                  <CreditCard size={16} />
                  CARTÃO DE DÉBITO
                </label>
              </PaymentType>
              <PaymentType>
                <input type="checkbox" id="money"></input>
                <label htmlFor="money">
                  <Money size={16} />
                  DINHEIRO
                </label>
              </PaymentType>
            </fieldset>
          </footer>
        </PaymentContainer>
      </main>
      <aside>
        <h2>Cafés selecionados</h2>
        <div>
          <Item title="Exresso Tradicional" thumb={expressoCoffee} />
          <Item title="Latte" thumb={latte} />
          <footer>
            <Description>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </Description>
            <Description>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </Description>
            <Description>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </Description>
            <ButtonCustom>
              <NavLink to="/success">CONFIRMAR PEDIDO</NavLink>
            </ButtonCustom>
          </footer>
        </div>
      </aside>
    </CheckoutContainer>
  )
}