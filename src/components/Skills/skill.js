import './skills.css'

const SkillContent = ({ name, image }) => {
    return (
    
        <div className='skillContent'>
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
        
    )
}

export default SkillContent;