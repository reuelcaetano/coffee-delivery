import styled from "styled-components";

export const SuccessContainer = styled.main`
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 50% 50%;

  div h2 {
    font-family: 'Baloo 2';
    font-weight: 900;
    font-size: 2rem;
    color: ${props => props.theme["yellow-700"]}
  }

  div p {
    font-size: 1.25rem;
  }

  section  {
    width: 526px;
    border: ${props => props.theme["yellow-500"]} 1px solid;
    border-radius: 6px 36px 6px 36px;
    padding: 2.5rem;
    margin-top: 2.5rem;
    color: ${props => props.theme["zinc-500"]};
  }

  aside {
    display: flex;
    justify-content: center;
    padding-top: 7rem;
  }
`