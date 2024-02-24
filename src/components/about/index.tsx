import { Wrapper, Container, H2, H4 } from "../feature/style";
import { P } from "../hero/style";
import { FlexRow, Item } from "./style";
import PreviewImage from "../../assets/images/icon-preview.svg";
import BlackListImage from "../../assets/images/icon-blacklist.svg";
import TextImage from "../../assets/images/icon-text.svg";

const AboutData = [
  {
    id: 1,
    icon: BlackListImage,
    title: "Create blacklists",
    description:
      "Ensure sensitive information never makes its way to your clipboard by excluding certain sources.",
  },
  {
    id: 2,
    icon: TextImage,
    title: "Plain text snippets",
    description:
      "Remove unwanted formatting from copied text for a consistent look.",
  },
  {
    id: 3,
    icon: PreviewImage,
    title: "Sneak preview",
    description:
      "Quick preview of all snippets on your Clipboard for easy access.",
  },
];

const About = () => {
  return (
    <Wrapper>
      <Container className="workflow">
        <div className="feature-header bai-jamjuree-regular">
          <H2>Supercharge your workflow</H2>
          <P>We've got the tools to boost your productivity. </P>
        </div>
        <FlexRow>
          {AboutData.map((item) => (
            <Item key={item.id} className="bai-jamjuree-regular">
              <div>
                <img src={item.icon}  alt="" />
              </div>
              <H4>{item.title}</H4>
              <p className="description">{item.description}</p>
            </Item>
          ))}
        </FlexRow>
      </Container>
    </Wrapper>
  );
};

export default About;
