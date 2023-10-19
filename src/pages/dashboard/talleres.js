import { directory } from "@/context/url-context";
import ActividadPayment from "@/sections/actividades/payment";
import ActividadTaller from "@/sections/actividades/taller";
import TallerRegistro from "@/sections/dashboard/talleres/formInscripcion";
import { fetchGET } from "@/utils/data.fetch";
import { Container, Grid, ThemeProvider, createTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const { default: DashboardLayout } = require("@/layouts/dashboard/layout");
const { default: Head } = require("next/head");

function Page() {
  const router = useRouter();
  const theme = createTheme({ palette: { mode: "dark" } });
  const [tallerView, setTallerView] = useState(null);
  function handleChangeView(id) {
    console.log(tallerView);
    setTallerView(id);
  }
  function handleBack() {
    setTallerView(null);
  }

  const [talleres, setTalleres] = useState([]);
  function ask4talleres() {
    fetchGET(directory.taller.src, setTalleres);
  }
  useEffect(ask4talleres, []);
  useEffect(() => {
    if (router.query?.id && talleres.length)
      setTallerView(talleres.filter((a) => a.id == router.query.id)[0]);
  }, [talleres]);

  return (
    <>
      <Head>
        <title>Talleres | CIIS</title>
      </Head>

      <Container maxWidth={"lg"}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          columnSpacing={10}
        >
          <Grid item xs={12}>
            {!tallerView ? (
              <ThemeProvider theme={theme}>
                <ActividadTaller fromDash {...{ handleChangeView, talleres }} />
              </ThemeProvider>
            ) : (
              <TallerRegistro {...{ taller: tallerView, handleBack }} />
            )}
          </Grid>

          <Grid item xs={12}>
            <ActividadPayment fromDash />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
