import React from 'react';
import styled from 'styled-components';
import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

const VolunteerSection = () => {

    // Initial form data
    const initialState = {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        email: "",
        contact: "",
        reason: "",
    };

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
        localStorage.setItem("volunteerFormData", JSON.stringify(formData));

        // SweetAlert Notification
        Swal.fire({
            title: "Success!",
            text: "Your application has been submitted.",
            icon: "success",
            confirmButtonText: "OK",
        });

        // Reset form fields after submission
        setFormData(initialState);
    };

    return (
        <Wrapper>
            <Title>
                <b>Volunteer</b> as a Pet Heaven Buddy
            </Title>
            <Subtitle>Enter your details below</Subtitle>
            <Container className="p-5">
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        {/* First Name */}
                        <Col md={6}>
                            <Form.Group controlId="firstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter first name"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        {/* Last Name */}
                        <Col md={6}>
                            <Form.Group controlId="lastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter last name"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        {/* Date of Birth */}
                        <Col md={6}>
                            <Form.Group controlId="dob">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        {/* Gender */}
                        <Col md={6}>
                            <Form.Group controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        {/* Email */}
                        <Col md={6}>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>

                        {/* Contact Number */}
                        <Col md={6}>
                            <Form.Group controlId="contact">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter phone number"
                                    name="contact"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    {/* Reason for Volunteering */}
                    <Form.Group className="mb-3" controlId="volunteerReason">
                        <Form.Label>What made you decide to volunteer?</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Share your reasons"
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button variant="warning" type="submit">
                        Apply to Volunteer
                    </Button>
                </Form>
            </Container>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    font-family: "Poppins", serif;
    width: 60%;
    margin: auto;
`;

const Title = styled.h2`
    color: #bb7b6b;
`;

const Subtitle = styled.p`
    color: #808080;
`;



export default VolunteerSection;