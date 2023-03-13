import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import PercentageProgress from "./PercentageProgress";
import { useLocation, useNavigate } from "react-router-dom";

const getPosterURL = (posterPath) => {
  return posterPath ? `https://image.tmdb.org/t/p/original${posterPath}` : "#";
};

export default function Cards(props) {

  const location = useLocation();
  const p = location.pathname;
  const pth = p.split("/", 2)
  const navigate = useNavigate();
  const cardClick = () => {
    if (pth[1] === "TvShows") {
      navigate("/detail/" + props.id + "/" + name.split(" ").join("-"))
    } else {
      navigate("/details/" + props.id + "/" + name.split(" ").join("-"))
    }
  }
  const name = props.title || props.name;
  return (
    <Box
      sx={{ cursor: "pointer" }}
      onClick={cardClick}
    >
      <Card
        sx={{
          minWidth: 100,
          maxWidth: 250,
          borderRadius: "10px",
          maxHeight: 600,
        }}
        align="start"
      >
        <CardMedia
          component="img"
          alt="Image"
          height="auto"
          image={getPosterURL(props.poster_path)}
        />
        <PercentageProgress mRating={props.vote_average} />
        <CardContent sx={{height:"60px"}}>
          <Typography gutterBottom variant="subtitle" component="div">
            {props.title || props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.release_date || props.first_air_date}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
