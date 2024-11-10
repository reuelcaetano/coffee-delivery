import { ShoppingCart } from "@phosphor-icons/react";
import { TagContainer } from "./styles";

interface TagProps {
  title: string
}

export function Tag({ title }: TagProps) {
  return (
    <TagContainer>
      <span>
        <ShoppingCart />
      </span>
      <p>{title}</p>
    </TagContainer>
  )
}