import './Banner.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner(){
    //JSX
    return (
        <Container style={{marginTop: "100px"}}>
            <Row>
                <Col>
                    <div className="bio">
                        <h1 className="text-first">Olá, eu sou o</h1>
                        <h1 className="text-name">Luan Cicareli</h1>
                        <h4 className="text-dev">Desenvolvedor Web Full-stack</h4>
                    </div>
                </Col>
                <Col>
                    <div className='img-profile-box'>
                        <img src="/images/profile.png" alt="Luan Cicareli" className="img-profile" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner;