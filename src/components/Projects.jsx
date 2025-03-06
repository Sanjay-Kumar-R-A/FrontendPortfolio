import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard, MernProjectsCard, JsGamesCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useUserContext } from './contextAPI';

export const Projects = () => {

  const { projects, MERNprojects, scrolled, JsGames } = useUserContext();

  return (
    <>
      <section className="project" id="project">
        <Container>
          <Row className={scrolled ? "animateSkill" : "show-animateSkill"}>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2 className="titleProject">Projects</h2>
                    <p></p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="w-100 nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item> <Nav.Link eventKey="first">Frontend</Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link eventKey="second">Backend</Nav.Link> </Nav.Item>
                        <Nav.Item> <Nav.Link eventKey="third">Full Stack</Nav.Link> </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {MERNprojects.map((project, index) => { return (<MernProjectsCard key={index} {...project} />) })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {projects.map((project, index) => { return (<ProjectCard key={index} {...project} />) })}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <Row>
                            {JsGames.map((project, index) => { return (<JsGamesCard key={index} {...project} />) })}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="img"></img>
      </section>
    </>
  )
}
