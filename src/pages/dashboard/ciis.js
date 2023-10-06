import DashboardLayout from "@/layouts/dashboard/layout";
import ActividadMain from "@/sections/actividades/actividad";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Head>
        <title>CIIS Inscripciones | CIIS</title>
      </Head>
      <ActividadMain
        title="Inscripciones"
        subHeader="Selecccione la alternativa que se ajuste a su condición"
        fromDash={true}
      />
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
