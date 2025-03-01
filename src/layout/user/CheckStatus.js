import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "../../components/user/Navbar";
import Swal from "sweetalert2";
import { Container, Form, Button, Card, InputGroup } from "react-bootstrap";
import PendingIcon from '@mui/icons-material/Pending';

const CheckStatus = () => {
    const [searchID, setSearchID] = useState("");
    const [formData, setFormData] = useState(null);
    const [formType, setFormType] = useState(""); // "Adoption" or "Release"

    // Handle ID input change
    const handleChange = (event) => {
        setSearchID(event.target.value);
    };

    // Handle Search
    const handleSearch = () => {
        const releaseData = JSON.parse(localStorage.getItem("releasePetData"));
        const adoptData = JSON.parse(localStorage.getItem("adoptions")) || [];

        let foundForm = null;
        let type = "";

        // Check release form
        if (releaseData && releaseData.releaseFormID === searchID) {
            foundForm = releaseData;
            type = "Release Form";
        }

        // Search in adoption forms (since it's an array)
        if (!foundForm && adoptData.length > 0) {
            foundForm = adoptData.find((form) => form.adoptFormID === searchID);
            if (foundForm) type = "Adoption Form";
        }

        if (foundForm) {
            setFormData(foundForm);
            setFormType(type);
        } else {
            Swal.fire({
                title: "Error",
                text: "No form found with the provided Form ID.",
                icon: "error",
            });
            setFormData(null);
            setFormType("");
        }
    };

    // Handle Reset
    const handleReset = () => {
        setSearchID("");
        setFormData(null);
        setFormType("");
    };

    return (
        <Wrapper>
            <Navbar />
            <Container className="mt-5" style={{ maxWidth: "500px" }}>
                <Card className="shadow-sm p-4">
                    <h4 className="text-center mb-3" style={{ color: "#bb7b6b", fontFamily: "Poppins" }}>Check Adopt/Release Form Status</h4>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontFamily: "Poppins" }}>Enter Form ID:</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Form ID"
                                    value={searchID}
                                    onChange={handleChange}
                                    required
                                />
                                <Button variant="outline-secondary" onClick={handleReset}>
                                    ✖
                                </Button>
                            </InputGroup>
                        </Form.Group>
                        <Button variant="primary" className="w-100" onClick={handleSearch} style={{ fontFamily: "Poppins", fontWeight: "500" }}>
                            Search
                        </Button>
                    </Form>

                    {/* Display form details if found */}
                    {formData && (
                        <Card className="mt-4 p-3">
                            <h5 className="text-center">{formType}</h5>
                            <hr />
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                                <PendingIcon style={{ fontSize: "30px", color: "#FFA500" }} />
                                <span style={{ color: "#FFA500", fontWeight: "500" }}>Processing application...</span>
                            </div>
                            <br></br>
                            {formData.petName && <p><strong>Pet Name:</strong> {formData.petName}</p>}
                            {formData.petBreed && <p><strong>Breed:</strong> {formData.petBreed}</p>}

                            {/* Display pet image */}
                            {formData.petImage && (
                                <img
                                    src={formData.petImage}
                                    alt="Pet"
                                    className="img-fluid rounded mt-2"
                                    style={{ maxHeight: "300px", objectFit: "cover" }}
                                />
                            )}
                        </Card>
                    )}

                </Card>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

export default CheckStatus;
