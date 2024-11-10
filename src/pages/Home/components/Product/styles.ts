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
  
  div {
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

  div span {
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
    display: flex;
    padding: 20px;
    
    input {
      width: 60px;
    }

    button {
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
    }
  }
`