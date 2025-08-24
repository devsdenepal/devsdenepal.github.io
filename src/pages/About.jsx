import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import TitleBox from '../components/TitleBox';
import Aos from 'aos';
import Workexperience from '../components/Workxperience';
import data from '/data/data.json'
const AboutPage = () => {
    return (
        <Container>
       
                <TitleBox heading="About Me" />
                <p role='medium' className='mt-4' data-aos="fade-right">
                    Hi, I'm Dev Gautam Kumar, also known as devsdenepal. I'm a passionate web developer in my early 20s, specializing in modern JavaScript frameworks and building scalable web applications. With a strong foundation in React, Node.js, and cloud technologies, I enjoy solving complex problems and delivering impactful digital experiences.
                </p>

           
                <div className='mt-4'>
                    <TitleBox heading="Work Experience" />
                    <Workexperience data={data.workexperience} />
                </div>
                
        </Container>
    );
}
export default AboutPage;