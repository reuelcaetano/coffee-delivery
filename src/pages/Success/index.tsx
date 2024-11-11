import { SuccessContainer } from "./styles";
import imageDelivery from "../../assets/image-delivery.svg"
import { IconTag } from "./components/IconTag";

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <section>
          <IconTag title="Entrega em Rua João Daniel Martinelli, 102" subtitle="Farrapos - Porto Alegre, RS" />
          <IconTag title="Previsão de entrega" subtitle="20 min - 30 min" />
          <IconTag title="Pagamento na entrega" subtitle="Cartão de Crédito" />
        </section>
      </div>
      <aside>
        <img src={imageDelivery} alt=""></img>
      </aside>
    </SuccessContainer>
  )
}