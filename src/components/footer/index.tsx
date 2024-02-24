import { Wrapper } from "../feature/style";
import { FooterContainer } from "./style";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import instagram from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <Wrapper className="footer" >
      <FooterContainer>
        <img src={logo} alt="logo" className="logo" />
        <ul>
          <li>FAQ's</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Press Kit</li>
          <li>Install Guide</li>
        </ul>

        <div className="social">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={instagram} alt="" />
        </div>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
