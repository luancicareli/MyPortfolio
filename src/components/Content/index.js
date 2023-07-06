import './content.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Content = () => {
    return (
        <Container className='boxAbout'>
            <Row>
                <Col>
                    <h3 style={{textAlign: "center"}}>Sobre mim</h3>
                    <p id="about" className="about">
                        TESTEEEEEEEEEEEEEEEEEEE
                    </p>
                </Col>
            </Row>
        </Container>
       
    )
};

export default Content;