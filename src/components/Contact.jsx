import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useUserContext } from './contextAPI';
import axios from 'axios';
import { useState } from 'react';

export const Contact = () => {

  const { formDetails, buttonText, status, onFormUpdate } = useUserContext();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formDetails.Name,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message
    };

    try {
      setLoading(true);
      const response = await axios.post("https://backendportfolio-80da.onrender.com/api/inquiry/contact", payload);
      console.log("Response:", response.data);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                }
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h2 className="titleContact">Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                      <Row id="userForm">
                        <Col size={12} sm={6} className="px-1">
                          <input id="Name" type="text" name="Name" required value={formDetails.Name} placeholder="Name" onChange={onFormUpdate} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input id="email_address" type="email" name="email" required value={formDetails.email} placeholder="Email Address" onChange={onFormUpdate} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input id="phone_no" type="tel" name="phone" required value={formDetails.phone} placeholder="Phone No." onChange={onFormUpdate} />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea id="message" rows="6" name="message" required value={formDetails.message} placeholder="Message" onChange={onFormUpdate}></textarea>
                          <button type="submit" disabled={loading}>
                            <span>{loading ? "Sending..." : buttonText}</span>
                          </button>
                          <p className={status.success === false ? "text-danger" : "text-info"}>{status.message}</p>
                        </Col>
                      </Row>
                    </form>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
