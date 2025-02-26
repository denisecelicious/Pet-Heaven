import React from "react";
import Navbar from "../../components/user/Navbar";
import styled from "styled-components";
import AnimalFilter from "../../components/user/AnimalFilter";

const Adopt = () => {
    return (
        <Container>
            <Navbar />
            <HeroImage />
            <br/>
            <InfoContainer>
                <Title>Adoption Gallery</Title>
                <Description>
                    Thank you for your interest in adopting an animal!
                </Description>
                <Description>
                    Find your Furry Friend today!
                </Description>
                <AnimalFilter/>
            </InfoContainer>
        </Container>
    )
}

const Container = styled.div`
    font-family: "Poppins", serif;
`;

const HeroImage = styled.div`
    background-image: url('https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
    height: 600px; /* Ensure this has px */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

const InfoContainer = styled.div`
    flex: 0.5;
    padding: 0px 50px;
    text-align: center;
`;

const Title = styled.h1`
    color: #bb7b6b;
`;

const Description = styled.p`
    font-weight: bold;
`;



export default Adopt;