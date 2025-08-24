import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import TitleBox from '../components/TitleBox';
import HeroImage from '/assets/img.png';
import TechStack from '../components/TechStack';
import ProjectList from '../components/ProjectList';
const Home = () => {
  return (
    <>
      <section role="individual">
        <Row className="align-items-center">
          <Col
            lg={6}
            className="d-flex flex-column justify-content-center align-items-start"
            data-aos="fade-right">
            <h3>
              Hello 👋,<br />
              My name is <br />
              <span className='text-gradient'>Dev Gautam Kumar</span><br />
              I build things for the web.
            </h3>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-center align-items-center"
            data-aos="fade-left">
            <img
              src={HeroImage}
              alt="Hero"
              className="img-fluid"
              style={{ maxHeight: '350px', objectFit: 'contain' }}
            />
          </Col>
        </Row>
      </section>
      <section role='individual' id='tech-stack'>
        <TitleBox

          heading="My Tech Stack"
          description="Technologies I've been working with recently"
        />
        <Container>
          <TechStack />
        </Container>
      </section>
      <section role='individual' id='projects'>
        <TitleBox
          heading="My Projects"
          description="A selection of my recent work"
        />
        <Container>
          <ProjectList />
        </Container>
      </section>
    </>
  );
};

export default Home;
