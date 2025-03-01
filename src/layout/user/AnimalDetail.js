import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Container, Typography } from "@mui/material";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import Navbar from "../../components/user/Navbar";
import Swal from "sweetalert2";

const AnimalDetail = () => {
    const initialState = {
        fullName: "",
        email: "",
        phoneno: "",
        gender: "",
        residence: "",
        reason: ""
    };

    // handle store form data
    const [formData, setFormData] = useState(initialState);

    // handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Save to localStorage
        const existingAdoptions = JSON.parse(localStorage.getItem("adoptions")) || [];
        const updatedAdoptions = [...existingAdoptions, formData];
        localStorage.setItem("adoptions", JSON.stringify(updatedAdoptions));

        // SweetAlert Notification
        Swal.fire({
            title: "Success!",
            text: "Your application has been submitted successfully!",
            icon: "success",
            confirmButtonText: "OK",
        });

        // Reset form fields after submission
        setFormData(initialState);
    };

    // Get animal details from state
    const { state: animal } = useLocation();

    if (!animal) {
        return <Typography variant="h5">Animal not found</Typography>;
    }

    return (
        <Wrapper>
            <Navbar />
            <Container className="mt-5">
                <Card className="p-4 shadow-lg">
                    <Title>Meet {animal.name}, the {animal.breed}</Title>
                    {/* Animal Details */}
                    <div className="text-center">
                        <img src={animal.image} alt={animal.name} className="img-fluid rounded" style={{ maxHeight: "300px" }} />
                        <h5 className="mt-3"><strong>Name: </strong>{animal.name}</h5>
                        <p><strong>Breed:</strong> {animal.breed}</p>
                        <p><strong>Gender:</strong> {animal.gender}</p>
                        <p>{animal.description}</p>
                    </div>

                    <br></br>

                    {/* Adoption Form */}
                    <h3 className="mt-4 text-center" style={{ color: "#bb7b6b" }}>Apply to Adopt <b>{animal.name}</b></h3>
                    <Form className="mt-3" onSubmit={handleSubmit}>
                        {/* Full Name */}
                        <Form.Group className="mb-3">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Full Name"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>

                        {/* Email */}
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required />
                        </Form.Group>

                        {/* Phone Number */}
                        <Form.Group className="mb-3">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="Phone Number"
                                name="phoneno"
                                value={formData.phoneno}
                                onChange={handleChange}
                                required />
                        </Form.Group>

                        {/* Select Gender */}
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </Form.Select>
                        </Form.Group>

                        {/* Select Residence Type */}
                        <Form.Group className="mb-3">
                            <Form.Label>Residence Type</Form.Label>
                            <Form.Select
                                name="residence"
                                value={formData.residence}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select your residence type</option>
                                <option value="HDB">HDB</option>
                                <option value="Condominium">Condominium</option>
                                <option value="Landed">Landed</option>
                                <option value="Rental">Rental</option>
                            </Form.Select>
                        </Form.Group>

                        {/* Adoption Reason */}
                        {/* Reason for Adoption */}
                        <Form.Group className="mb-3">
                            <Form.Label>Why do you want to adopt?</Form.Label>
                            <Form.Control as="textarea" rows={4} name="reason" required value={formData.reason} onChange={handleChange} />
                        </Form.Group>

                        {/* Submit Button */}
                        <Button variant="warning" type="submit" style={{ fontFamily: "Poppins", fontWeight: "500" }}>
                            Apply to Adopt
                        </Button>
                    </Form>
                </Card>
                <br></br>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-family: "Poppins", serif;
    width: 50%
    margin: auto;
`;

const Title = styled.h1`;
    color: #bb7b6b;
    text-align: center;
    font-weight: 600;
`



export default AnimalDetail;
