import { Box, Container, Fab, Typography } from "@mui/material";
import React from "react";
import { BsRepeat } from "react-icons/bs";
import Image from "next/image";

const price = 1;
const containerRight = () => {
  return (
    <Box sx={{ backgroundColor: "white", borderRadius: "16px" }} padding={4}>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: 500 }}>
          Özel paketin
        </Typography>
        <Box sx={{ display: "flex" }} marginY={4}>
          <Container
            sx={{
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
              borderRaduis: "5px",
              paddingY: "0.75rem",
              fontWeight: "unset",
            }}
          >
            <BsRepeat />
            <Typography variant="body1">2 ayda bir gönderim</Typography>
          </Container>
        </Box>
        <Box>
          <Image
            src="/packet.webp"
            alt="Picture of the author"
            width={416}
            height={201}
          />
        </Box>
        <Box marginTop={4}>
          {
            <Fab
              variant="extended"
              sx={{
                width: "100%",
                textTransform: "capitalize",
                textAlign: "center",
              }}
              disabled
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "unset", fontSize: "1.1rem" }}
              >
                Sepete ekle (${price})
              </Typography>
            </Fab>
          }
        </Box>
      </Box>
    </Box>
  );
};

export default containerRight;
