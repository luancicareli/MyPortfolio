import './projects.css'

const ProjectContent = ({ name, image, desc }) => {
    return (
    
        <div className='projectContent'>
            <img src={image} alt={name} />
            <p className="txtNamePrj">{name}</p>
            <p className="txtDescPrj"><small>{desc}</small></p>
        </div>
        
    )
}

export default ProjectContent;