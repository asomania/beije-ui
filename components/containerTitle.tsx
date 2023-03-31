import { Box, Typography } from "@mui/material";
import React from "react";

const containerTitle = (): JSX.Element => {
  return (
    <>
      <Box
        sx={{ display: "flex" }}
        justifyContent="space-between"
        alignItems="center"
        marginBottom={4}
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
      <Box>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ fontWeight: 400 }}
          marginTop={1}
        >
          Tercih ve ihtiyaçların doğrultusunda seçeceğin ürünlerden ve
          miktarlardan, sana özel bir paket oluşturalım.
        </Typography>
      </Box>
    </>
  );
};

export default containerTitle;
