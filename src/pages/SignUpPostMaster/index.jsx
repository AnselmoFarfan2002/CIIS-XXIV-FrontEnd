import { React } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { PMroutes } from "routes";
import { Grid, Typography, Card } from "@mui/material";
import Precios1 from "../../components/login/Precios";
import MKBox from "components/MKBox";
import bgImage from "assets/images/campus-unjbg.jpeg";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";
// import Container from "assets/theme/components/container";

import esisLogo from "assets/images/logos/esis-logo.png";
import profesionales from "assets/images/profesionales.jpg";
import estudiante from "assets/images/estudiante.jpg";
const incluido = ["Certficación", "Kit Postmaster"];

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
                <Precios1
                  precio="S/. 15"
                  consumidor="Legado de la ESIS"
                  desc="Estudiante o egresado"
                  imagenPrecio={esisLogo}
                  incluye={incluido}
                />
              </Grid>
              <Grid item xs={11} sm={8} md={5} lg={5} xl={3}>
                <Precios1
                  precio="S/. 20"
                  consumidor="Estudiante"
                  desc="Visitante externo de ESIS"
                  imagenPrecio={estudiante}
                  incluye={incluido}
                />
              </Grid>
              <Grid item xs={11} sm={8} md={5} lg={5} xl={3}>
                <Precios1
                  precio="S/. 25"
                  consumidor="Público general"
                  desc="Profesionales y otros"
                  imagenPrecio={profesionales}
                  incluye={incluido}
                />
              </Grid>
            </Grid>
          </MKBox>
        </Grid>
      </MKBox>

      <MKBox>
        <Card
          container
          justifyContent="space-evenly"
          sx={{ mb: 4, mt: -4, mx: { lg: 3, xs: 2 }, p: 2, background: "#ffffff" }}
        >
          <Grid container align="center">
            <Grid item xs={12} md={12}>
              <Typography variant="h4" mb={4} textAlign="center">
                MODALIDAD DE PAGO
              </Typography>
            </Grid>
            <Grid item xs={12} md={12} align="left">
              <Typography variant="h4" mb={4}>
                Deposito en agentes:
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Interbank_logo.svg/2560px-Interbank_logo.svg.png"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
              <Typography variant="h6" mb={4}>
                cuenta: 003-456-567-567
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://enviotodo.pe/wp-content/uploads/2018/07/logo-banco-nacion-peru.png"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
              <Typography variant="h6" mb={4}>
                cuenta: 003-456-567-567
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/BBVA_2019.svg/2560px-BBVA_2019.svg.png"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
              <Typography variant="h6" mb={4}>
                cuenta: 003-456-567-567
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Logo_Scotiabank_%28Kanada%29.svg/2560px-Logo_Scotiabank_%28Kanada%29.svg.png"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
              <Typography variant="h6" mb={4}>
                cuenta: 003-456-567-567
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Logo-bcp-vector.svg/2560px-Logo-bcp-vector.svg.png"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
              <Typography variant="h6" mb={4}>
                cuenta: 003-456-567-567
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} align="left">
            <Typography variant="h4" mb={4}>
              Deposito por app movil:
            </Typography>
          </Grid>
          <Grid container align="center">
            <Grid item xs={12} md={4}>
              <img
                src="https://www.yape.com.pe/assets/images/logo.png"
                alt="Descripción de la imagen"
                style={{ width: "150px", height: "auto" }}
              />
              <br />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1024px-Codigo_QR.svg.png"
                alt="Descripción de la imagen"
                style={{ width: "150px", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://seeklogo.com/images/P/plin-logo-0C4106153C-seeklogo.com.png"
                alt="Descripción de la imagen"
                style={{ width: "150px", height: "auto" }}
              />
              <br />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1024px-Codigo_QR.svg.png"
                alt="Descripción de la imagen"
                style={{ width: "150px", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://seeklogo.com/images/T/tunki-logo-8BAD04C387-seeklogo.com.png"
                alt="Descripción de la imagen"
                style={{ width: "150px", height: "auto" }}
              />
              <br />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1024px-Codigo_QR.svg.png"
                alt="Descripción de la imagen"
                style={{ width: "150px", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Card>
      </MKBox>
    </>
  );
}
