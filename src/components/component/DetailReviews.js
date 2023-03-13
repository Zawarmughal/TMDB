import { Avatar, Box, Grid, Typography, Paper } from "@mui/material";
import React from "react";

export default function DetailReviews(props) {

  return (
    <>
      <Typography variant="h4" fontWeight="bold" mt={3}>
        Reviews{" "}
      </Typography>
      {props.review?.[0] ? (
        <>
          {props.review.map((item) => {
            let text = item.content;
            let string = text.substring(0, 500);
            return (
              <Paper key={item.id} elevation={6} sx={{ mt: 6 }}>
                <Grid item lg={12} container>
                  <Grid item lg={1} md={1} sm={2} xs={2} align="right">
                    <Avatar
                      src={item.author_details.name.avatar_path}
                      alt="#"
                      sx={{ width: 70, height: 70, mt: 2 }}
                    ></Avatar>
                  </Grid>
                  <Grid item lg={11} md={11} sm={10} xs={10}>
                    <Box m={3}>
                      <Typography variant="h5">
                        A review by {item.author_details.name}
                      </Typography>
                      <Typography>
                        Writen by {item.author_details.username} on Feb 1, 2023
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item lg={12} container>
                  <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
                  <Grid item lg={11} md={11} sm={11} xs={11}>
                    <Typography m={3}>{string}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            )
          }
          )}
        </>
      ) : (
        <Box
          sx={{ marginLeft: "auto", marginRight: "auto", }}
          alignItems="center"
        >
          <Typography variant="h6">No Reviews</Typography>
        </Box>
      )}
    </>
  );
}
