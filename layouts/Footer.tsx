import {
  Grid,
  Typography,
  Container,
  Box,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import {
  BsLinkedin,
  BsSpotify,
  BsTwitter,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import Image from "next/image";

const Footer = (): JSX.Element => {
  const footerLinks1: string[] = [
    "Paketler",
    "Deneme Paketi",
    "Ekibimize Katıl",
  ];
  const footerLinks2: string[] = [
    "Blog",
    "Sıkça Sorulan Sorular",
    "Biz Kimiz?",
  ];
  const socialLinks: string[] = [
    "Facebook",
    "Instagram",
    "Twitter",
    "Linkedin",
    "Spotify",
  ];
  const socialIcons: JSX.Element[] = [
    <BsFacebook />,
    <BsInstagram />,
    <BsTwitter />,
    <BsLinkedin />,
    <BsSpotify />,
  ];

  return (
    <footer
      style={{
        color: "#fff",
        padding: "2rem 0",
        backgroundColor: "#262626",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container marginY={4}>
          <Grid item xs={12} sm={5}>
            <Image
              src="./footer-image.svg"
              alt="footer-image"
              width={50}
              height={40}
            />
            <Box marginTop={2} sx={{ color: "rgba(255, 255, 255, 0.698)" }}>
              <Typography variant="body1" fontSize={16} fontWeight={500}>
                Arayı açmayalım!
              </Typography>
              <Typography variant="body1" fontSize={14} fontWeight={400}>
                Aylık e-gazetemiz döngü, yeni ürün ve gelişmelerden haberdar ol.
              </Typography>
              <form>
                <Grid container spacing={2} alignItems="center" marginY={2}>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      label="e-posta adresini giriniz"
                      type="email"
                      variant="outlined"
                      fullWidth
                      size="small"
                      InputLabelProps={{
                        style: {
                          color: "rgba(255, 255, 255, 0.698)",
                        },
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                          {
                            borderColor: "rgba(255, 255, 255, 0.698)",
                          },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{
                        borderRadius: 20,
                        backgroundColor: "White",
                        color: "Black",
                        "&:hover": {
                          backgroundColor: "#262626",
                        },
                      }}
                    >
                      Gönder
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Typography variant="body1" fontSize={12} fontWeight={300}>
                Abone olarak, beije KVKK ve Gizlilik Politikası'nı kabul ediyor
                ve beije'den haber almayı onaylıyorum.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={1}></Grid>
          <Grid item xs={6} sm={2}>
            <Box>
              {footerLinks1.map((link) => (
                <Typography variant="body1" marginBottom={2}>
                  <a
                    href="/"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Box>
              {footerLinks2.map((link) => (
                <Typography variant="body1" marginBottom={2}>
                  <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                    {link}
                  </a>
                </Typography>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Box>
              {socialLinks.map((link, index) => (
                <Typography variant="body1" fontSize={25}>
                  <a
                    href="/"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "1.5rem",
                      gap: "1rem",
                    }}
                  >
                    {socialIcons[index]}

                    <span style={{ fontSize: "16px" }}>{link}</span>
                  </a>
                </Typography>
              ))}
            </Box>
            {/* <Typography variant="body1" fontSize={25} justifyContent="center">
              <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                <CgFacebook />{" "}
                <span style={{ fontSize: "16px" }}>Facebook</span>
              </a>
            </Typography> */}
          </Grid>
        </Grid>
        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.698)" }} />
        <Box>
          <Grid container marginTop={7}>
            <Grid item xs={12} sm={3} textAlign="center">
              <Typography variant="h6" fontSize={14}>
                © 2023 beije. Tüm hakları saklıdır.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={7}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{ flexDirection: { xs: "column", sm: "row" } }}
                gap={1}
              >
                <Typography variant="body1" fontSize={14}>
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    KVKK Aydınlatma Metni
                  </a>
                </Typography>

                <Typography variant="body1">
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    Üyelik Sözleşmesi
                  </a>
                </Typography>

                <Typography variant="body1">
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    Gizlilik Politikası
                  </a>
                </Typography>
                <Typography variant="body1">
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    Çerez Politikası
                  </a>
                </Typography>
                <Typography variant="body1">
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    Test Sonuçları
                  </a>
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={2}>
              <Box
                sx={{ display: "flex" }}
                gap={1}
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="body1">
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    EN
                  </a>
                </Typography>
                |
                <Typography variant="body1">
                  <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                    TR{" "}
                  </a>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
