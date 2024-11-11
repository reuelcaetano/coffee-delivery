import styled from "styled-components";

interface TagContainerProps {
  background: string
}

export const TagContainer = styled.div<TagContainerProps>`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.75rem;
  width: 300px;

  p {
    font-size: 1rem;
    color: ${props => props.theme["zinc-500"]}
  }

  span {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    padding: 8px;
    background-color: ${props => props.theme[props.background]};
    color: ${props => props.theme["gray-0"]};
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
`