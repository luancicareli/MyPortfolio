import './projects.css'

const ProjectContent = ({ name, image, desc }) => {
    return (
        <>
            <a href='#.' target="_blank" rel="noopener noreferrer">
                <div className='projectContent'>
                    <img src={image} alt={name} />
                    <p className="txtNamePrj">{name}</p>
                    <p className="txtDescPrj"><small>{desc}</small></p>
                </div>
            </a>
        </>
        
    )
}

export default ProjectContent;