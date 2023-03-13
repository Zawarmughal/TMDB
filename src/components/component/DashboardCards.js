import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material"
import PercentageProgress from './PercentageProgress'
import { useNavigate } from 'react-router-dom';

const getPosterURL = (posterPath) => {
    return `https://image.tmdb.org/t/p/original${posterPath}`;
};

export default function DashboardCards(props) {


    const name = props.name || props.title;
    const navigate = useNavigate()
    const cardClick = () => {
        if (props.media_type === "tv") {
            navigate("/detail/" + props.id + "/" + name.split(" ").join("-"))

        } else if (props.media_type === "movie") {
            navigate("/details/" + props.id + "/" + name.split(" ").join("-"))

        }
    }
    return (
        <Box sx={{ cursor: "pointer" }}
            onClick={cardClick}>
            <Card sx={{ minWidth: 200, borderRadius: "10px", mx: 2 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="300"
                    image={getPosterURL(props.poster_path)}
                />
                <PercentageProgress mRating={props.vote_average} />
                <CardContent sx={{height:"60px"}}>
                    <Typography gutterBottom variant="subtitle" component="div">
                        {props.name || props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.first_air_date || props.release_date}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    )
}