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
          <div>
            <Tag title="Compra simples e segura" />
            <Tag title="Compra simples e segura" />
          </div>
          <div>
            <Tag title="Compra simples e segura" />
            <Tag title="Compra simples e segura" />
          </div>
        </ServicesContainer>
      </div>
      <img src={imageHero} alt="" />
    </HeroContainer>
  )
}