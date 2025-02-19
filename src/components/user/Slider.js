import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    return (
        <CarouselWrapper>
        <Carousel fade>
            <Carousel.Item interval={2000}>
                <Image
                    src="https://images.pexels.com/photos/177809/pexels-photo-177809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Cat slider image"
                />
                <Caption>
                    <h3>Support Pet Heaven Today!</h3>
                    <p>Compassion in Action for Animals</p>
                </Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <Image
                    src="https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Dog slider image"
                />
                <Caption>
                    <h3>Giving Every Paw a Chance</h3>
                    <p>Because every life deserves love</p>
                </Caption>
            </Carousel.Item>
        </Carousel>
        </CarouselWrapper>
    )
}

const Image = styled.img`
    object-fit: cover;
    height: 860px;
    width: 100%;
    overflow: hidden;
`
const Caption = styled(Carousel.Caption)`
    position: absolute;
    top: 60%;
    left: 10%;
    transform: translateY(-50%);
    text-align: left;
    width: 40%; /* Adjust as needed */
    color: white;
    font-family: "Poppins", serif;
`

const CarouselWrapper = styled.div`
  position: relative;
  z-index: 1; /* Lower z-index to be behind navbar */
`;

export default Slider;