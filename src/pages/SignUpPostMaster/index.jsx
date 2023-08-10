import { React } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { PMroutes } from "routes";
import { Grid, Card } from "@mui/material";
import CardPrice from "../../components/login/CardPrice";
import MKBox from "components/MKBox";
import bgImage from "assets/images/campus-unjbg.jpeg";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
import esisLogo from "assets/images/logos/esis-logo.png";
import profesionales from "assets/images/profesionales.jpg";
import estudiante from "assets/images/estudiante.jpg";
import MetodosPago from "./MetodosPago";
import CenteredFooter from "examples/Footers/CenteredFooter";

const incluido = ["Certificación", "Kit Postmaster", "Refrigerio", "Sorteos"];

export default function SignUpPostMaster() {
  return (
    <>
      <DefaultNavbar routes={PMroutes} transparent light />
      <MKBox
        minHeight="100vh"
        width="100%"
        component="form"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          placeItems: "center",
          display: "grid",
          paddingX: {
            xs: 1,
          },
        }}
        alignItems={"center"}
        px={6}
        py={"auto"}
        bgColor="info"
        variant="gradient"
      >
        <Grid container gap={13}>
          <Grid
            item
            container
            xs={12}
            lg={6}
            flexDirection="column"
            alignItems="center"
            sx={{ textAlign: "center", my: 0, mx: "auto", px: 0.75 }}
          >
            <MKBox
              sx={{
                marginTop: {
                  xs: 15,
                },
              }}
            >
              <MKBadge
                variant="contained"
                color="info"
                badgeContent="Detalles de inscripción"
                container
                sx={{ mb: 2 }}
              />
            </MKBox>
            <MKTypography variant="h2" fontWeight="bold" color="light">
              Únete al Postmaster XX
            </MKTypography>
            <MKTypography variant="body2" mt={1} color="light">
              Todas las inscripciones serán validadas antes de ser admitidas
            </MKTypography>
          </Grid>

          <MKBox
            width={"100%"}
            sx={{
              marginBottom: {
                xs: 15,
                sm: 15,
              },
            }}
          >
            <Grid
              container
              mx={"auto"}
              justifyContent="center"
              alignItems={"center"}
              sx={{
                width: "100%",
                gap: {
                  xs: 10,
                  md: 3,
                },
              }}
            >
              <Grid item xs={11} sm={8} md={5} lg={5} xl={3}>
                <CardPrice
                  prefprecio="S/."
                  precio={15}
                  consumidor="Legado de la ESIS"
                  desc="Estudiante o egresado"
                  imagenPrecio={esisLogo}
                  incluye={incluido}
                  typeattendee={1}
                  steps={[
                    "Datos personales",
                    "Soy un estudiante",
                    "Foto de recibo",
                    "Soy un humano",
                  ]}
                />
              </Grid>
              <Grid item xs={11} sm={8} md={5} lg={5} xl={3}>
                <CardPrice
                  prefprecio="S/."
                  precio={20}
                  consumidor="Estudiante"
                  desc="Visitante externo de ESIS"
                  imagenPrecio={estudiante}
                  incluye={incluido}
                  typeattendee={2}
                  steps={[
                    "Datos personales",
                    "Soy un estudiante",
                    "Foto de recibo",
                    "Soy un humano",
                  ]}
                />
              </Grid>
              <Grid item xs={11} sm={8} md={5} lg={5} xl={3}>
                <CardPrice
                  prefprecio="S/."
                  precio={25}
                  consumidor="Público general"
                  desc="Profesionales y otros"
                  imagenPrecio={profesionales}
                  incluye={incluido}
                  typeattendee={3}
                  steps={["Datos personales", "Foto de recibo", "Soy un humano"]}
                />
              </Grid>
            </Grid>

            {/* <MKTypography variant="h6" color="light" textAlign="center" pt={4}>
              Descuento extendido hasta las 11:59pm del 09 de agosto del 2023 (UTC -5)
            </MKTypography> */}
          </MKBox>
        </Grid>
      </MKBox>

      <MKBox>
        <Card sx={{ mt: -4, mx: { lg: 3, xs: 2 }, p: 2, pb: 15, background: "#ffffff" }}>
          <MetodosPago />
        </Card>
      </MKBox>

      <CenteredFooter />
    </>
  );
}
