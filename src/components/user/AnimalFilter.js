import React, { useState } from "react";
import styled from "styled-components";
import Dogs from "./Dogs";
import Cats from "./Cats";

const AnimalFilter = () => {
    const [selectedAnimal, setSelectedAnimal] = useState("dog"); // Default to dogs

    return (
        <Container>
            <ButtonContainer>
                <Button 
                    active={selectedAnimal === "cat"} 
                    onClick={() => setSelectedAnimal("cat")}
                >
                    Cats
                </Button>
                <Button 
                    active={selectedAnimal === "dog"} 
                    onClick={() => setSelectedAnimal("dog")}
                >
                    Dogs
                </Button>
            </ButtonContainer>

            {/* Conditionally Render Component */}
            {selectedAnimal === "dog" ? <Dogs /> : <Cats />}
        </Container>
    );
};

// Styled Components
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    background-color: ${({ active }) => (active ? "#bb7b6b" : "#ddd")};
    color: ${({ active }) => (active ? "white" : "black")};
    transition: 0.3s;

    &:hover {
        background-color: ${({ active }) => (active ? "#a1675a" : "#bbb")};
    }
`;

export default AnimalFilter;
