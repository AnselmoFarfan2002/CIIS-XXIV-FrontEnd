import CIISLayout from "@/layouts/CIIS/CIISLayout";
import DashboardLayout from "@/layouts/dashboard/layout.js";
import InfoCardAsistencias from "@/sections/dashboard/inicio/asistencias";
import InfoCardInscription from "@/sections/dashboard/inicio/inscripcion";
import InfoCardPonencia from "@/sections/dashboard/inicio/ponencia";
import { BreakfastDining, PunchClock } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useState } from "react";

function ItemPrograma({
  hora,
  nombre,
  icon = <PunchClock sx={{ mt: -0.3 }} />,
}) {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      {icon}
      <Typography variant="body2" sx={{ color: "rgba(255,255,255,.8)" }}>
        {hora} - {nombre}
      </Typography>
    </Box>
  );
}

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
  const [attAct, setAttAct] = useState(user.attendances);
  const [attTotal, setAttTotal] = useState(30);

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
                <Card>
                  <CardHeader title="Programa" subheader="Ponencias del día" />
                  <CardContent
                    sx={{ display: "flex", gap: 2, flexDirection: "column" }}
                  >
                    {ponencias.map((ponencia) => (
                      <ItemPrograma
                        {...{
                          hora: ponencia.hora,
                          nombre: ponencia.nombre,
                          icon: ponencia.icon,
                        }}
                      />
                    ))}
                  </CardContent>
                  <CardActions>
                    <Button fullWidth>Ver programa completo</Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <InfoCardInscription {...{ user }} />
              </Grid>
              <Grid item xs={12}>
                <InfoCardAsistencias {...{ user, attTotal, attAct }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
