import './skills.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillContent from './skill';
import React, { useState, useRef, useEffect } from 'react';
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';


const SkillUp = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const [targetRef, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
  
    useEffect(() => {
      setIsVisible(inView);
    }, [inView]);

    return (
        <Container id="skillUp">
            <Row>
                <Col>
                    <h3 style={{textAlign: "center"}}>Habilidades</h3>
                    <Element name="targetElement" className={`scroll-target ${isVisible ? 'active' : ''}`}>
                        <div ref={targetRef}>
                            <div className="boxSkill">
                            {
                                (props.skills.map((skill) => {
                                    return (
                                        <SkillContent key={skill.name} link={skill.link} name={skill.name} image={skill.logo} />
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

export default SkillUp;