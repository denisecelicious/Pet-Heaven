import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../components/user/Navbar";
import { Container, Card, Row, Col, Form, Button } from "react-bootstrap";
import Avatar from '@mui/material/Avatar';
import ProfileIcon from '../../assets/user/profile.png';
import Accordion from 'react-bootstrap/Accordion';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";
import PendingIcon from '@mui/icons-material/Pending';

const Profile = () => {

    // state to store user details
    const [userDetails, setUserDetails] = useState({
        email: "",
        firstName: "",
        lastName: "",
        profileImage: null
    })

    const [tempProfileImage, setTempProfileImage] = useState(null);
    const [pendingApplications, setPendingApplications] = useState([]);

    // Retrieve user details from sessionStorage
    useEffect(() => {
        const storedUser = JSON.parse(sessionStorage.getItem("loggedInUser"));
        const existingAdoptions = JSON.parse(localStorage.getItem("adoptions")) || [];

        if (storedUser) {
            setUserDetails(storedUser);
            const userApplications = existingAdoptions.filter(app => app.email === storedUser.email);
            setPendingApplications(userApplications);
        }
    }, []);

    // Handle input change
    const handleChange = (e) => {
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    };

    // Handle drag and drop
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            uploadImage(file);
        }
    };

    // Handle file select
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            uploadImage(file);
        }
    };

    // Upload image function
    const uploadImage = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setTempProfileImage(reader.result); // Store in temp state instead of userDetails
        };
        reader.readAsDataURL(file);
    };

    // // Remove image
    // const removeImage = () => {
    //     setUserDetails({ ...userDetails, profileImage: null });
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        Swal.fire({
            title: 'Are you sure you want to update your profile?',
            showCancelButton: true,
            confirmButtonText: 'Confirm',
            denyButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Update user details state
                setUserDetails(prev => {
                    const updatedDetails = {
                        ...prev,
                        profileImage: tempProfileImage // Update only the profile image
                    };
    
                    // Store updated user details in session storage
                    sessionStorage.setItem("loggedInUser", JSON.stringify(updatedDetails));
    
                    return updatedDetails; // Ensure state is updated properly
                });
    
                Swal.fire('Profile Updated!', '', 'success').then(() => {
                    window.location.reload(); // Refresh after successful update
                });
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
            }
        });
    };
    




    return (
        <Wrapper>
            <Navbar />
            <Container className="mt-5" style={{ maxWidth: "1000px" }}>
                <Card className="shadow-sm p-4">
                    <Row className="justify-content-md-center">
                        <Col xs lg="3">
                            <Avatar
                                src={userDetails.profileImage || ProfileIcon}
                                alt="Profile Pic"
                                style={{ height: "120px", width: "120px" }}
                            />
                        </Col>
                        <Col xs={3}>
                            <Name>{userDetails.firstName} {userDetails.lastName}</Name>
                            <Email>{userDetails.email}</Email>
                        </Col>
                    </Row>
                    <br></br>
                    {/*  show pending adopt applications for user */}
                    {pendingApplications.length > 0 && (
                        <div className="mt-4">
                            <Accordion defaultActiveKey={null}>
                                {pendingApplications.map((application, index) => (
                                    <Accordion.Item eventKey={index.toString()} key={index}>
                                        <Accordion.Header>Pending Applications</Accordion.Header>
                                        <Accordion.Body>
                                            <div style={{ display: "flex", alignItems: "left", justifyContent: "left", gap: "8px" }}>
                                                <PendingIcon style={{ fontSize: "30px", color: "#FFA500" }} />
                                                <span style={{ color: "#FFA500", fontWeight: "500" }}>Processing application...</span>
                                            </div>
                                            <img
                                                src={application.petImage}
                                                alt="Pet"
                                                className="img-fluid rounded mt-2"
                                                style={{ maxHeight: "300px", objectFit: "cover" }}
                                            />
                                            <p></p>
                                            <p><strong>Application ID:</strong> {application.adoptFormID}</p>
                                            <p><strong>Name:</strong> {application.petName}</p>
                                            <p><strong>Breed:</strong> {application.petBreed}</p>
                                            <p><strong>Gender:</strong> {application.petGender}</p>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    )}

                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Update Profile</Accordion.Header>
                            <Accordion.Body>
                                <Form onSubmit={handleSubmit}>
                                    {/* Drag and Drop Image Upload */}
                                    <Form.Group className="mb-3 text-center">
                                        <Form.Label>Profile Picture</Form.Label>
                                        <div
                                            onDrop={handleDrop}
                                            onDragOver={(e) => e.preventDefault()}
                                            style={{
                                                border: "2px dashed #aaa",
                                                borderRadius: "10px",
                                                padding: "20px",
                                                cursor: "pointer",
                                                background: "#f8f9fa",
                                            }}
                                            className="mb-3"
                                        >
                                            <p>Drag & drop an image here, or click to select a file</p>
                                            <input type="file" accept="image/*" onChange={handleFileSelect} hidden id="fileInput" />
                                            <label htmlFor="fileInput" className="btn btn-outline-secondary">Select File</label>
                                        </div>

                                        {/* Image Preview with Remove Button */}
                                        {tempProfileImage && (
                                            <div className="text-center">
                                                <img
                                                    src={tempProfileImage}
                                                    alt="New Profile"
                                                    style={{ width: "120px", height: "120px", borderRadius: "50%" }}
                                                    className="mb-2"
                                                />
                                                <br />
                                                <Button variant="danger" size="sm" onClick={() => setTempProfileImage(null)}>
                                                    <DeleteIcon />
                                                </Button>
                                            </div>
                                        )}
                                    </Form.Group>

                                    {/* First Name Input */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={userDetails.firstName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    {/* Last Name Input */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={userDetails.lastName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    {/* Email Input */}
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            value={userDetails.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    {/* Submit Button */}
                                    <Button variant="primary" type="submit">
                                        Save Changes
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div``;

const Name = styled.h5`
    font-family: "Poppins", serif;
    padding-top: 30px
`;

const Email = styled.p`
    font-family: "Poppins", serif;
`;



export default Profile;