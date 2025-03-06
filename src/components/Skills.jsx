import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Row } from "react-bootstrap";
import Cart from './Cart';
import { useUserContext } from './contextAPI';

export const Skills = () => {

    const { scrolled, skillsLists } = useUserContext();

    return (
        <>
            <section className="p-2 m-2 d-flex" id="skills">
                <Row>
                    <Col xl={12} sm={12} md={12} lg={12} xxl={12} className={scrolled ? "animateSkill" : "show-animateSkill"}>
                        <div className="skill-bx wow zoomIn custom-scroll">
                            <h2 className='titleTech'>Technologies and Tools</h2>
                            <p>
                                <li>Front-End Development: Proficient in HTML, CSS, and JavaScript, I create stunning and responsive user interfaces that leave a lasting impression.</li>
                                <li>Back-End Development: Node.js , Java , Python I build robust and efficient server-side solutions that handle complex logic and data management.</li>
                                <li>Database Management: Skilled in working with SQL and NoSQL databases like MySQL and MongoDB ensuring data integrity and seamless performance.</li>
                                <li>Programming Languages : Java (dsa), Pyhton (AI), Javascript(web development) </li>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='flex flex-wrap gap-5 justify-center mt-1'>
                            {
                                skillsLists.map((skill, index) => {
                                    return (
                                        <Cart key={index}  {...skill} />
                                    )
                                })
                            }
                        </div>
                    </Col>
                </Row >
                <img className="background-image-left" src={colorSharp} alt="bg" />
            </section >
        </>
    )
}
