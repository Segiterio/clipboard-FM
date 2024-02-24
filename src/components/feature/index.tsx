import {
  Wrapper,
  H2,
  Container,
  H4,
  Description,
  FeatureWrapper,
  Features,
} from "./style";
import { P } from "../hero/style";
import ComputerImage from "../../assets/images/image-computer.png";

export default function Feature() {
  return (
    <Wrapper>
      <Container>
        <div className="feature-header">
          <H2 className="bai-jamjuree-semibold">Keep track of your snippets</H2>
          <P className="bai-jamjuree-regular">
            Clipboard instantly stores any item you copy in the cloud, meaning
            you can access your snippets immediately on all your devices. Our
            Mac and iOS apps will help you organize everything.
          </P>
        </div>
        <div className="box">
         <img src={ComputerImage} alt="" className="computer-image" />
          <Features>
            <FeatureWrapper className="bai-jamjuree-regular">
              <H4>Quick Search</H4>
              <Description>
                Easily search your snippets by content, category, web address,
                application, and more.
              </Description>
            </FeatureWrapper>
            <FeatureWrapper className="bai-jamjuree-regular">
              <H4>iCloud Sync</H4>
              <Description>
                Instantly saves and syncs snippets across all your devices.
              </Description>
            </FeatureWrapper>
            <FeatureWrapper className="bai-jamjuree-regular">
              <H4>Complete History</H4>
              <Description>
                Retrieve any snippets from the first moment you started using
                the app.
              </Description>
            </FeatureWrapper>
          </Features>
        </div>
      </Container>
    </Wrapper>
  );
}
