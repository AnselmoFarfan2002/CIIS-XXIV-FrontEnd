import DashboardLayout from "@/layouts/dashboard/layout";
import ActividadMain from "@/sections/actividades/actividad";
import CIISregistroFormDelegacion from "@/sections/dashboard/ciis/formDelegacion";
import CIISregistroFormGeneral from "@/sections/dashboard/ciis/formGeneral";
import CIISregistroFormStudent from "@/sections/dashboard/ciis/formStudent";
import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Page() {
  const router = useRouter();
  const { type = null } = router.query;
  const [view, setView] = useState(type);

  const formsViews = {
    op1: <CIISregistroFormGeneral {...{ view, setView }} />,
    op2: <CIISregistroFormStudent {...{ view, setView }} />,
    op3: <CIISregistroFormDelegacion {...{ view, setView }} />,
    op4: <CIISregistroFormStudent {...{ view, setView }} />,
  };

  return (
    <>
      <Head>
        <title>CIIS Inscripciones | CIIS</title>
      </Head>
      {formsViews[view] ?? (
        <ActividadMain
          title="Pre inscripciones"
          subHeader="Selecccione la alternativa que se ajuste a su condición"
          fromDash={true}
          {...{ setView, view }}
        />
      )}
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
