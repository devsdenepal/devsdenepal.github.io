import ProjectList from "../components/ProjectList";
import TitleBox from "../components/TitleBox";
import { Container } from "react-bootstrap";
const ProjectListPage = () => {
  return (
  <section role='individual' id='projects'>
        <TitleBox
          heading="My Projects"
          description="A selection of my recent work"
        />
        <Container>
          <ProjectList />
        </Container>
      </section>
  );
};

export default ProjectListPage;
