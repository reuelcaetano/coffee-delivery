import styled from "styled-components";
import background from "../../../../assets/background.png"

export const HeroContainer = styled.header`
  display: flex;
  padding: 5rem 0;
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
    color: ${props => props.theme["zinc-700"]};
    font-weight: 900;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
  }

  div div {
    display: flex;
  }
`

export const ServicesContainer = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
`