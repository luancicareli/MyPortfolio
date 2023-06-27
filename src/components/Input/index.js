import './Input.css'

const Input = (props) => {
    return (
        <div className='inputText'>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>
       
    )
};

export default Input;