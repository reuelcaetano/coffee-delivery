import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  > div {
    display: flex;
    gap: 12px;
  }

  span {
    background-color: ${props => props.theme["purple-300"]};
    color: ${props => props.theme["purple-500"]};
    font-size: 0.875rem;
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
  }

  p {
    color: ${props => props.theme["purple-700"]};
  }

  div a {
    background-color: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["yellow-700"]};
    padding: 8px;
    border-radius: 6px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`