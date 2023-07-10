import React from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { PMroutes } from "routes";
import { Grid, Typography, Box } from "@mui/material";
import bgImage from "assets/images/campus-unjbg.jpeg";
import Precios from "../../components/login/Precios";
import logo from "../../assets/images/logos/gray-logos/logo-netflix.svg";
import EditNoteIcon from "@mui/icons-material/EditNote";
export default class SignUpPostMaster extends React.Component {
  render() {
    return (
      <>
        <DefaultNavbar routes={PMroutes} transparent light></DefaultNavbar>
        <Box
          padding={5}
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
          }}
          component="form"
        >
          <img
            src={logo}
            alt="Descripción de la imagen"
            style={{ width: "250px", height: "auto" }}
          />
          <Typography variant="body1" color="textPrimary" align="justify">
            <EditNoteIcon />
            INSCRIPCIONES
          </Typography>
          <Grid
            container
            p={2}
            pb={2}
            justifyContent="space-evenly"
            spacing={3}
            sx={{ width: "100%" }}
          >
            <Grid item xs={12} md={4}>
              <Precios />
            </Grid>
            <Grid item xs={12} md={4}>
              <Precios />
            </Grid>
            <Grid item xs={12} md={4}>
              <Precios />
            </Grid>
          </Grid>
          <Typography variant="h4" mb={4} align="left">
            MODALIDAD DE PAGO
          </Typography>
          <Typography variant="h4" mb={4} align="left">
            Deposito en agentes:
          </Typography>
          <Grid container>
            <Grid item xs={12} md={4}>
              <img
                src="https://cmactacna.com.pe/wp-content/themes/cajatacna/img/logo.svg"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://cmactacna.com.pe/wp-content/themes/cajatacna/img/logo.svg"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://cmactacna.com.pe/wp-content/themes/cajatacna/img/logo.svg"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://cmactacna.com.pe/wp-content/themes/cajatacna/img/logo.svg"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://cmactacna.com.pe/wp-content/themes/cajatacna/img/logo.svg"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
            </Grid>
          </Grid>
          <Typography variant="h4" mb={4} align="left">
            Deposito por app movil:
          </Typography>
          <Grid container>
            <Grid item xs={12} md={4}>
              <img
                src="https://cmactacna.com.pe/wp-content/themes/cajatacna/img/logo.svg"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://cmactacna.com.pe/wp-content/themes/cajatacna/img/logo.svg"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <img
                src="https://cmactacna.com.pe/wp-content/themes/cajatacna/img/logo.svg"
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
