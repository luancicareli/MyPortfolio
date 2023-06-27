import Input from '../Input';
import './Form.css'


const Form = (props) => {
    return (
        <section className='form'>
            <form>
                <h2>Formulário de Contato</h2>
                <Input type="text" label="Nome" placeholder="Digite seu Nome"/>
                <Input type="email" label="E-mail" placeholder="Digite seu E-mail"/>
                <Input type="telefone" label="Telefone" placeholder="Digite seu Telefone"/>
            </form>
        </section>
    )
}

export default Form;