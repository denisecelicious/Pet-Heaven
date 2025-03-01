import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import cats from "../../data/CatsData";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Cats = ({ filters }) => {
    const navigate = useNavigate();

    const filterCats = cats.filter((cat) => {

        // search filter
        const matchesSearch = filters.search === "" || cat.name.toLowerCase().includes(filters.search.toLowerCase());

        // Gender filter
        const matchesGender = filters.gender === "All" || cat.gender === filters.gender;

        return matchesSearch && matchesGender;
    })

    return (
        <>
            <Title><b>Cats</b></Title>
            <Grid container spacing={3} padding={3}>
                {filterCats.map((cat) => (
                    <Grid item xs={12} sm={6} md={4} key={cat.id}>
                        <Card sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            "&:hover":{
                            cursor: "pointer",
                            transition: "transform 0.3s ease-in-out",
                            transform: "scale(1.05)"
                        }}}
                        onClick={() => navigate(`/animal/${cat.id}`, { state: cat })}
                        >
                            <CardMedia component="img" height="400" image={cat.image} alt={cat.name} style={{ objectFit: 'cover' }} />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h6">{cat.name}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Breed:</strong> {cat.breed}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Gender:</strong> {cat.gender}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Age:</strong> {cat.age}
                                </Typography>
                                <Typography variant="body2">
                                    {cat.description}
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

export default Cats;
