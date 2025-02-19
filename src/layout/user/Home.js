import React from 'react';
import Navbar from "../../components/user/Navbar"
import Slider from '../../components/user/Slider';
import styled from 'styled-components';

const Home = () => {
    return (
        <Container>
            <Navbar />
            <Slider />
        </Container>
    )
}

const Container = styled.div``;

export default Home;