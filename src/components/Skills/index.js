import './skills.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SkillContent from './skill';

const SkillBox = (props) => {
    return (
        <Container id="skillUp" style={{marginTop: "100px"}}>
            <Row>
                <Col>
                    <h3 style={{textAlign: "center"}}>Habilidades</h3>
                    <div className="boxSkill">
                    {
                        (props.skills.map((skill) => {
                            return (
                                <SkillContent key={skill.name} name={skill.name} image={skill.logo} />
                            )
                        }))
                    }
                    </div>
                </Col>
            </Row>
        </Container>
       
    )
};

export default SkillBox;