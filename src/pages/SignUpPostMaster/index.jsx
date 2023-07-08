import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { PMroutes } from "routes";

import bgImage from "assets/images/campus-unjbg.jpeg";

import MKBox from "components/MKBox";
import { Card } from "@mui/material";
import MKinput from "components/MKInput";
import MKTypography from "components/MKTypography";
import Grid from "@mui/material/Grid";
// import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

export default class SignUpPostMaster extends React.Component {
  render() {
    return (
      <>
        <DefaultNavbar routes={PMroutes} transparent light></DefaultNavbar>
        <MKBox
          minHeight="100vh"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.6),
                rgba(gradients.dark.state, 0.6)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
          component="form"
        >
          <Card
            sx={{
              p: 2,
              mx: { xs: 2, lg: 5 },
              mb: 4,
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
            }}
          >
            <MKBox mt={-5} mb={5} maxWidth={250}>
              <Card
                variant="gradient"
                background="info"
                description="Llena los campos a continuación para culminar con tu inscripción"
              >
                <MKTypography align="center" variant="h4">
                  Inscripcion
                </MKTypography>
              </Card>
            </MKBox>

            <Grid container item xs={12} lg={15} py={1} mx="auto" mb={0}>
              <MKinput
                variant="standard"
                label="Nombres"
                placeholder="eg. Thomas Shelby"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid container item xs={12} lg={15} py={1} mx="auto" mb={0}>
              <MKinput
                variant="standard"
                label="Primer apellido"
                placeholder="eg. Thomas Shelby"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid container item xs={12} lg={15} py={1} mx="auto" mb={0}>
              <MKinput
                variant="standard"
                label="Segundo apellido"
                placeholder="eg. Thomas Shelby"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid container item xs={12} lg={15} py={1} mx="auto" mb={0}>
              <MKinput
                variant="standard"
                label="Correo electrónico"
                placeholder="eg. Thomas Shelby"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid container item xs={12} lg={15} py={1} mx="auto" mb={0}>
              <MKinput
                variant="standard"
                label="Celular"
                placeholder="eg. Thomas Shelby"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid container item xs={12} lg={15} py={1} mx="auto" mb={0}>
              <MKinput
                variant="standard"
                label="Número de comprobante"
                placeholder="eg. Thomas Shelby"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
          </Card>
        </MKBox>
      </>
    );
  }
}
