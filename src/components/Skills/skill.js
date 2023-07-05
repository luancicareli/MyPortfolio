import './skills.css'

const SkillContent = ({ name, link, image }) => {
    console.log(name, link, image)
    return (
        <>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className='skillContent'>
                    <img src={image} alt={name} />
                    <p>{name}</p>
                </div>
            </a>
        </>
    )
}

export default SkillContent;