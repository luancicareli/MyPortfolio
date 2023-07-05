import './rodape.css'

const Rodape = () => {
    return (
        <div id="contact" className='rodape'>
            <div className='rodapeBox'>
                <div className='rodapeContent'>
                    <a href="https://github.com/luancicareli" target="_blank" rel="noopener noreferrer">
                        <img src='/images/social/github.png' alt='GitHub Luan Cicareli' />
                        <p>GitHub</p>
                        <p className='txtRodapeContent'><small>@luancicareli</small></p>
                    </a>
                </div>
                <div className='rodapeContent'>
                    <a href="https://www.linkedin.com/in/luancicareli" target="_blank" rel="noopener noreferrer">
                        <img src='/images/social/linkedin.png' alt='LinkedIn Luan Cicareli' />
                        <p>LinkedIn</p>
                        <p className='txtRodapeContent'><small>@luancicareli</small></p>
                    </a>
                </div>
                <div className='rodapeContent'>
                    <a href="mailto:luancicareli@gmail.com" target="_blank" rel="noopener noreferrer">
                      <img src='/images/social/mail.png' alt='E-mail Luan Cicareli' />
                        <p>E-mail</p>
                        <p className='txtRodapeContent'><small>luancicareli@gmail.com</small></p>
                    </a>
                </div>
                <div className='rodapeContent'>
                    <a href="https://api.whatsapp.com/send?phone=5517997462585&text=Ol%C3%A1%20Luan,%20achei%20seu%20perfil%20interessante.%20Podemos%20marcar%20um%20hor%C3%A1rio%20para%20uma%20conversa?" target="_blank" rel="noopener noreferrer">
                        <img src='/images/social/whatsapp.png' alt='WhatsApp Luan Cicareli' />
                        <p>WhatsApp</p>
                        <p className='txtRodapeContent'><small>+55 (17) 99746-2585</small></p>
                    </a>
                </div>
            </div>
        </div>       
    )
};

export default Rodape;