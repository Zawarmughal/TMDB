import React, { useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Box, Container, Button } from '@mui/material';

const TheBasics = ['About TMDB', 'Contact Us', 'Support Forms', 'API', 'System Status'];
const GetInvolved = ['Contribution Bible', 'Add New Movie', 'Add New TV Show'];
const Community = ['Guidelines', 'Discussions', 'Leaderboard', 'Twitter'];
const Legal = ['Terms of Use', 'API Terms of Use', 'Privacy Policy'];

const footerBackground = {
    backgroundColor: "#002244",
    color: "white",
}

export default function Footer() {

    return (
        <Box sx={{ ...footerBackground, }} 
        >
            <Container maxWidth="xl">
                <Grid item lg={12} container sx={{ py: 6 }} >
                    <Grid item lg={1} md={0} sm={0} xs={0}></Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12}>
                        <Box sx={{ align: "center " }}>
                            <img style={{ width: "100%", maxHeight: "12vh" }}
                                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                                alt="Image" />
                            <Button variant='contained' sx={{ mt: 4, bgcolor: "white", color: "#1769aa", fontWeight: "bold" }}>
                                <Typography variant=''>JOIN THE COMMUNITY</Typography>
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item lg={1} md={0} sm={0} xs={0}></Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12} sx={{ py: 6 }}>
                        <Typography variant='h5' sx={{ fontWeight: "bold", pb: 2 }}>THE BASICS</Typography>
                        {TheBasics.map((TheBasic) => (
                            <Typography key={TheBasic} variant='subtitle1'>{TheBasic}</Typography>
                        ))}
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12} sx={{ py: 6 }}>
                        <Typography variant='h5' sx={{ fontWeight: "bold", pb: 2 }}>GET INVOLVED</Typography>
                        {GetInvolved.map((GetInvolve) => (
                            <Typography key={GetInvolve} variant='subtitle1'>{GetInvolve}</Typography>
                        ))}

                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12} sx={{ py: 6 }}>
                        <Typography variant='h5' sx={{ fontWeight: "bold", pb: 2 }}>COMMUNITY</Typography>
                        {Community.map((community) => (
                            <Typography key={community} variant='subtitle1'>{community}</Typography>
                        ))}
                    </Grid>
                    <Grid item lg={2} md={4} sm={6} xs={12} sx={{ py: 6 }}>
                        <Typography variant='h5' sx={{ fontWeight: "bold", pb: 2 }}>LEGAL</Typography>
                        {Legal.map((legal) => (
                            <Typography key={legal} variant='subtitle1'>{legal}</Typography>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}