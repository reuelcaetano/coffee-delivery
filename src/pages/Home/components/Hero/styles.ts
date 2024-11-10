import styled from "styled-components";
import background from "../../../../assets/background.png"

export const HeroContainer = styled.header`
  display: flex;
  padding: 4rem 0;
  /* background-image: url(${background}); */

  header {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  h1 {
    font-size: 3rem;
    line-height: 130%;
    font-family: 'Baloo 2';
    font-weight: bold;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
  }

  div div {
    display: flex;
    gap: 8px;
  }
`

export const ServicesContainer = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
  }
`