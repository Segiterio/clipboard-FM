import styled from "styled-components";

export const Wrapper = styled.div`
  background-image: url("/bg-header-mobile.png");
  background-repeat: no-repeat;
  background-size: contain;
  padding: 3rem 0.8rem;

  @media screen and (min-width: 560px) {
    background-size: cover;
  }

  @media screen and (min-width: 768px) {
    background-image: url("/bg-header-desktop.png");
    background-size: contain;
    padding: 5rem 0.8rem;
  }
  
  @media screen and (min-width: 1024px) {
    background-image: url("/bg-header-desktop.png");
    background-size: contain;
    padding: 8rem 0.8rem;
  }
`;

export const Hero = styled.div`
  max-width: 1440px;
  min-width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

export const DownloadBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;


  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

export const DownloadBtn = styled.div<{ $type: "iOS" | "Mac" }>`
  flex-grow: 1;
  padding: 0.6rem 1.8rem;
  background-color: ${({ $type }) => ($type === "iOS" ? "#26bba5" : "#6174ff")};
  color: white;
  border-radius: 100px;
  box-shadow: 3px 3px 8px 2px
      ${({ $type }) =>
        $type === "iOS" ? "rgb(38, 187, 165 ,0.2)" : "rgb(97, 116, 255,0.2)"},
    -3px 3px 8px 2px ${({ $type }) => ($type === "iOS" ? "rgb(38, 187, 165 ,0.2)" : "rgb(97, 116, 255,0.2)")};
  border: none;
  font-size: 18px;
  @media screen and (min-width: 640px) {
    font-size: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const H1 = styled.h1`
  color: hsl(210, 10%, 33%);
  font-size: 32px;
  text-align: center;

  @media screen and (min-width: 640px) {
    font-size: 44px;
  }
`;

export const P = styled.p`
  color: hsl(201, 11%, 66%);
  max-width: 700px;
  font-size: 16px;
  text-align: center;
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 400;
  font-style: normal;
  padding-top:1rem;
  @media screen and (min-width: 640px) {
    font-size: 18px;
  }
`;

