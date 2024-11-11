import styled from "styled-components";

export const IconTagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    background: ${props => props.theme["purple-500"]};
    color: ${props => props.theme["gray-0"]};
    border-radius: 9999px;
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`