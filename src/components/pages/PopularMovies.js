import {
  Box,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Accordions from "../component/Accordions";
import Cards from "../component/Cards";
import LoadMore from "../component/LoadMore";
import MainSkeleton from "../component/MainSkeleton";
import { POPULAR_MOVIES } from "../redux/constant";

export default function PopularMovies() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.Movie.PopularMovies);
  useEffect(() => {
    dispatch({
      type: POPULAR_MOVIES,
      count: 1,
    });
  }, []);

  return (
    <Box>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Popular
        </Typography>
        <Grid item lg={12} container>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <Accordions />
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12} container align="center">
            {selector?.[0] ? (
              <>
                {selector.map((movie, i) => (
                  <Grid
                    key={`${movie.id}-${i}`}
                    item
                    xl={2.4}
                    lg={2.6}
                    md={3}
                    sm={4}
                    xs={12}
                    sx={{ px: 2, my: 1 }}
                  >
                    <Box>
                      <Cards {...movie} />
                    </Box>
                  </Grid>
                ))}
              </>
            ) : (
              <Box>
                <MainSkeleton />
              </Box>
            )}
            <LoadMore type={POPULAR_MOVIES} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
