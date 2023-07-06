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
                        Eu sou Luan, apaixonado por programação. Desenvolvedor formado em Sistemas de Informação, com 4 anos de experiência na área de desenvolvimento Full Stack, e ainda conhecimentos e experiências em desenvolvimentos de projetos personalizado com painéis CMS integrado, Programação Orientada a Objetos e Padrão Design Patterns. Busco novas oportunidades para que possa aplicar e compartilhar meus conhecimentos.
                    </p>
                </Col>
            </Row>
        </Container>
       
    )
};

export default Content;