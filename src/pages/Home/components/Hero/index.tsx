import { HeroContainer, ServicesContainer } from "./styles";
import imageHero from "../../../../assets/image-hero.png"
import { Tag } from "../Tag";

export function Hero() {
  return (
    <HeroContainer>
      <div>
        <header>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </header>
        <ServicesContainer>
          <Tag title="Compra simples e segura" background="yellow-700" />
          <Tag title="Embalagem mantém o café intacto" background="zinc-500" />
          <Tag title="Entrega rápida e rastreada" background="yellow-500" />
          <Tag title="O café chega fresquinho até você" background="purple-500" />
        </ServicesContainer>
      </div>
      <img src={imageHero} alt="" />
    </HeroContainer>
  )
}