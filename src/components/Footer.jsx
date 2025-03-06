import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/leetcode-svgrepo-com.svg";
import { useUserContext } from './contextAPI';

export const Footer = () => {

  const { scrolled } = useUserContext();

  return (
    <>
      <footer className="footer m-2">
        <Container>
          <Row className={scrolled ? "animate2" : "show-animate2"}>
            <Col size={12} sm={6} md={4} lg={4} xs={12} xl={4} xxl={4} className="text-center text-sm-start mt-3">
              <a href="/home" className="text-decoration-none text-info"><h1 >Sanjay Kumar R A</h1></a>
              <span>AIML Engineer</span><br />
              <span>Software Developer</span><br />
              <span>Backend Developer</span><br />
              <span>Full Stack Developer</span>
            </Col>
            <Col size={12} sm={6} md={4} lg={4} xs={12} xl={4} xxl={4} className="text-center m-auto p-2">
              <div className="social-icon d-inline">
              <a href="https://github.com/Sanjay-Kumar-R-A" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Github" /></a>
              <a href="https://leetcode.com/u/Sanjaykumarsk/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="LeetCode" /></a>
              <a href="https://www.linkedin.com/in/sanjay-kumar-r-a-51222b265/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              </div>
            </Col>
            <Col size={12} sm={12} md={4} lg={4} xs={12} xl={4} xxl={4} className="text-center m-auto">
              <p>Phone : 9345323789</p>
              <p>Official Mail id: rasanjaykumarsk@gmail.com</p>
            </Col>
            <Col className="text-center text-secondary">
              &copy; Copyright 2025 sanjay kumar
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}
