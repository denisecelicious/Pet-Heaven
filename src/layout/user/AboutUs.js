import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/user/Navbar';
import Logo from '../../assets/user/logo.png'
import StoryTimeline from '../../components/user/Timeline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKitMedical } from '@fortawesome/free-solid-svg-icons';
import { faShieldDog } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {


    return (
        <Container>
            <Navbar />
            <InfoContainer>
                <LogoContainer>
                    <LogoImage src={Logo} alt='Logo Image' />
                </LogoContainer>
                <Title> <b>Overview</b> of Pet Heaven</Title>
                <Description>
                    We are a compassionate charity dedicated to the welfare of animals with <b>one goal:</b>
                    <br></br>
                    To provide a safe heaven for pets in need, ensuring they receive the care and love
                    they deserve. Through Pet Heaven charity society, we connect these animals with loving
                    adopters and offer a home for those who no longer care for their pets.
                    Together, we create a world where every pet finds a forever home.
                </Description>
            </InfoContainer>
            <TimelineContainer>
                <HistoryTitle> <b>History</b> of Pet Heaven</HistoryTitle>
                <StoryTimeline />
            </TimelineContainer>
            <br></br>
            <InfoContainer>
                <Title> <b>Mission</b> & <b>Vision</b></Title>
                <Wrapper>
                    <Box>
                        <CheckCircleIcon style={{ fontSize: 50 }} />
                        <h3>Mission</h3>
                        <p>To rescue, care for, and rehome abandoned animals by providing a safe environment and connecting them with loving families through the Pet Heaven society.</p>
                    </Box>
                    <Box>
                        <VisibilityIcon style={{ fontSize: 50 }} />
                        <h3>Vision</h3>
                        <p>A world where every pet has a loving home and no animal is left abandoned or neglected.</p>
                    </Box>
                </Wrapper>
            </InfoContainer>
            <br></br>
            <ServicesContainer>
                <ServicesTitle>Our <b>Services</b> </ServicesTitle>
                <br></br>
                <IconTextBox>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faKitMedical} size='2x' />
                    </IconWrapper>
                    <IconTextField>
                        <ServicesText>24/7 EMERGENCY ANIMAL RESCUE</ServicesText>
                    </IconTextField>
                </IconTextBox>
                <IconTextBox>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faShieldDog} size='2x' />
                    </IconWrapper>
                    <IconTextField>
                        <ServicesText>ADOPTION PROGRAMME</ServicesText>
                    </IconTextField>
                </IconTextBox>
                <IconTextBox>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faHouseChimney} size='2x' />
                    </IconWrapper>
                    <IconTextField>
                        <ServicesText>SHELTER FOR SICK, INJURED, ABUSED, ABANDONED AND UNWANTED PETS AND COMMUNITY ANIMALS</ServicesText>
                    </IconTextField>
                </IconTextBox>
                <IconTextBox>
                    <IconWrapper>
                        <FontAwesomeIcon icon={faBook} size='2x' />
                    </IconWrapper>
                    <IconTextField>
                        <ServicesText>EDUCATION PROGRAMMES</ServicesText>
                    </IconTextField>
                </IconTextBox>
            </ServicesContainer>
        </Container>
    )

}

const Container = styled.div`
    font-family: "Poppins", serif;
`;


const InfoContainer = styled.section`
    flex: 0.5;
    padding: 10px 50px;
    text-align: left;
`;

const LogoImage = styled.img`
    margin: auto;
    height: 200px;
    width: 200px;
`

const LogoContainer = styled.div`
    flex: 0.5;
    padding: 10px 50px;
    text-align: center;
`

const Title = styled.h1`
    color: #bb7b6b;
`;

const HistoryTitle = styled.h1`
    color: #bb7b6b;
`

const Description = styled.p``;

const ServicesContainer = styled.section`
    flex: 0.5;
    padding: 10px 50px;
    text-align: center;
    height: 400px;
    background-color: #bb7b6b;
    color: white;
`;

const TimelineContainer = styled.div`
    flex: 0.5;
    padding: 10px 50px;
    text-align: left;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
`;

const Box = styled.div`
    background: white;
    border-radius: 10px;
    padding: 20px 50px;
    max-width: 500px;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    word-wrap: break-word;
`;
const ServicesTitle = styled.h1`
    text-align: left
`;

const IconTextBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px; /* Adjust spacing between icon and text */
    width: 100%;
    margin-bottom: 15px;
    color: white; /* Ensure text color is visible */
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;  /* Ensure proper width */
    height: 50px; /* Match icon size */
    flex-shrink: 0; /* Prevents icon from shrinking */
`;

const IconTextField = styled.div`
    flex-grow: 1;
    text-align: left;
`;

const ServicesText = styled.p`
    margin: 0;
    font-size: 1.2rem; /* Adjust text size for better visibility */
`;







export default AboutUs;