import React, { useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import Dogs from "../../components/user/Dogs";
import Cats from "../../components/user/Cats";
import SearchIcon from '@mui/icons-material/Search';

const AnimalFilter = () => {
    const [filters, setFilters] = useState({
        animalType: "dog", // Default to dogs
        search: "",
        category: "All",
        age: "All",
        gender: "All",
    });

    // Handle input changes
    const handleFilterChange = (event) => {
        setFilters({
            ...filters,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Box textAlign="center" marginTop={3}>
            {/* Filter Bar */}
            <Box 
                display="flex" 
                justifyContent="center" 
                gap={2} 
                flexWrap="wrap" 
                padding={2} 
                sx={{ background: "#f5f5f5", borderRadius: 2 }}
            >
                {/* Search Input */}
                <TextField 
                    label="Search..." 
                    variant="outlined" 
                    name="search"
                    value={filters.search}
                    onChange={handleFilterChange}
                    sx={{ width: 200 }}
                    slotProps={{
                        input: {
                            startAdornment: <SearchIcon position="start" />
                        }
                    }}
                />

                {/* Animal Type Dropdown */}
                <TextField
                    select
                    label="Animal Type"
                    name="animalType"
                    value={filters.animalType}
                    onChange={handleFilterChange}
                    sx={{ width: 150 }}
                >
                    <MenuItem value="dog">Dogs</MenuItem>
                    <MenuItem value="cat">Cats</MenuItem>
                </TextField>

                {/* Gender Dropdown */}
                <TextField
                    select
                    label="Gender"
                    name="gender"
                    value={filters.gender}
                    onChange={handleFilterChange}
                    sx={{ width: 150 }}
                >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                </TextField>
            </Box>

            {/* Display Animal List Based on Filters */}
            {filters.animalType === "dog" ? <Dogs filters={filters} /> : <Cats filters={filters} />}
        </Box>
    );
};

export default AnimalFilter;
