import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import colors from "@/styles/colors";
import typography from "@/styles/typography";

import dotenv from "dotenv";
import { AuthProvider } from "@/context/auth";
import { AuthGuard } from "@/guards/auth-guard";
import LoadingBar from "@/components/LoadingBar";
dotenv.config();

const darkTheme = createTheme({
  palette: { ...colors, mode: "dark" },
  typography: { ...typography },
});

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <LoadingBar />
      <AuthGuard>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
        </AuthProvider>
      </AuthGuard>
    </>
  );
}
