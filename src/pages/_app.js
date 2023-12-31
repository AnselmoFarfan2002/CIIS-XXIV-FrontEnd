import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import colors from "@/styles/colors";
import typography from "@/styles/typography";

import { AuthProvider } from "@/context/auth";
import LoadingBar from "@/components/LoadingBar";

const darkTheme = createTheme({
  palette: { ...colors, mode: "dark" },
  typography: { ...typography },
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <LoadingBar />
      <AuthProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}
