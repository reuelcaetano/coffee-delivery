import styled from "styled-components";

export const ProductContainer = styled.div`
  background-color: ${props => props.theme["gray-300"]};
  width: 256px;
  height: 310px;
  border-radius: 6px 36px 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 12px;
    gap: 8px;
  }

  div div {
    flex-direction: row;
  }

  img {
    position: relative;
    display: block;
    top: -16px;
  }

  > div span {
    background-color: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["yellow-700"]};
    border-radius: 9999px;
    font-size: 0.625rem;
    font-weight: bold;
    padding: 0.25rem 0.5rem;
  }

  strong {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Baloo 2';
  }

  p {
    font-size: 0.875rem;
    color: ${props => props.theme["zinc-200"]};
    text-align: center;
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 32px;

    strong {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      color: ${props => props.theme["zinc-500"]}
    }
    
    input {
      width: 60px;
    }
  }
`

export const Currency = styled.strong`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  &::before {
    content: 'R$';
    font-size: 0.875rem;
    font-weight: normal;
  }
`

export const QuantityInput = styled.div`
  background-color: ${props => props.theme["gray-400"]};
  border-radius: 6px;
  display: flex;
  overflow: hidden;

  button {
    background-color: transparent;
    color: ${props => props.theme["purple-500"]};
    border: 0;
    padding: 0.25rem;
    line-height: 0;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.theme["purple-500"]};
      color: ${props => props.theme["gray-0"]};
    }

    &:focus {
      box-shadow: none;
    }
  }

  > span {
    color: ${props => props.theme["zinc-700"]};
    padding: 0.25rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const ButtonAction = styled.button`
  background-color: ${props => props.theme["purple-700"]};
  color: ${props => props.theme["gray-0"]};
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 6px;
  
  &:hover {
    background-color: ${props => props.theme["purple-500"]};
    cursor: pointer;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`