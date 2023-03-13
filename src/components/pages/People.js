import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box } from '@mui/system';
import { Grid, Container, CircularProgress } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { POPULAR_PEOPLES } from '../redux/constant';
import LoadMore from '../component/LoadMore';
import MainSkeleton from '../component/MainSkeleton';

const getPosterURL = (posterPath) => {
    return `https://image.tmdb.org/t/p/original${posterPath}`
}

export default function People(props) {

    const dispatch = useDispatch();
    const selector = useSelector((state) => state.Peoples.PopularPeoples)
    useEffect(() => {
        dispatch(
            {
                type: POPULAR_PEOPLES,
                count: 1
            }
        );
    }, [])

    return (
        <Box>
            <Container maxWidth="xl" sx={{ mt: 6 }}>
                <Grid item lg={12} container align="center">
                    {selector?.[0] ? (
                        <>
                            {selector.map((people) => (
                                <Grid key={people.id} item xl={2.4} lg={2.9} md={3} sm={6} xs={12}
                                    sx={{ px: 2, my: 1 }}
                                >
                                    <Card sx={{ maxWidth: 350, maxHeight: 400 }}>
                                        <CardActionArea>
                                            <CardMedia
                                                // maxHeight='250'
                                                component="img"
                                                sx={{
                                                    borderRadius: "10px",
                                                    minHeight: 150,
                                                    maxHeight: 250,
                                                    minWidth: 150,
                                                    maxWidth: 250,
                                                    objectPosition: "0px 3px",
                                                }}
                                                height="280"
                                                image={getPosterURL(people.profile_path)}
                                                alt="green iguana"
                                            />
                                            <CardContent align="start">
                                                <Typography gutterBottom variant="h5" component="div">
                                                    {people.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </>
                    ) : (
                        <Box>
                            <MainSkeleton />
                        </Box>
                    )}
                    <LoadMore type={POPULAR_PEOPLES} />
                </Grid>
            </Container>
        </Box>
    )
}
