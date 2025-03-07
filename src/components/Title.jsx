import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";
import navIcon3 from "../assets/img/leetcode-svgrepo-com.svg";
import { HashLink } from 'react-router-hash-link';
import resume from '../assets/img/Resume.pdf';
import { BsArrowDownSquareFill } from "react-icons/bs";
import { useUserContext } from './contextAPI';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export default function Title() {
    const { scrolled } = useUserContext();

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click to download
        </Tooltip>
    );

    return (
        <>
            <section id="home" className='banner m-auto' style={{ background: "rgba(192,192,192,0)", minHeight: "100vh" }}>
                <Container className='d-flex justify-content-center align-items-center text-center'>
                    <Row className={scrolled ? "animate" : "show-animate"}>
                        <Col xs={12} md={12} xl={12} sm={12} lg={12}>
                            <div className='mt-4'>
                                <h1 className='text-center title' style={{ color: "white" }}>
                                    I'm Sanjay Kumar R A 
                                </h1>
                                <h3 className='text-center title' style={{ color: "white" }}>
                                   Artificial Intelligence and Machine Learning Engineer
                                </h3>

                                {/* Social Icons */}
                                <div className="social-icon mt-3 text-center d-inline">
                                    <a href="https://github.com/Sanjay-Kumar-R-A" target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon2} alt="Github" />
                                    </a>
                                    <a href="https://leetcode.com/u/Sanjaykumarsk/" target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon3} alt="LeetCode" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/sanjay-kumar-r-a-51222b265/" target="_blank" rel="noopener noreferrer">
                                        <img src={navIcon1} alt="LinkedIn" />
                                    </a>
                                </div>

                                {/* Resume & Contact Buttons */}
                                <div className='d-flex justify-content-center align-items-center mt-4'>
                                    <a className='text-decoration-none' href={resume} download="resume">
                                        <OverlayTrigger
                                            placement="left"
                                            delay={{ show: 250, hide: 400 }}
                                            overlay={renderTooltip}
                                        >
                                            <Button className='d-flex m-2' variant="outline-primary">
                                                Resume <BsArrowDownSquareFill />
                                            </Button>
                                        </OverlayTrigger>
                                    </a>
                                    <HashLink to='#connect' className='text-decoration-none'>
                                        <Button className='m-2' variant="outline-info">Contact</Button>
                                    </HashLink>
                                </div>

                                {/* About Me Section (Added Below Resume & Contact) */}
                                <div className='text-center custom-scroll font-mono mt-5 p-3' id='about'>
                                    <h1 className='font-sans'>About Me</h1>
                                    <p>
                                        Hello! I'm Sanjay Kumar, a passionate MERN stack developer with experience in
                                        building full-stack web applications using MongoDB, Express.js, React, JAVA and Node.js.
                                        I have a strong foundation in both frontend and backend development, allowing me
                                        to create dynamic and responsive web applications that meet user needs and business goals.
                                    </p>
                                    <p>
                                        I'm constantly seeking new challenges and opportunities to expand my knowledge and skills in web development.
                                        I enjoy learning about emerging technologies and trends to stay updated in the fast-paced world of tech.
                                    </p>
                                
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}
