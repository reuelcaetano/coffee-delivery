import { CreditCard, CurrencyDollar, MapPin, Money } from "@phosphor-icons/react";
import { AddressContainer, AddressForm, ButtonCustom, CheckoutContainer, Description, PaymentContainer, PaymentType } from "./styles";
import { Item } from "./components/Item";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

export function Checkout() {
  const { cart, stock, clearCart } = useContext(CartContext)
  const order = cart.reduce(
    (acc, item) => {
      console.log(item.price)
      console.log(item.amount)
      acc.total += item.amount * item.price

      return acc
    },
    {
      total: 0,
      tax: 3.5
    }  
  )

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
          { cart.map(item => {
            const product = stock.find((product) => product.id === item.id)
            if (!product) { return }
            return (
              <Item
                key={item.id}
                id={product.id}
                title={product.title}
                thumb={product.thumb}
                price={product.price}
              />
            )
          })}
          <footer>
            <Description>
              <span>Total de itens</span>
              <span>R$ {order.total.toFixed(2).replace('.',',')}</span>
            </Description>
            <Description>
              <span>Entrega</span>
              <span>R$ {order.tax.toFixed(2).replace('.',',')}</span>
            </Description>
            <Description>
              <strong>Total</strong>
              <strong>R$ {(order.total + order.tax).toFixed(2).replace('.',',')}</strong>
            </Description>
            <ButtonCustom>
              <NavLink to="/success" onClick={() => clearCart()}>CONFIRMAR PEDIDO</NavLink>
            </ButtonCustom>
          </footer>
        </div>
      </aside>
    </CheckoutContainer>
  )
}