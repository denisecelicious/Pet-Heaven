import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Dogs = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDogImages = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://dog.ceo/api/breeds/image/random/9");
            setImages(response.data.message); // API returns an array
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch dog images.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDogImages();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <Container>
            <Title>Dog Gallery</Title>
            <ImageGrid>
                {images.map((url, index) => (
                    <AnimalImage key={index} src={url} alt="Dog" />
                ))}
            </ImageGrid>
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    text-align: center;
    margin: 20px;
`;

const Title = styled.h2`
    font-family: "Poppins", serif;
`;

const ImageGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
`;

const AnimalImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
`;

export default Dogs;
