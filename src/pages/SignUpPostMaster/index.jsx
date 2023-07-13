import { React } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { PMroutes } from "routes";
import { Grid, Typography } from "@mui/material";
import Precios1 from "../../components/login/Precios";
import MKBox from "components/MKBox";
import bgImage from "assets/images/campus-unjbg.jpeg";
import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

const incluido = ["Participación", "Certificado", "Kit Postmaster"];

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
          display: "grid",
          placeItems: "center",
        }}
        alignItems={"center"}
        px={6}
        py={"auto"}
        bgColor="info"
        variant="gradient"
      >
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 0, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Detalles de inscripción"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold" color="light">
            Precios de inscripción
          </MKTypography>
        </Grid>

        <Grid
          container
          mx={"auto"}
          justifyContent="center"
          alignItems={"center"}
          gap={3}
          mt={-10}
          sx={{ width: "100%" }}
        >
          <Grid item xs={8} md={5} lg={5} xl={3}>
            <Precios1
              precio="S/. 15"
              consumidor="Legado de la ESIS"
              desc="Estudiante o egresado"
              imagenPrecio="https://cdn-icons-png.flaticon.com/512/201/201565.png"
              incluye={incluido}
            />
          </Grid>
          <Grid item xs={8} md={5} lg={5} xl={3}>
            <Precios1
              precio="S/. 20"
              consumidor="Estudiantes"
              desc="Estudiante externo"
              imagenPrecio="https://cdn-icons-png.flaticon.com/512/167/167750.png"
              incluye={incluido}
            />
          </Grid>
          <Grid item xs={8} md={5} lg={5} xl={3}>
            <Precios1
              precio="S/. 25"
              consumidor="Público general"
              desc="Profesionales y otros"
              imagenPrecio="https://cdn-icons-png.flaticon.com/512/1754/1754915.png"
              incluye={incluido}
            />
          </Grid>
        </Grid>
      </MKBox>
      <MKBox>
        <Grid container justifyContent="space-evenly" sx={{ width: "100%" }}>
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
        </Grid>
      </MKBox>
    </>
  );
}
