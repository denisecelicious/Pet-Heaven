import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/user/Navbar';
import ReleaseForm from '../../components/user/ReleaseForm';

const Release = () => {

    return (
        <Wrapper>
            <Navbar />
            <br></br>
            <ReleaseForm />
            <br></br>
            <br></br>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: "Poppins", serif;
`

export default Release;