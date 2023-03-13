import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const progress = {
    position: 'relative',
    display: 'inline-flex',
    bgcolor: "black",
    borderRadius: "100%",
    p: 0.3,
    mx: 2,
    mt: -2.7
}

const progressValue = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}
let circleColor;

function CircularProgressWithLabel(props) {
    const rating = props.value;
    if (rating >= 70) {
        circleColor = "success"
    } else if (rating >= 40 && rating < 70) {
        circleColor = "warning"
    } else if (rating < 40) {
        circleColor = "danger"
    }
    return (
        <Box sx={{ ...progress }}>
            <CircularProgress variant="determinate" color={circleColor} {...props} />
            <Box sx={{ ...progressValue }}>
                <Typography variant="caption" component="div" color="white">
                    {`${Math.round(props.value)}%`}
                </Typography>
            </Box>
        </Box>
    );
}

export default function PercentageProgress(props) {

    const average = props.mRating * 10;

    return <CircularProgressWithLabel value={average} />;
}
