import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/user/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SupportImg from '../../assets/user/volunteer.jpg';
import DonateImg from '../../assets/user/donate.jpg';
import { useRef } from 'react';
import DonateSection from '../../components/user/DonateSection';
import VolunteerSection from '../../components/user/VolunteerSection';

const SupportUs = () => {
    const volunteerRef = useRef();
    const donateRef = useRef();

    return (
        <Wrapper>
            <Navbar />
            <br />
            <FullWidthContainer fluid>
                <Row>
                    <Col xs={6} className="p-0">
                        <ImageContainer>
                            <DonateImage src={DonateImg} alt="Donate" />
                            <Overlay />
                            <TextContent>
                                <h2>Support Our Cause</h2>
                                <p>Your donations help save lives and provide care for animals.</p>
                                <StyledButton
                                    onClick={() => {
                                        donateRef.current?.scrollIntoView({
                                            behavior: 'smooth'
                                        })
                                    }}
                                >Donate Now</StyledButton>
                            </TextContent>
                        </ImageContainer>
                    </Col>
                    <Col xs={6} className="p-0">
                        <ImageContainer>
                            <SupportImage src={SupportImg} alt="Volunteer" />
                            <Overlay />
                            <TextContent>
                                <h2>Become a Volunteer</h2>
                                <p>Join us in making a difference for animals in need.</p>
                                <StyledButton
                                    onClick={() => {
                                        volunteerRef.current?.scrollIntoView({
                                            behavior: 'smooth'
                                        })
                                    }}
                                >Apply Now</StyledButton>
                            </TextContent>
                        </ImageContainer>
                    </Col>
                </Row>
            </FullWidthContainer>
            <br></br>
            <DonateContainer ref={donateRef} id='donate'>
                <DonateSection/>
            </DonateContainer>
            <br></br>
            <br></br>
            <VolunteerContainer ref={volunteerRef} id='volunteer'>
               <VolunteerSection/>
            </VolunteerContainer>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    font-family: "Poppins", serif;
`;

const FullWidthContainer = styled(Container)`
    width: 100vw;
    margin: 0;
    padding: 0;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 800px;
    overflow: hidden;
`;

const SupportImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const DonateImage = styled(SupportImage)``; // Reuses the same styles

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Adjust opacity for fade effect */
`;

const TextContent = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 2;
    max-width: 80%;
`;

const StyledButton = styled(Button)`
    background-color: #ff6f61; /* Custom button color */
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 10px;
    font-weight: bold;
    &:hover {
        background-color: #e65b50;
    }
`;

const VolunteerContainer = styled.section`
    flex: 0.5;
    padding: 10px 50px;
    text-align: center;
`;

const DonateContainer = styled(VolunteerContainer)``;


export default SupportUs;