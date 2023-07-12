import './projects.css';

const ProjectContent = ({ name, image, desc, path }) => {

    return (
        <a href={path} target="_blank" rel="noopener noreferrer">
            <div className="project-card">
                <div className='projectContent'>
                    <img src={image} alt={name} />
                    <p className="txtNamePrj">{name}</p>
                    <p className="txtDescPrj"><small>{desc}</small></p>
                </div>
            </div>
        </a>        
    )
}

export default ProjectContent;