import { CurrencyDollar, MapPin } from "@phosphor-icons/react";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <main>
        <h2>Complete seu pedido</h2>
        <div>
          <header>
            <span>
              <MapPin size={22} />
            </span>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>
          <form>
            <input type="text" placeholder="CEP"></input>
            <input type="text" placeholder="Rua"></input>
            <input type="text" placeholder="Número"></input>
            <input type="text" placeholder="Complemento"></input>
            <input type="text" placeholder="Bairro"></input>
            <input type="text" placeholder="Cidade"></input>
            <input type="text" placeholder="UF"></input>
          </form>
          <footer>
            <span>
              <CurrencyDollar size={22} />
            </span>
            <h3>Pagamento</h3>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            <fieldset>
              <input type="radio"></input>
              <label>CARTÃO DE CRÉDITO</label>
              <input type="radio"></input>
              <label>CARTÃO DE DÉBITO</label>
              <input type="radio"></input>
              <label>DINHEIRO</label>
            </fieldset>
          </footer>
        </div>
      </main>
      <aside>
        <h2>Cafés selecionados</h2>
        <div>
          <footer>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ 33,20</strong>
            </div>
            <button type="button">CONFIRMAR PEDIDO</button>
          </footer>
        </div>
      </aside>
    </CheckoutContainer>
  )
}