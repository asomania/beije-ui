import Head from "next/head";
import { Grid, Container, Fab, Typography, Box } from "@mui/material";
import ContainerTitle from "@/components/containerTitle";
import ContainerContent from "@/components/containerContent";
import ContainerRight from "@/components/containerRight";
import { ItemCountProvider } from "@/context/itemCount";

export default function Home() {
  return (
    <>
      <Head>
        <title>clone app | Kendi paketini oluştur</title>
      </Head>

      <Box>
        <ItemCountProvider>
          <Container>
            <Grid container marginTop="8rem">
              <Grid item xs={12} md={6}>
                <ContainerTitle />
                <ContainerContent />
                <Fab
                  variant="extended"
                  sx={{
                    marginBottom: "2rem",
                    width: "100%",
                    textTransform: "capitalize",
                    textAlign: "center",
                    display: { xs: "block", md: "none" },
                    backgroundColor: "rgb(52, 49, 49)",
                    color: "white",

                    // hover
                    "&:hover": {
                      backgroundColor: "white",
                      color: "rgb(52, 49, 49)",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "unset", fontSize: "1.1rem" }}
                  >
                    Paketini gör
                  </Typography>
                </Fab>
              </Grid>
              <Grid item xs={12} md={1}></Grid>
              <Grid item sx={{ display: { xs: "none", md: "block" } }} md={5}>
                <ContainerRight />
              </Grid>
            </Grid>
          </Container>
        </ItemCountProvider>
      </Box>
    </>
  );
}
