import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Cats = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCatImages = async () => {
        try {
            setLoading(true);
            const response = await axios.get("https://api.thecatapi.com/v1/images/search?limit=8");
            setImages(response.data); // API returns an array
            setLoading(false);
        } catch (err) {
            setError("Failed to fetch cat images.");
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCatImages();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <Container>
            <Title>Cat Gallery</Title>
            <ImageGrid>
                {images.map((image) => (
                    <AnimalImage key={image.id} src={image.url} alt="Cat" />
                ))}
            </ImageGrid>
        </Container>
    );
};

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

export default Cats;
