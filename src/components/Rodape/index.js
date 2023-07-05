import './rodape.css'

const Rodape = () => {
    return (
        <div id="contact" className='rodape'>
            <div className='rodapeBox'>
                <div className='rodapeContent'>
                    <img src='/images/social/github.png' alt='GitHub Luan Cicareli' />
                    <p>GitHub</p>
                    <p className='txtRodapeContent'><small>@luancicareli</small></p>
                </div>
                <div className='rodapeContent'>
                    <img src='/images/social/linkedin.png' alt='LinkedIn Luan Cicareli' />
                    <p>LinkedIn</p>
                    <p className='txtRodapeContent'><small>@luancicareli</small></p>
                </div>
                <div className='rodapeContent'>
                    <img src='/images/social/mail.png' alt='E-mail Luan Cicareli' />
                    <p>E-mail</p>
                    <p className='txtRodapeContent'><small>luancicareli@gmail.com</small></p>
                </div>
                <div className='rodapeContent'>
                    <img src='/images/social/whatsapp.png' alt='WhatsApp Luan Cicareli' />
                    <p>WhatsApp</p>
                    <p className='txtRodapeContent'><small>+55 (17) 99746-2585</small></p>
                </div>
            </div>
        </div>       
    )
};

export default Rodape;