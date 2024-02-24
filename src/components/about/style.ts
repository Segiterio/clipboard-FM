import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;


  &.partners {
    justify-content: space-evenly;
    gap: 3.5rem;
    padding:0 0 ;
  }

  @media screen and (min-width: 640px) {
    flex-direction: row;

    &.partners {
    justify-content: space-evenly;
    gap:3rem;
    padding:4rem 0 ;
  }
  }
`;

export const Item = styled.div`
  flex-direction: column;
  display: flex;
  gap: 0.6rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  &:first-of-type {
    position: relative;
    top: 7px;
  }

  & > img {
    object-fit: cover;
  }

  & > .description {
    color: hsl(201, 11%, 66%);
    font-size: 16px;
    text-align: center;
    max-width: 350px;
  }
`;
