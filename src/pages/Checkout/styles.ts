import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2rem;

  h2 {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    padding-bottom: 1rem;
  }

  main > div {
    background-color: ${props => props.theme["gray-200"]};
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  header {
    display: flex;
    align-items: start;
    gap: 0.5rem;

    span {
      color: ${props => props.theme["yellow-700"]};
    }

    h3 {
      font-weight: normal;
    }

    p {
      font-size: 0.875rem;
    }
  }

  form input {
    padding: 0.75rem;
    background-color: ${props => props.theme["gray-300"]};
    border: ${props => props.theme["gray-400"]} 1px solid;
    color: ${props => props.theme["zinc-300"]};
    border-radius: 4px;
  }

  footer {
    > span {
      color: ${props => props.theme["purple-500"]}
    }

    h3 {
      font-weight: normal;
    }

    p {
      font-size: 0.875rem;
    }
  }

  aside div {
    background-color: ${props => props.theme["gray-200"]};
    padding: 2.5rem;
  }
`