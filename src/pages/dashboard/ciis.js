import DashboardLayout from "@/layouts/dashboard/layout";
import ActividadMain from "@/sections/actividades/actividad";
import ActividadLocation from "@/sections/actividades/location";
import ActividadPayment from "@/sections/actividades/payment";
import CIISregistroFormDelegacion from "@/sections/dashboard/ciis/formDelegacion";
import CIISregistroFormGeneral from "@/sections/dashboard/ciis/formGeneral";
import CIISregistroFormStudent from "@/sections/dashboard/ciis/formStudent";
import { Container, Grid } from "@mui/material";
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
      <Container maxWidth={"lg"}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          columnSpacing={10}
        >
          <Grid item xs={12}>
            {formsViews[view] ?? (
              <ActividadMain
                title="Pre inscripciones"
                subHeader="Selecccione la alternativa que se ajuste a su condición"
                fromDash={true}
                {...{ setView, view }}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <ActividadPayment fromDash={true} />
          </Grid>
          {!formsViews[view] && (
            <Grid item xs={12}>
              <ActividadLocation />
            </Grid>
          )}
        </Grid>
      </Container>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
