import {Row, Col} from 'react-bootstrap'
import HeroImage from '/assets/img.png'
const AboutPage = () => {
    return (
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
    );
}
export default AboutPage;