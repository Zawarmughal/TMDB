import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { MULTI_SEARCH } from '../redux/constant';
import { useParams } from 'react-router-dom';
import Cards from '../component/Cards';
import { Box,Container, Grid, Typography } from '@mui/material'
import MainSkeleton from '../component/MainSkeleton';

export default function MultiSearch() {

  const params = useParams();
  const { word } = params;
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.MultiSearch.multiSearch)
  useEffect(() => {
    dispatch(
      {
        type: MULTI_SEARCH,
        word: word,
      }
    );
  }, [])
  return (
    <Box>
      <Container maxWidth="xl" sx={{ mt: 6 }}>
        <Typography variant='h4' sx={{ fontWeight: "bold" }}>Search Results</Typography>
        <Grid item lg={12} container>
            {selector?.[0] ? (
              <>
                {selector.map((movie, i) => (
                  <Grid key={`${movie.id}-${i}`} item xl={2.4} lg={2.6} md={3} sm={4} xs={12}
                    sx={{ px: 2, my: 1 }}
                  >
                    <Box>
                      <Cards
                        {...movie}
                      />
                    </Box>
                  </Grid>
                ))}
              </>
            ) : (
              <Box>
                <MainSkeleton/>
              </Box>
            )}
        </Grid>
      </Container>
    </Box>
  )
}
