import CIISLayout from "@/layouts/CIIS/CIISLayout";
import DashboardLayout from "@/layouts/dashboard/layout.js";
import {
  BreakfastDining,
  LockClock,
  PunchClock,
  Speaker,
} from "@mui/icons-material";
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

const estados = [
  { label: "No inscrito" },
  { label: "Inscrito", color: "success" },
  { label: "En espera", color: "info" },
];

const certificacion = [
  { label: "No disponible" },
  { label: "Califica", color: "success" },
  { label: "No califica", color: "error" },
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
          <Grid item md={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title="Inscripciones"
                    subheader="Inscríbete y verifica el estado de tu inscripción"
                  />
                  <CardContent>
                    <Typography variant="body2" mt={-2}>
                      Estado de inscripción: <Chip {...estados[user.status]} />
                    </Typography>
                    <Typography variant="body2">
                      Cierre de inscripciones: 13 de noviembre del 2023
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardHeader
                    title="Asistencias"
                    subheader="Contadores de asistencias para certificación"
                  />
                  <CardContent>
                    <Typography variant="body2" mt={-2}>
                      Estado de final certificación:{" "}
                      <Chip {...certificacion[0]} />
                    </Typography>
                    <Typography variant="body2">
                      Asistencias necesarias: {attTotal}
                    </Typography>
                    <Typography variant="body2">
                      Asistencias registradas: {attAct}
                    </Typography>
                    <Typography variant="body2" mt={1}>
                      Estado de actual certificación:{" "}
                      <Chip {...certificacion[2]} />
                    </Typography>
                    <Typography variant="body2">
                      Asistencias hasta el momento: {6}
                    </Typography>
                    <Typography variant="body2">
                      Asistencias registradas: {attAct}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6}>
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
        </Grid>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
