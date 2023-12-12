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
                        Sou Luan, apaixonado por programação. Desenvolvedor Full Stack com formação em Sistemas de Informação e mais de 6 anos de experiência.
                        Especializado em projetos customizados, incluindo a implementação de painéis CMS integrados, sistemas CRM e EADs. Possuo conhecimentos em Programação Orientada a Objetos, Padrões de Design Patterns e integrações via APIs. 
                    </p>
                    <h3 style={{textAlign: "center"}}>Objetivo</h3>
                    <p st className="about">
                        Busco desafios, onde posso utilizar minha experiência em diversas linguagens e criar soluções impactantes. Comprometido em aplicar meus conhecimentos de forma eficiente, estou sempre aberto a aprender e evoluir. Procuro integrar uma equipe dinâmica, contribuindo para o sucesso da empresa enquanto continuo aprimorando minhas habilidades e conhecimentos técnicos. 
                    </p>
                </Col>
            </Row>
        </Container>
       
    )
};

export default Content;