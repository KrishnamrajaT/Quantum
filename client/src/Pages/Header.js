import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import JoinNowButton from "../components/JoinNowbtn";
const pages = ["Join Now"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1E1E1E" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              justifyContent:"center",
              color: "#F0F0F0",
              textDecoration: "none",
              fontSize: "30px",
              letterSpacing: "2px",
            }}
          >
            Royal Traders
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              justifyContent:"center",
              fontSize: "25px",
              letterSpacing: "3px",
              flexGrow: 1,
              fontWeight: 700,
              color: "#F0F0F0",
              textDecoration: "none",
            }}
          >
            Royal Traders
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#F0F0F0", display: "block" }}
              >
                {/* {page} */}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            <JoinNowButton />
          </Box>
          {/* <Box
            sx={{
              flexGrow: 0,
              display: { xs: "flex", md: "none" },
              position: "fixed",
              top: "75px",
              left: "249px",
            }}
          >
            <JoinNowButton />
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
