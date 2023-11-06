import { Container, Grid, Typography } from "@mui/material";
import Head from "next/head";

const { default: DashboardLayout } = require("@/layouts/dashboard/layout");

function Page() {
    
  return (
    <>
      <Head>
        <title>CIIS Asistencia | CIIS</title>
      </Head>
      <Container maxWidth={"lg"}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          columnSpacing={10}
        >
          
        </Grid>
      </Container>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
