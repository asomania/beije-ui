import { Box, Typography } from "@mui/material";
import React from "react";

const containerTitle = (): JSX.Element => {
  return (
    <Box
      sx={{ display: "flex" }}
      justifyContent="space-between"
      marginTop="8rem"
      alignItems="center"
    >
      <Typography variant="h4" sx={{ fontWeight: 400 }}>
        Kendi Paketini Oluştur
      </Typography>
      <Typography
        variant="body1"
        component="h2"
        sx={{ fontWeight: 400, display: { xs: "none", md: "block" } }}
      >
        Nasıl Çalışır?
      </Typography>
    </Box>
  );
};

export default containerTitle;
