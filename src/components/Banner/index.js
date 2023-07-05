import './Banner.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { useState, useEffect } from 'react';

const Banner = () => {
    
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
  
    useEffect(() => {
        const messages = ["Olá, eu sou o", "Luan Cicareli", "Desenvolvedor Web Full-stack"];
        const typingInterval = 50;
        let currentIndex = 0;
    
        const animateTypewriter = () => {
            let currentText = '';
            let index = 0;
            const message = messages[currentIndex];
    
            const typingIntervalId = setInterval(() => {
                currentText += message[index];
                setText(currentIndex + 1, currentText);
                index++;
        
                if (index === message.length) {
                    clearInterval(typingIntervalId);
        
                    // Verifica se ainda há mensagens restantes
                    if (currentIndex + 1 < messages.length) {
                    currentIndex++;
                    setTimeout(animateTypewriter, 500); // Pausa de 1 segundo antes de iniciar a próxima animação
                    }
                }
            }, typingInterval);
        };
  
      animateTypewriter();
    }, []);

    const setText = (index, value) => {
        switch (index) {
          case 1:
            setText1(value);
            break;
          case 2:
            setText2(value);
            break;
          case 3:
            setText3(value);
            break;
          default:
            break;
        }
    };

    return (
        <Container style={{marginTop: "200px"}}>
            <Row>
                <Col>
                    <div id="home" className="bio">
                        <h1 className="text-first">{text1}</h1>
                        <h1 className="text-name">{text2}</h1>
                        <h4 className="text-dev">{text3}</h4>
                    </div>
                    <div>
                        <div className='boxBtn'>
                            <div className="btn btnPrimary">
                            <a style={{color: "#fff"}} href='/doc/CV-Luan.pdf' download>Download CV</a>
                            </div>
                            <div className="btn btnSecondary">
                            <a style={{color: "#fff"}} href='https://api.whatsapp.com/send?phone=5517997462585&text=Ol%C3%A1%20Luan,%20achei%20seu%20perfil%20interessante.%20Podemos%20marcar%20um%20hor%C3%A1rio%20para%20uma%20conversa?' target="_blank" rel="noopener noreferrer">Entrar em contato</a>
                            </div>
                        </div>
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