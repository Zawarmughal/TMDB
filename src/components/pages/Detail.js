import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, CardMedia, Grid, Typography, Container, Avatar, Stack } from "@mui/material";
import PercentageProgress from "../component/PercentageProgress";
import StarIcon from '@mui/icons-material/Star';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useDispatch, useSelector } from "react-redux";
import { DETAIL } from "../redux/constant";
import { CircularProgress } from "@mui/material";
import DetailReviews from "../component/DetailReviews";

export default function Detail() {

  const selector = useSelector((state) => state.Details.Detail);
  const reviewSelector = useSelector((state) => state.Details.MovieReview);
  const review = reviewSelector.results;
  const params = useParams();
  const { id, } = params;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: DETAIL,
      id: id
    })
  }, [])

  const backGround = {
    backgroundImage:  selector.backdrop_path ? `url(https://image.tmdb.org/t/p/original${selector?.backdrop_path})`: "#",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#000000c7",
    backgroundBlendMode: "soft-light",
    width: "100%",
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    alignItem: "center",
  };

  const getPosterURL = (posterPath) => {
    return posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : "#";
  }

  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${padToTwoDigits(hours)}h ${padToTwoDigits(minutes)}m`;
  }
  function padToTwoDigits(num) {
    return num.toString().padStart(2);
  }

  const genres = selector?.genres;

  let fullYear = new Date(selector?.release_date || selector?.first_air_date);

  const budget = () => {
    if (selector.budget == 0 || null) {
      return "---"
    }
    else {
      return `$${selector.budget}.00`
    }
  }
  const revenue = () => {
    if (selector.revenue == 0 || null) {
      return "---"
    }
    else {
      return `$${selector.revenue}.00`
    }
  }

  return (
    <>
      {selector ? (
        <>
          <Box
            sx={{
              ...backGround, py: 6
            }}
          >
            <Container maxWidth="xl">
              <Grid item lg={12} container>
                <Grid item lg={3} md={4} sm={6} xs={12} mt={'auto'}>
                  <Box >
                    <Card
                      sx={{
                        minWidth: 100,
                        maxWidth: 250,
                        borderRadius: "10px",
                        maxHeight: 600,
                      }}
                      align="center"
                    >
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="auto"
                        image={getPosterURL(selector.poster_path)}
                      />
                    </Card>
                  </Box>
                </Grid>
                <Grid item lg={9} md={8} sm={6} xs={12} my={'auto'}>
                  <Typography variant="h3" fontWeight="bold">{selector.title || selector.name} ({fullYear.getFullYear()})</Typography>
                  <Typography variant="subtitle">{selector.release_date}(US)
                    {genres ? (

                      <Box component="span">

                        {genres.map((genres) => {
                          return (
                            <Typography key={genres.id} variant="subtitle">{` ${genres.name},`}</Typography>
                          )
                        })}
                      </Box>
                    ) : (
                      <Typography>----</Typography>
                    )
                    }
                    {toHoursAndMinutes(selector.runtime)}</Typography>
                  <Box>
                    <Box sx={{ display: "flex", my: 3 }}>
                      <Box mt={3}>
                        <PercentageProgress
                          mRating={selector.vote_average}
                        />
                      </Box>
                      <Typography>User <br /> Score</Typography>
                      <Avatar
                        sx={{ bgcolor: "#002244", mx: 1 }}
                      >
                        <FormatListBulletedIcon fontSize="small" />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#002244", mx: 1 }}
                      >
                        <FavoriteIcon fontSize="small" />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#002244", mx: 1 }}
                      >
                        <BookmarkIcon fontSize="small" />
                      </Avatar>
                      <Avatar
                        sx={{ bgcolor: "#002244", mx: 1 }}
                      >
                        <StarIcon fontSize="small" />
                      </Avatar>
                    </Box>
                    <Typography variant="title">{selector.tagline}</Typography>
                    <Typography variant="h4" my={2}>Overview</Typography>
                    <Typography variant="subtitle">{selector.overview}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>

          <Box>
            <Container maxWidth="xl">
              <Grid item lg={12} container>
                <Grid item lg={9} md={9} sm={8} xs={12}>
                  <DetailReviews review= {review} />
                </Grid>
                <Grid item lg={3} md={3} sm={4} xs={12} p={3}>
                  <Box><Stack direction='row' spacing={4}>
                    <FacebookRoundedIcon fontSize="large" />
                    <TwitterIcon fontSize="large" />
                    <InstagramIcon fontSize="large" />
                  </Stack></Box>
                  <Box mt={3} >
                    <Typography variant="h5" fontWeight="bold">Status</Typography>
                    <Typography variant="subtitle">{selector.status}</Typography>
                  </Box>
                  <Box mt={3}>
                    <Typography variant="h5" fontWeight="bold">Orignal Language</Typography>
                    <Typography variant="subtitle">{selector.original_language}</Typography>
                  </Box>
                  <Box mt={3}>
                    <Typography variant="h5" fontWeight="bold">Budget</Typography>
                    <Typography variant="subtitle">{budget()}</Typography>
                  </Box>
                  <Box mt={3}>
                    <Typography variant="h5" fontWeight="bold">Revenue</Typography>
                    <Typography variant="subtitle">{revenue()}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </>
      ) : (
        <Box sx={{ marginLeft: "auto", marginRight: "auto", height: "100vh" }} alignItems="center">
          <CircularProgress color='secondary' />
        </Box>
      )}
    </>
  );
}
