import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/IMG_1455.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useUserContext } from './contextAPI';
import resume from '../assets/img/Resume.pdf'
import { BsArrowDownSquareFill } from "react-icons/bs";
import Button from 'react-bootstrap/Button';


export const Banner = () => {

  const { text, scrolled } = useUserContext();

  return (
    <>
      <section className="banner">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} lg={6} md={6} xl={7} className={scrolled ? "animate1" : "show-animate1"}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <span className="m-3 p-2" style={{ "fontSize": "35px" }}><a className="text-warning" href={resume} download="resume"><BsArrowDownSquareFill />
                    </a></span>
                    <h1>{`Hi! I'm Sanjay Kumar R A`} <span className="txt-rotate"><span className="wrap text-info">{text}</span></span></h1>
                    <p>
                      👋 Hello! I'm <span className="text-warning">Sanjay Kumar R A </span>, a passionate and detail-oriented Web Application Developer with a track record of creating powerful, secure, and user-friendly web solutions. I take pride in crafting robust applications that elevate businesses and empower users.
                    </p>
                    <b className=" text-success">Enthusiastic problem-solver driven by innovation and learning. Proficient in AI tools, with good 
                    communication and teamwork skills, ready to deliver impactful results.</b>
                    <button onClick={() => console.log('connect')}>Let&#39;s Connect <ArrowRightCircle size={25} /></button>
                  </div>}
              </TrackVisibility>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={5} className="mt-4">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <div className="bannerbox m-auto">
                      <div className="bannerimg">
                        <img className="m-auto p-auto" src={headerImg} alt="Header Img" />
                        <h2>offer closes soon</h2>
                        <Button variant="outline-primary">
                          <a href="/" className="text-white text-decoration-none">Hire Me</a>
                        </Button>
                      </div>
                    </div>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
