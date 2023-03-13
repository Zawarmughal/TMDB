import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  CircularProgress,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import Scrollbars from "react-custom-scrollbars";
import HomeImage from "../../assets/HomeImage.jpg";
import DashboardCards from "../component/DashboardCards";
import { useDispatch, useSelector } from "react-redux";
import { TRENDING } from "../redux/constant";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const [submitClicked, setSubmitClicked] = useState();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.Dashboard.Trending);
  useEffect(() => {
    dispatch({ type: TRENDING });
  }, []);

  useEffect(() => {
    if (input && !submitClicked) {
      var getData = setTimeout(() => {
        navigate("/Search/" + input);
        dispatch({ type: "search_saga", action: { query: input, page: 1 } });
      }, 2000);
    }
    return () => clearTimeout(getData);
  }, [input]);

  function submitHandler(e) {
    e.preventDefault();
    setSubmitClicked(true);
    navigate("/Search/" + input);
    dispatch({ type: "search_saga", action: { query: input, page: 1 } });
  }

  const backGround = {
    backgroundImage: `url(${HomeImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "#000000a1",
    backgroundBlendMode: "soft-light",
    height: 480,
    width: { lg: "80%", md: "90%", sm: "100%" },
    color: "white",
    marginLeft: "auto",
    marginRight: "auto",
    alignItem: "center",
  };

  const styles = {
    inputField: {
      width: "100%",
      height: "50px",
      border: 0,
      outline: "none",
      borderRadius: "50px",
      backgroundColor: "white",
      "& .MuiInputBase-root": {
        borderRadius: "50px",
        paddingRight: "0px",
        height: "55px",
        backgroundColor: "white",
      },
    },
  };

  return (
    <>
      <Box
        sx={{
          ...backGround,
        }}
      >
        <Box sx={{ pt: 6, px: 3 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", py: 2 }}>
            Welcome
          </Typography>
          <Typography variant="h4" sx={{ py: 3 }}>
            Millions of movies, TV shows and people to discover. Explore now.
          </Typography>
        </Box>
        <Box sx={{ mx: 3, pt: 6 }}>
          <TextField
            placeholder="Search for a movie, tv show, person......"
            InputLabelProps={{ shrink: false }}
            id="input-with-icon-textfield"
            sx={styles.inputField}
            onChange={(e) => setInput(e.target.value)}
            onSubmit={submitHandler}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  className="searchbtn"
                  position="start"
                  sx={{ height: "55px", marginRight: "0px" }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ height: "55px", borderRadius: "48px" ,px:3}}
                  >
                    Search
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>
      <Box>
        <Container
          maxWidth="xl"
          sx={{ maxWidth: { lg: "80%", md: "90%", sm: "100%" } }}
        >
          <Typography variant="h4" sx={{ pt: 4, fontWeight: "bold" }}>
            Trending Movies
          </Typography>
          <Scrollbars style={{ maxWidth: "100%", minHeight: 550 }}>
            <Grid
              item
              lg={12}
              container
              sx={{
                py: 6,
              }}
            >
              <Stack direction="row" spacing={2}>
                {selector ? (
                  <>
                    {selector.map((trending) => (
                      <DashboardCards key={trending.id} {...trending} />
                    ))}
                  </>
                ) : (
                  <Box
                    sx={{ marginLeft: "auto", marginRight: "auto" }}
                    alignItems="center"
                  >
                    <CircularProgress color="secondary" />
                  </Box>
                )}
              </Stack>
            </Grid>
          </Scrollbars>
        </Container>
      </Box>
    </>
  );
}
