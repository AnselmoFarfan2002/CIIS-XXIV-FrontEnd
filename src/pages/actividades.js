import CIISLayout from "@/layouts/CIIS/CIISLayout";
import ActividadMain from "@/sections/actividades/actividad";
import ActividadLocation from "@/sections/actividades/location";
import ActividadPayment from "@/sections/actividades/payment";
import colors from "@/styles/colors";
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Head from "next/head";

function Page() {
  const theme = createTheme({ palette: { mode: "dark" } });
  return (
    <>
      <Head>
        <title>Actividades | CIIS</title>
      </Head>
      <Box
        width={"100vw"}
        sx={{ background: colors.bg.gradientSolid(0), py: 15 }}
      >
        <ThemeProvider {...{ theme }}>
          <Container maxWidth={"lg"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              columnSpacing={10}
            >
              <Grid item xs={12}>
                <ActividadMain />
              </Grid>
              <Grid item xs={12}>
                <ActividadPayment />
              </Grid>
              <Grid item xs={12}>
                <ActividadLocation />
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <CIISLayout>{page}</CIISLayout>;
export default Page;
