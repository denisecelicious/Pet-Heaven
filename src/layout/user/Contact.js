import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/user/Navbar";
import { Row, Col, Container, Card, Form, Button } from "react-bootstrap";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import Swal from "sweetalert2";

const Contact = () => {

    // Initial form data
    const initialState = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }

    // State to store form data
    const [formData, setFormData] = useState(initialState);

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload

        // Save data to local storage
        localStorage.setItem("enquiryData", JSON.stringify(formData));

        // SweetAlert Notification
        Swal.fire({
            title: "Success!",
            text: "Your message has been sent.",
            icon: "success",
            confirmButtonText: "OK",
        });

        // Reset form fields after submission
        setFormData(initialState);
    };

    return (
        <Wrapper>
            <Navbar />
            <HeroImage />
            <InfoContainer>
                <Title>Contact Us</Title>
                <br></br>
                <Row>
                    <Col>
                        <Title2>Pet Heaven</Title2>
                        <Subtitle>
                            If you have any questions, please dont't hesitate to send us an enquiry
                            and we will try our best to get back to you shortly
                        </Subtitle>
                        <br></br>
                        <div style={{ display: "flex", alignItems: "left", justifyContent: "left", gap: "10px" }}>
                            <div style={{ backgroundColor: "#bb7b6b", padding: "10px", borderRadius: "25px" }}>
                                <EmailIcon style={{ fontSize: "30px", color: "white" }} />
                            </div>
                            <span style={{ color: "#808080", padding: "10px" }}>enquiries@petheaven.org.sg</span>
                        </div>

                        <br></br>

                        <div style={{ display: "flex", alignItems: "left", justifyContent: "left", gap: "10px" }}>
                            <div style={{ backgroundColor: "#bb7b6b", padding: "10px", borderRadius: "25px" }}>
                                <LocalPhoneIcon style={{ fontSize: "30px", color: "white" }} />
                            </div>
                            <span style={{ color: "#808080", padding: "10px" }}>+65 1234 5678</span>
                        </div>

                        <br></br>

                        <div style={{ display: "flex", alignItems: "left", justifyContent: "left", gap: "10px" }}>
                            <div style={{ backgroundColor: "#bb7b6b", padding: "10px", borderRadius: "25px" }}>
                                <PlaceRoundedIcon style={{ fontSize: "30px", color: "white" }} />
                            </div>
                            <span style={{ color: "#808080", padding: "10px" }}>Visit us at: <b>461 Clementi Rd, Singapore 599491</b></span>
                        </div>
                    </Col>
                    <Col>
                        <FormContainer>
                            <Card className="shadow-sm p-4">
                                <Title2>Send Us an Enquiry</Title2>
                                <Form onSubmit={handleSubmit}>
                                    {/* Name */}
                                    <Form.Group controlId="firstName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Your name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <br></br>

                                    {/* Email */}
                                    <Form.Group controlId="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Your email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <br></br>

                                    {/* Email Subject */}
                                    <Form.Group controlId="email">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Your Email Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <br></br>

                                    {/* Message */}
                                    <Form.Group className="mb-3" controlId="message">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={3}
                                            placeholder="Please type your message here"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    {/* Submit Button */}
                                    <Button variant="warning" type="submit" style={{ fontFamily: "Poppins", fontWeight: "500" }}>
                                        Send Message
                                    </Button>
                                </Form>
                            </Card>
                        </FormContainer>
                    </Col>
                </Row>
            </InfoContainer>
            <MapContainer>
                    <iframe
                        title="SIM Global Education Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.744395196308!2d103.77359957562791!3d1.3294065616398458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1080893304bd%3A0xc889e76f4e447e42!2sSIM%20Global%20Education!5e0!3m2!1sen!2ssg!4v1740850824360!5m2!1sen!2ssg"
                    ></iframe>
                </MapContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: "Poppins", serif;
`;

const HeroImage = styled.div`
    background-image: url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    height: 600px; /* Ensure this has px */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 0.5;
    padding: 30px 50px;
    text-align: center;
`;

const FormContainer = styled(Container)`
    flex: 0.5;
    padding: 8px 50px;
    text-align: left;
`

const Title = styled.h1`
    color: #bb7b6b;
`;

const Title2 = styled.h2`
    color: #bb7b6b;
    text-align: left
`;

const Subtitle = styled.p`
    color: #808080;
    text-align: left
`

const MapContainer = styled.div`
    width: 100vw;
    height: 80vh;
    
    iframe {
        width: 100%;
        height: 100%;
        border: none;
    }
`;

export default Contact;