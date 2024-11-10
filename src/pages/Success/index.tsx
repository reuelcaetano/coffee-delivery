import { MapPin } from "@phosphor-icons/react";
import { SuccessContainer } from "./styles";
import imageDelivery from "../../assets/image-delivery.svg"

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <section>
          <div>
            <span>
              <MapPin size={20} />
            </span>
            <div>
              <p>Entrega em Rua João Daniel Martinelli, 102Farrapos - Porto Alegre, RS</p>
            </div>
          </div>
          <div>
            <span>
              <MapPin size={20} />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </div>
          <div>
            <span>
              <MapPin size={20} />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <strong>Cartão de Crédito</strong>
            </div>
          </div>
        </section>
      </div>
      <aside>
        <img src={imageDelivery} alt=""></img>
      </aside>
    </SuccessContainer>
  )
}