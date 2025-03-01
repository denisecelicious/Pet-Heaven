import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import dogs from "../../data/DogsData";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Dogs = ({ filters }) => {
    const navigate = useNavigate();

    const filteredDogs = dogs.filter((dog) => {

        // search filter
        const matchesSearch = filters.search === "" || dog.name.toLowerCase().includes(filters.search.toLowerCase());

        // Gender filter
        const matchesGender = filters.gender === "All" || dog.gender === filters.gender;

        return matchesSearch && matchesGender;
    })
    
    return (
        <>
        <Title><b>Dogs</b></Title>
        <Grid container spacing={3} padding={3}>
            {filteredDogs.map((dog) => (
                <Grid item xs={12} sm={6} md={4} key={dog.id}>
                    <Card sx={{ 
                        height: "100%", 
                        display: "flex", 
                        flexDirection: "column", 
                        "&:hover":{
                            cursor: "pointer",
                            transition: "transform 0.3s ease-in-out",
                            transform: "scale(1.05)"
                        },
                    }}
                    onClick={() => navigate(`/animal/${dog.id}`, { state: dog })}
                    >
                        <CardMedia component="img" height="400" image={dog.image} alt={dog.name} />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h6" style={{ fontFamily: "Poppins" }}>{dog.name}</Typography>
                            <Typography variant="body2" color="textSecondary" style={{ fontFamily: "Poppins" }}>
                                <strong>Breed:</strong> {dog.breed}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" style={{ fontFamily: "Poppins" }}>
                                <strong>Gender:</strong> {dog.gender}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" style={{ fontFamily: "Poppins" }}>
                                <strong>Age:</strong> {dog.age}
                            </Typography>
                            <Typography variant="body2" style={{ fontFamily: "Poppins" }}>
                                {dog.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
        </>
    );
};

const Title = styled.h1`
    color: #bb7b6b;
    padding-top: 15px;
`

export default Dogs;
