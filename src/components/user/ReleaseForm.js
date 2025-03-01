import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import Swal from "sweetalert2";
import DeleteIcon from '@mui/icons-material/Delete';

const ReleaseForm = () => {

    const initialState = {
        petImage: null,
        petImageName: "",
        petName: "",
        gender: "",
        petBreed: "",
        species: "",
        age: "",
        additionalDetails: "",
        ownerName: "",
        email: "",
        contactNumber: "",
        reason: "",
    }

    const [formData, setFormData] = useState(initialState);

    // Handle text input changes
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    // Handle Image Upload (Drag & Drop or Select File)
    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({
                    ...prev,
                    petImage: reader.result, // Store image data
                    petImageName: file.name, // Store file name
                }));
                //localStorage.setItem("petImage", reader.result);
                //localStorage.setItem("petImageName", file.name);
            };
            reader.readAsDataURL(file);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*",
        multiple: false,
    });

    // Function to remove selected image
    const handleRemoveImage = () => {
        setFormData({
            ...formData,
            petImage: null,
            petImageName: "", // Clear file name
        });
    };


    // Handle Form Submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // generate unique ID with RF-<timestamp>
        const releaseFormID = `RF-${Date.now()}`;
        // Save form data with the generated ID
        const formWithID = { ...formData, releaseFormID};
        localStorage.setItem("releasePetData", JSON.stringify(formWithID));

        // SweetAlert Notification
        Swal.fire({
            title: "Success!",
            html: `
                <p>Pet details submitted successfully!</p>
                <p><strong>Your Release Form ID:</strong> <span id="formID">${releaseFormID}</span></p>
                <button id="copyBtn" style="padding: 8px 12px; border: none; background: #007bff; color: white; border-radius: 5px; cursor: pointer;">
                    Copy ID
                </button>
            `,
            icon: "success",
            confirmButtonText: "OK",
            didOpen: () => {
                // Select the copy button after SweetAlert renders
                document.getElementById("copyBtn").addEventListener("click", () => {
                    const formIDText = document.getElementById("formID").innerText;
        
                    // Copy to clipboard
                    navigator.clipboard.writeText(formIDText).then(() => {
                        Swal.fire({
                            title: "Copied!",
                            text: "Release Form ID copied to clipboard.",
                            icon: "success",
                            timer: 2000,
                            showConfirmButton: false,
                        });
                    });
                });
            },
        });
        
        
        // Reset form fields after submission
        setFormData(initialState);
    };

    return (
        <Container className="mt-4">
            <Card className="p-4 shadow">
                <h2 className="text-center mb-4" style={{ color: "#bb7b6b" }}>Release A Pet</h2>

                <Form onSubmit={handleSubmit}>
                    {/* Drag & Drop Image Upload */}
                    <div
                        {...getRootProps()}
                        className="p-3 text-center mb-3"
                        style={{
                            cursor: "pointer",
                            border: "2px dotted #333", // Dotted Border
                            borderRadius: "8px", // Rounded corners
                            fontFamily: "Poppins", // Custom Font
                            padding: "20px",
                            color: "#555", // Muted Text Color
                        }}
                    >
                        <input {...getInputProps()} />
                        <p>Drag & drop an image here, or click to select a file</p>
                    </div>


                    {/* Display Selected File */}
                    {formData.petImage && (
                        <div className="d-flex align-items-center gap-3 p-3 border bg-dark rounded text-light">
                            {/* Image Preview */}
                            <img src={formData.petImage} alt="Pet" style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }} />

                            {/* File Name */}
                            <p className="m-0 text-white">
                                <strong>File Selected:</strong> <span className="text-warning">{formData.petImageName}</span>
                            </p>

                            {/* Delete Button */}
                            <Button variant="danger" className="rounded-circle p-2" onClick={handleRemoveImage}>
                                <DeleteIcon />
                            </Button>
                        </div>
                    )}

                    <br></br>

                    {/* Pet Details */}
                    <h5 style={{ color: "#bb7b6b", fontWeight: 600 }}>Animal Details</h5>
                    <Form.Group className="mb-2">
                        <Form.Label>Pet Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="petName"
                            value={formData.petName}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group className="mb-2">
                                <Form.Label>Gender</Form.Label>
                                <Form.Select name="gender" value={formData.gender} onChange={handleChange} required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-2">
                                <Form.Label>Species</Form.Label>
                                <Form.Select name="species" value={formData.species} onChange={handleChange} required>
                                    <option value="">Select Species</option>
                                    <option value="Dog">Dog</option>
                                    <option value="Cat">Cat</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-2">
                        <Form.Label>Breed</Form.Label>
                        <Form.Control type="text" name="petBreed" value={formData.petBreed} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-2">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" name="age" value={formData.age} onChange={handleChange} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Additional Pet Details</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Share details about your pet that prospective owners should know"
                            rows={3}
                            name="additionalDetails"
                            value={formData.additionalDetails}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    {/* Owner Details */}
                    <h5 style={{ color: "#bb7b6b", fontWeight: 600 }}>Your Details</h5>
                    <Form.Group className="mb-2">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name="ownerName" value={formData.ownerName} onChange={handleChange} required />
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group className="mb-2">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-2">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>What made you decide to release your pet?</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="reason"
                            value={formData.reason}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>

                    {/* Submit Button */}
                    <Button variant="warning" type="submit" style={{ fontFamily: "Poppins", fontWeight: "500" }}>
                        Submit
                    </Button>
                </Form>
            </Card>
        </Container>
    );
};

export default ReleaseForm;
