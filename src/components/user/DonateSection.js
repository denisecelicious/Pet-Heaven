import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Paynow from '../../assets/user/paynow.png'
import Typography from '@mui/material/Typography';
import CashIcon from '../../assets/user/cash.png'
import PlaceIcon from '@mui/icons-material/Place';
import ChequeIcon from '../../assets/user/cheque.png'

const DonateSection = () => {

    return (
        <Wrapper>
            <Title>
                <b>Donate</b> to Pet Heaven
            </Title>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 180 }}
                    image={Paynow}
                    alt="PayNow"
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                        component="div"
                        variant="h5"
                        fontFamily={"Poppins"}
                    >
                        PayNow QR Code
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                        fontFamily={"Poppins"}
                    >
                        PayNow UEN: S123456780B
                    </Typography>
                    <p>
                        Please include your ID (NRIC/FIN/UEN) in the
                        reference box so we can identify your donations.
                    </p>
                </CardContent>
            </Card>
            <br></br>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image={CashIcon}
                    alt="Cash"
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                        component="div"
                        variant="h5"
                        fontFamily={"Poppins"}
                    >
                        Cash
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                        fontFamily={"Poppins"}
                    >
                        For donations in cash, you may drop an envelope in the locations below:
                    </Typography>
                    <p>
                        <PlaceIcon />
                        21 Tampines Ave 1, Singapore 529757
                        <br></br>
                        <PlaceIcon />
                        461 Clementi Rd, Singapore 599491
                    </p>
                </CardContent>
            </Card>
            <br></br>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 150 }}
                    image={ChequeIcon}
                    alt="Cheque"
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography
                        component="div"
                        variant="h5"
                        fontFamily={"Poppins"}
                    >
                        Cheque
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                        fontFamily={"Poppins"}
                    >
                        You may issue a crossed cheque payable to "Pet Heaven Society Singapore"
                    </Typography>
                    <p>
                        Please include your name, tax ID (NRIC/ FIN/ UEN), contact number and address at the back of the cheque.
                        <br></br>
                        Mail it to Pet Haven Charity Society, 461 Clementi Rd, Singapore 599491
                    </p>
                </CardContent>
            </Card>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-family: "Poppins", serif;
    width: 60%;
    margin: auto;
`;

const Title = styled.h2`
    color: #bb7b6b;
`;





export default DonateSection;