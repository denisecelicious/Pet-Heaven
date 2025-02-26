import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import styled from 'styled-components';


const StoryTimeline = () => {
    return (
        <HistoryTimeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    fontFamily={"Poppins, serif"}
                >
                    2001
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <AccessTimeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" fontFamily={"Poppins, serif"}>
                        Established
                    </Typography>
                    <Typography fontFamily={"Poppins, serif"}>Where Pet Heaven started!</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    fontFamily={"Poppins, serif"}
                >
                    2005
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <HomeIcon/>
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" fontFamily={"Poppins, serif"}>
                        Opening the Pet Heaven Shelter
                    </Typography>
                    <Typography fontFamily={"Poppins, serif"}>
                        Pet Heaven opened its first shelter to house abandoned pets
                        to expand our volume to rescue and care for animals in need.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    fontFamily={"Poppins, serif"}
                >
                    2007
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <PeopleAltIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" fontFamily={"Poppins, serif"}>
                        Launching of Programs
                    </Typography>
                    <Typography fontFamily={"Poppins, serif"}>
                        Pet Heaven launched our services like the Adoption Programme and
                        to provide shelter to the animals that pet owners who want to 
                        release their pets to the society,
                    </Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    fontFamily={"Poppins, serif"}
                >
                    2025
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <PetsIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" component="span" fontFamily={"Poppins, serif"}>
                        Partnerships and Outreach Programs
                    </Typography>
                    <Typography fontFamily={"Poppins, serif"}>
                        Today, we continue to work with different communities to conduct outreach programs to provide shelter for the animals.
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </HistoryTimeline>
    )
}

const HistoryTimeline = styled(Timeline)`
    color: black;
`

export default StoryTimeline;