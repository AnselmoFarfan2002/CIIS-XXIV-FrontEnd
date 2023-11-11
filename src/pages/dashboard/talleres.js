import { directory } from "@/context/url-context";
import ActividadLocation from "@/sections/actividades/location";
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
          <Grid item xs={12}>
            <ActividadLocation
              place="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d290.2524823542849!2d-70.25072069367124!3d-18.025927990238742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acff346a84b5f%3A0xe192654136c7ee37!2sEscuela%20de%20Metal%C3%BArgica-Mec%C3%A1nica%2C%20Inform%C3%A1tica%20y%20Sistemas!5e0!3m2!1ses!2spe!4v1699724538996!5m2!1ses!2spe"
              fromDash
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
