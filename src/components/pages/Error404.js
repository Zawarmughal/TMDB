import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <Box align="center" sx={{mb:6, py:4}}>
        <Typography variant="h2">
            Sorry
        </Typography>
        <Typography variant="h2">
            Page Not Found
        </Typography>
        <Typography variant="h6" sx={{my:3}}>
            Enter Correct URL or <Link to="/">Go to Home Page</Link>
        </Typography>
    </Box>
  )
}
