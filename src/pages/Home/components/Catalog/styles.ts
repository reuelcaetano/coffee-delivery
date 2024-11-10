import styled from "styled-components";

export const CatalogContainer = styled.div`
  padding: 4rem 0;

  h2 {
    color: ${props => props.theme["zinc-600"]};
    font-family: 'Baloo 2';
    font-size: 2rem;
    padding: 0 0 4rem 0;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`