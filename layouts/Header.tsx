import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Image from "next/image";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const pages = [
  "Ürünler",
  "Biz Kimiz",
  "Bağış Kültürü",
  "Blog",
  "Kendi Paketini Oluştur",
];

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#f5f5f5", boxShadow: "none" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            {" "}
            <Image
              src="./logo.svg"
              alt="Picture of the author"
              width={50}
              height={40}
            />
          </Box>
          <Box
            sx={{
              flexGrow: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  fontFamily: "Roboto",
                  my: 2,
                  display: "block",
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  color: "#000",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 1, fontSize: "large" }}>
              <ShoppingCartOutlinedIcon />
            </IconButton>

            <IconButton sx={{ p: 1, fontSize: "large" }}>
              <PersonOutlinedIcon />
            </IconButton>
          </Box>{" "}
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
