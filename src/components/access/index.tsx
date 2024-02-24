import { Wrapper, H2, Container } from "../feature/style";
import { P } from "../hero/style";
import ImageDevices from "../../assets/images/image-devices.png";

const Access = () => {
  return (
    <Wrapper>
      <Container>
        <div className="feature-header bai-jamjuree-regular">
          <H2>Access Clipboard anywhere</H2>
          <P>
            Whether you're on the go, or at your computer, you can access all
            your Clipboard snippets in a few simple clicks.
          </P>
        </div>
        <div className="devices-image">
          <img src={ImageDevices} alt="devices" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Access;
