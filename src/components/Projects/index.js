import './projects.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectContent from './project';
import React, { useState, useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const ProjectBox = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const [targetRef, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    useEffect(() => {
      setIsVisible(inView);
    }, [inView]);

    return (
        <Container className='boxProjectsMain'>
            <Row>
                <Col>
                    <h3 style={{textAlign: "center"}}>Projetos</h3>
                    <Element name="targetElement" className={`scroll-targetP ${isVisible ? 'active' : ''}`}>
                        <div ref={targetRef}>
                            <div id="projects" className="projectBox">
                            {
                                (props.projects.map((project) => {
                                    return (
                                        <ProjectContent key={project.name} link={project.link} name={project.name} desc={project.desc} image={project.logo} />
                                    )
                                }))
                            }
                            </div>
                        </div>
                    </Element>
                </Col>
            </Row>
        </Container>
       
    )
};

export default ProjectBox;