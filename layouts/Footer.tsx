import { Grid, Typography } from "@mui/material";

const Footer = (): JSX.Element => {
  return (
    <footer
      style={{ backgroundColor: "#3f51b5", color: "#fff", padding: "1rem" }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={12} sm={3}>
          <Typography variant="body1" align="center">
            © 2023 My Website Name. All rights reserved.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="body1" align="center">
            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Privacy Policy
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="body1" align="center">
            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Terms of Use
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="body1" align="center">
            <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
              Contact Us
            </a>
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
