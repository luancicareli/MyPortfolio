import './projects.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectContent from './project';

const ProjectBox = (props) => {
    return (
        <Container style={{marginTop: "100px"}}>
            <Row>
                <Col>
                    <h3 style={{textAlign: "center"}}>Projetos</h3>
                    <div id="projects" className="projectBox">
                    {
                        (props.projects.map((project) => {
                            return (
                                <ProjectContent key={project.name} name={project.name} desc={project.desc} image={project.logo} />
                            )
                        }))
                    }
                    </div>
                </Col>
            </Row>
        </Container>
       
    )
};

export default ProjectBox;