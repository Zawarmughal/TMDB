import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const movies = ["Popular", "NowPlaying", "UpComming", "TopRated"];
const tvShows = ["Popular", "TopRated"];
const people = ["Peoples"];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElUser1, setAnchorElUser1] = React.useState(null);
  const [anchorElUser2, setAnchorElUser2] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenUserMenu1 = (event) => {
    setAnchorElUser1(event.currentTarget);
  };
  const handleOpenUserMenu2 = (event) => {
    setAnchorElUser2(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorElUser(null);
  };
  const handleCloseUserMenu1 = () => {
    setAnchorElUser1(null);
  };
  const handleCloseUserMenu2 = () => {
    setAnchorElUser2(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#002244" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Link to={"/"}>
              <img
                style={{ height: "20px" }}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt=""
              />
            </Link>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Button
                onClick={handleOpenUserMenu}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                Movies
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {movies.map((movie) => (
                  <MenuItem key={movie} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "bold",
                        }}
                        to={`/Movies/${movie}`}
                      >
                        {movie}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              {/* -------------------------------------------------------------------- */}
              <Button
                onClick={handleOpenUserMenu1}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                TV Shows
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser1}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser1)}
                onClose={handleCloseUserMenu1}
              >
                {tvShows.map((tvShow) => (
                  <MenuItem key={tvShow} onClick={handleCloseUserMenu1}>
                    <Typography textAlign="center">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "bold",
                        }}
                        to={`/TvShows/${tvShow}`}
                      >
                        {tvShow}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
              {/* ------------------------------------------------------------------- */}
              <Button
                onClick={handleOpenUserMenu2}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontWeight: "bold",
                }}
              >
                People
              </Button>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser2}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser2)}
                onClose={handleCloseUserMenu2}
              >
                {people.map((people) => (
                  <MenuItem key={people} onClick={handleCloseUserMenu2}>
                    <Typography textAlign="center">
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "bold",
                        }}
                        to={`/People/${people}`}
                      >
                        {people}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Link to={"/"}>
              <img
                style={{ height: "20px" }}
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt=""
              />
            </Link>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* --------------------------Movie-------------------------- */}
            <Button
              onClick={handleOpenUserMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Movies
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {movies.map((movie) => (
                <MenuItem key={movie} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      to={`/Movies/${movie}`}
                    >
                      {movie}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* --------------------------------TV Show--------------------------------- */}
            <Button
              onClick={handleOpenUserMenu1}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              TV Shows
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser1}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser1)}
              onClose={handleCloseUserMenu1}
            >
              {tvShows.map((tvShow) => (
                <MenuItem key={tvShow} onClick={handleCloseUserMenu1}>
                  <Typography textAlign="center">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      to={`/TvShows/${tvShow}`}
                    >
                      {tvShow}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* ---------------------------------People-------------------------------- */}
            <Button
              onClick={handleOpenUserMenu2}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              People
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser2}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser2)}
              onClose={handleCloseUserMenu2}
            >
              {people.map((people) => (
                <MenuItem key={people} onClick={handleCloseUserMenu2}>
                  <Typography textAlign="center">
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: "bold",
                      }}
                      to={`/People/${people}`}
                    >
                      {people}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appbar;
