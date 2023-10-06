import DashboardLayout from "@/layouts/dashboard/layout.js";
import InfoCardAsistencias from "@/sections/dashboard/inicio/asistencias";
import InfoCardInscription from "@/sections/dashboard/inicio/inscripcion";
import InfoCardPonencia from "@/sections/dashboard/inicio/ponencia";
import SummaryProgram from "@/sections/dashboard/inicio/programa";
import { BreakfastDining } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import Head from "next/head";
import { useState } from "react";

const ponencias = [
  {
    hora: "08:00am",
    nombre: "Nombre de la primera ponencia, extensión del nombre",
  },
  {
    hora: "08:00am",
    nombre: "Nombre de la primera ponencia, extensión del nombre",
  },
  {
    hora: "08:00am",
    nombre: "Nombre de la primera ponencia, extensión del nombre",
  },

  {
    hora: "xx:xxam",
    nombre: "Intermedio - descanso",
    icon: <BreakfastDining sx={{ mt: -0.3 }} />,
  },

  {
    hora: "08:00am",
    nombre: "Nombre de la primera ponencia, extensión del nombre",
  },
  {
    hora: "08:00am",
    nombre: "Nombre de la primera ponencia, extensión del nombre",
  },
  {
    hora: "08:00am",
    nombre: "Nombre de la primera ponencia, extensión del nombre",
  },
];

const user = {
  status: 0,
  attendances: 5,
};

export default function Page() {
  const tasaAceptacion = 0.8;
  const [attAct, setAttAct] = useState(6); //asistencias que debe tener hasta el momento
  const [attTotal, setAttTotal] = useState(30); //asistencias que debe tener al final del evento
  return (
    <>
      <Head>
        <title>Dashboard | CIIS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid item md={6} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InfoCardPonencia
                  title="En curso"
                  subheader="Transcurriendo ahora mismo"
                />
              </Grid>
              <Grid item xs={12}>
                <InfoCardPonencia image="/img/CIIS/XXIV/lectures/example2.png" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} lg={7}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InfoCardInscription {...{ user }} />
              </Grid>
              <Grid item xs={12}>
                <SummaryProgram {...{ ponencias }} />
              </Grid>
              <Grid item xs={12}>
                <InfoCardAsistencias
                  {...{ user, attTotal, attAct, tasaAceptacion }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
