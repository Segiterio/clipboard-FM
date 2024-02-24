import { Wrapper, Container } from "../feature/style";
import { FlexRow } from "../about/style";
import Google from "../../assets/images/logo-google.png";
import HP from "../../assets/images/logo-hp.png";
import IBM from "../../assets/images/logo-ibm.png";
import Microsoft from "../../assets/images/logo-microsoft.png";
import Graphipcs from "../../assets/images/logo-vector-graphics.png";

const partnersImages = [
  {
    id: 1,
    image: Google,
    name: "google",
  },
  {
    id: 2,
    image: IBM,
    name: "ibm",
  },
  {
    id: 3,
    image: Microsoft,
    name: "microsoft",
  },
  {
    id: 4,
    image: HP,
    name: "hp",
  },
  {
    id: 5,
    image: Graphipcs,
    name: "vector graphics",
  },
];
const Partners = () => {
  return (
    <Wrapper>
      <Container>
        <FlexRow className="partners">
          {partnersImages.map((item) => {
            return <img key={item.id} src={item.image} alt={item.name} />;
          })}
        </FlexRow>
      </Container>
    </Wrapper>
  );
};

export default Partners;
