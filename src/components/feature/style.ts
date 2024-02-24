import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 2rem 0.8rem;

  &.footer {
    background-color: #f5f6f8;
    margin-top: 2rem;

    @media screen and (min-width:640px) {
      margin-top: 4rem;
    }
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 3rem;

  &.workflow {
    position: relative;
    top: -2rem;
  }

  & > .devices-image {
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      max-width: 905px;
      height: auto;
      width: 90%;
    }
  }

  & > .feature-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  & > .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & > .box {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;

    & > .computer-image {
      width: 90%;
      height: auto;
    }
  }

  @media screen and (min-width: 768px) {
    & > .box {
      flex-direction: row;
      overflow: hidden;
      position: relative;
      gap: 3rem;
      left: 2%;
      & > .computer-image {
        width: 50%;
        height: auto;
        position: relative;
        left: -2%;
      }
    }
  }
`;

export const H2 = styled.h2`
  font-size: 28px;
  text-align: center;
  color: hsl(210, 10%, 33%);
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 600;
  font-style: normal;
  @media screen and (min-width: 640px) {
    font-size: 36px;
  }
`;

export const H4 = styled.h4`
  font-size: 18px;
  color: hsl(210, 10%, 33%);
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 600;
  font-style: normal;
  @media screen and (min-width: 640px) {
    font-size: 20px;
  }
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

export const Description = styled.p`
  color: hsl(201, 11%, 66%);
  font-size: 16px;
  text-align: center;
  max-width: 350px;
  font-family: "Bai Jamjuree", sans-serif;
  font-weight: 400;
  font-style: normal;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;
