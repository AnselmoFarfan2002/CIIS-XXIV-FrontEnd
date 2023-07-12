import { React } from "react";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import { PMroutes } from "routes";
import { Grid, Typography, Box } from "@mui/material";
import Precios1 from "../../components/login/Precios";
import logo from "../../assets/images/logos/logo-jackelin-postmaster.jpg";
import EditNoteIcon from "@mui/icons-material/EditNote";
export default function SignUpPostMaster() {
  return (
    <>
      <DefaultNavbar routes={PMroutes} transparent light></DefaultNavbar>
      <Box
        paddingTop={10}
        paddingLeft={10}
        paddingRight={7}
        minHeight="100vh"
        width="100%"
        component="form"
        alignItems={"center"}
      >
        <Grid align="center">
          <img
            src={logo}
            alt="Descripción de la imagen"
            style={{ width: "250px", height: "auto" }}
          />
          <Typography
            style={{ fontWeight: "bold", color: "blue" }}
            variant="body1"
            color="textPrimary"
            align="center"
          >
            <EditNoteIcon />
            INSCRIPCIONES
          </Typography>
        </Grid>
        <Grid
          container
          p={0}
          pb={0}
          justifyContent="space-evenly"
          spacing={3}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={4}>
            <Precios1
              precio="30 lujanes"
              consumidor="egresado"
              imagenPrecio="https://cdn-icons-png.flaticon.com/512/201/201565.png"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Precios1
              precio="20 lujanes"
              consumidor="universitario"
              imagenPrecio="https://cdn-icons-png.flaticon.com/512/167/167750.png"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Precios1
              precio="10 lujanes"
              consumidor="publico"
              imagenPrecio="https://cdn-icons-png.flaticon.com/512/1754/1754915.png"
            />
          </Grid>
        </Grid>
        <Grid
          container
          p={2}
          pb={2}
          justifyContent="space-evenly"
          spacing={3}
          sx={{ width: "100%" }}
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
        </Grid>
      </Box>
    </>
  );
}
