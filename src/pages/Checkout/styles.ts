import styled from "styled-components";

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 2rem;
  padding-top: 4rem;

  h2 {
    font-size: 1.25rem;
    font-family: 'Baloo 2';
    font-weight: bold;
    padding-bottom: 1rem;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  main > div {
    
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
      color: ${props => props.theme["zinc-600"]}
    }

    p {
      font-size: 0.875rem;
      color: ${props => props.theme["zinc-500"]}
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
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

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

  aside > div {
    background-color: ${props => props.theme["gray-200"]};
    padding: 2.5rem;
    border-radius: 6px 44px 6px 44px;
  }

  aside footer {
    padding-top: 1.5rem;
  }
`

export const ButtonCustom = styled.div`
  background: ${props => props.theme["yellow-500"]};
  border: 0;
  font-weight: bold;
  font-size: 0.875rem;
  border-radius: 6px;
  width: 100%;
  height: 46px;
  margin-top: 1.5rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  
  a {
    color: ${props => props.theme["gray-0"]};
    text-decoration: none;
    width: 100%;
    height: 100%;
    padding: 1rem;
    text-align: center;
    border-radius: 6px;
  }

  &:hover {
    background: ${props => props.theme["yellow-700"]};
  }
`

export const AddressContainer = styled.div`
  background-color: ${props => props.theme["gray-200"]};
  border-radius: 6px;
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number complement complement'
    'district city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 1rem 0.75rem;

  input {
    background: ${props => props.theme["gray-300"]};
    border: ${props => props.theme["gray-400"]} 1px solid;
    border-radius: 6px;
    height: 42px;
    padding: 0.75rem;
    color: ${props => props.theme["zinc-300"]};
  }
`

export const PaymentContainer = styled.div`
  background-color: ${props => props.theme["gray-200"]};
  border-radius: 6px;

  fieldset {
    display: flex;
    gap: 1rem;
    padding: 2rem 0;
    border: 0;

    input {
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      
      :first-child {
        color: ${props => props.theme["purple-500"]};
      }
    
    }
  }
`

export const PaymentType = styled.div`
  background: ${props => props.theme["gray-400"]};
  width: 178px;
  height: 50px;
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.75rem;
  color: ${props => props.theme["zinc-500"]};

  &:hover {
    background: ${props => props.theme["zinc-100"]};
    cursor: pointer;
  }
`

export const Description = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    font-size: 0.875rem;
    color: ${props => props.theme["zinc-500"]}
  }

  strong {
    font-size: 1.25rem;
  }
`