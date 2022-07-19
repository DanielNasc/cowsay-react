import { FooterContainer } from "./styles";
import GithubIcon from "../../assets/github.svg";

export function Footer() {
  return (
    <FooterContainer>
      <img src={GithubIcon} alt="Github icon" />
      <a href="https://github.com/DanielNasc/cowsay-react" target="_blank">
        Github
      </a>
    </FooterContainer>
  );
}
