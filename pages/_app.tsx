import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

/*


import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layouts/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import fontGordita from "@/styles/fonts/gordita.woff";

const theme = createTheme({
  typography: {
    fontFamily: "Gordita, Regular",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Gordita';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('gordita'), url(${fontGordita}) format('woff');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
*/
