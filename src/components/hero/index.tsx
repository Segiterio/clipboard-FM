import logo from "../../assets/images/logo.svg";
import { DownloadBtnContainer, H1, P, Hero, DownloadBtn , Wrapper } from "./style";

const Index = () => {
  return (
    <Wrapper>
      <Hero>
        <div>
          <img src={logo} alt="logo" width={125} height={125} />
        </div>
        <div>
          <H1 className="bai-jamjuree-semibold"> A history of everything you copy</H1>
          <P className="bai-jamjuree-regular">
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </P>
        </div>
        <DownloadBtnContainer className="bai-jamjuree-regular">
          <DownloadBtn $type="iOS">Download for iOS</DownloadBtn>
          <DownloadBtn $type="Mac">Download for Mac</DownloadBtn>
        </DownloadBtnContainer>
      </Hero>
    </Wrapper>
  );
};

export default Index;
