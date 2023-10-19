import { directory } from "@/context/url-context";
import CIISLayout from "@/layouts/CIIS/CIISLayout";
import ActividadMain from "@/sections/actividades/actividad";
import ActividadLocation from "@/sections/actividades/location";
import ActividadPayment from "@/sections/actividades/payment";
import ActividadTaller from "@/sections/actividades/taller";
import colors from "@/styles/colors";
import { fetchGET } from "@/utils/data.fetch";
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";

function Page() {
  const theme = createTheme({ palette: { mode: "dark" } });

  const [talleres, setTalleres] = useState([]);
  useEffect(() => fetchGET(directory.taller.src, setTalleres), []);
  return (
    <>
      <Head>
        <title>Actividades | CIIS</title>
        <meta
          name="description"
          content={`Actividades CIIS. Todas las actividades: eventos, concursos y talleres de se darán durante el Congreso Internacional de Informática y Sistemas (CIIS) ${new Date().getFullYear()}`}
        />
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
              <Grid item xs={12} sx={{ pb: 8 }}>
                <ActividadMain />
              </Grid>
              <Grid item xs={12}>
                <ActividadTaller {...{ talleres }} />
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
