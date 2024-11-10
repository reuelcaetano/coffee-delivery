import styled from "styled-components";

export const TagContainer = styled.div`
  display: flex;

  span {
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    padding: 8px;
    background-color: ${props => props.theme["yellow-300"]};

    display: flex;
    justify-content: center;
    align-items: center;
  }
`