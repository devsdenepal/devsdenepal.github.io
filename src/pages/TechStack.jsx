import TitleBox from "../components/TitleBox";
import TechStack from "../components/TechStack";
import { Container } from "react-bootstrap";
const TechStackPage = () => {
  return (
     <section role='individual' id='tech-stack'>
        <TitleBox
          heading="My Tech Stack"
          description="Technologies I've been working with recently"
        />
        <Container>
          <TechStack />
        </Container>
      </section>
  );
};

export default TechStackPage;
