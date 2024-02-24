import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;

  & > .logo {
    width: 70px;
    height: 70px;
  }

  & ul {
    list-style-type: none;
    display: grid;
    column-gap: 2rem;
    row-gap: 1.5rem;
    color: hsl(201, 11%, 66%);
    place-items: center;
  }

  & > .social {
    display: flex;
    gap: 1rem;
  }

  @media screen and (min-width: 640px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    & ul {
      grid-template-columns: repeat(3,1fr);
      column-gap: 2rem;
      row-gap: 1.5rem;
      place-items: start;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5rem;
    & ul {
      margin-right: auto;
      margin-left: 50px;
    }
  }
`;
