import { MapPin } from "@phosphor-icons/react";
import { IconTagContainer } from "./styles";

interface IconTagProps {
  title: string
  subtitle: string
}

export function IconTag({ title, subtitle }: IconTagProps) {
  return (
    <IconTagContainer>
      <div>
        <MapPin size={16} weight="fill" />
      </div>
      <footer>
        <p>{title}</p>
        <strong>{subtitle}</strong>
      </footer>
    </IconTagContainer>
  )
}