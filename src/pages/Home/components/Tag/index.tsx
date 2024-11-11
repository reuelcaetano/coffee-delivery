import { ShoppingCart } from "@phosphor-icons/react";
import { TagContainer } from "./styles";

interface TagProps {
  title: string
  background: string
}

export function Tag({ title, background }: TagProps) {
  return (
    <TagContainer background={background}>
      <span>
        <ShoppingCart />
      </span>
      <p>{title}</p>
    </TagContainer>
  )
}