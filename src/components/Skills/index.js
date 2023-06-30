import './skills.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Skills = (nome, image) => {
    return (
        <Container style={{marginTop: "100px"}}>
            <Row>
                <Col>
                    <h3 style={{textAlign: "center"}}>Habilidades</h3>
                    
                </Col>
            </Row>
        </Container>
       
    )
};

export default Skills;