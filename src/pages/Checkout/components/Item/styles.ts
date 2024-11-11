import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  border-bottom: ${props => props.theme["gray-400"]} 1px solid;
  padding: 1.5rem 0;

  div {
    display: flex;
    gap: 0.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ItemActions = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1rem;
    font-weight: normal;
  }

  > div {
    gap: 0.5rem;
  }
`

export const RemoveButton = styled.div`
  background: ${props => props.theme["gray-400"]};
  padding: 8px;
  border-radius: 6px;
  color: ${props => props.theme["zinc-500"]};
  font-size: 0.75rem;

  display: flex;
  justify-content: center;
  align-items: center;

  :first-child {
    color: ${props => props.theme["purple-500"]};
  }

  &:hover {
    background: ${props => props.theme["zinc-100"]};
    cursor: pointer;
  }
`