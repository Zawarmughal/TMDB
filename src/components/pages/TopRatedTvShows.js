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
import { TOPRATED_TVSHOW } from "../redux/constant";
import LoadMore from "../component/LoadMore";
import MainSkeleton from "../component/MainSkeleton";

export default function TopRatedTvShows() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.TvShow.TopRatedTvShow);
  useEffect(() => {
    dispatch({
      type: TOPRATED_TVSHOW,
      count: 1,
    });
  }, []);
  return (
    <Box>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Now Playing
        </Typography>
        <Grid item lg={12} container>
          <Grid item lg={3} md={12} sm={12} xs={12}>
            <Accordions />
          </Grid>
          <Grid item lg={9} md={12} sm={12} xs={12} container align="center">
            {selector?.[0] ? (
              <>
                {selector.map((tvShow) => (
                  <Grid
                    key={tvShow.id}
                    item
                    xl={2.4}
                    lg={2.6}
                    md={3}
                    sm={4}
                    xs={12}
                    sx={{ px: 2, my: 1 }}
                  >
                    <Box>
                      <Cards {...tvShow} />
                    </Box>
                  </Grid>
                ))}
              </>
            ) : (
              <Box>
                <MainSkeleton />
              </Box>
            )}
            <LoadMore type={TOPRATED_TVSHOW} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
