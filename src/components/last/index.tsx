import { Wrapper, H2 } from "../feature/style";
import { P, DownloadBtnContainer, DownloadBtn, Hero } from "../hero/style";

const Last = () => {
  return (
    <Wrapper>
      <Hero>
        <div className="feature-header ">
          <H2>Clipboard for iOS and Mac OS</H2>
          <P>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you're ready to start adding to your clipboard.
          </P>
        </div>
        <DownloadBtnContainer>
          <DownloadBtn $type="iOS">Download for iOS</DownloadBtn>
          <DownloadBtn $type="Mac">Download for Mac</DownloadBtn>
        </DownloadBtnContainer>
      </Hero>
    </Wrapper>
  );
};

export default Last;
