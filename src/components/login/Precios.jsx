import { React, useState } from "react";
import logo from "../../assets/images/logos/logo-jackelin-postmaster.jpg";
import {
  Grid,
  Card,
  Typography,
  List,
  Button,
  Avatar,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "./loginInscripcion.css";
import PropTypes from "prop-types";
import Viñeta from "../../assets/theme/components/vinneta/Vinneta";
const Precios1 = ({ precio, consumidor, imagenPrecio }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        sx={{
          paddingLeft: 3,
          paddingRight: 3,
          paddingTop: 5,
          paddingBottom: 5,
          mb: 4,
          marginTop: 10,
          backgroundColor: "#ffffff",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
        align="center"
        fullWidth
      >
        <Box>
          <Box mt={-15} mb={5}>
            <Avatar sx={{ width: 150, height: 150 }} fullWidth>
              <img
                src={imagenPrecio}
                alt="Descripción de la imagen"
                style={{ width: "100%", height: "auto" }}
              />
            </Avatar>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" align="center" mb={4}>
            {precio}
          </Typography>
          <Typography variant="h5" align="center" mb={4}>
            {consumidor}
          </Typography>
          <Typography align="left" paddingLeft={5}>
            Incluye
          </Typography>
          <List>
            <Viñeta contenido="Certificado" />
            <Viñeta contenido="Kit postmaster" />
          </List>
          <Button align="center" onClick={handleOpen}>
            INSCRIBIRSE
          </Button>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle align="center">
            <img
              src={logo}
              alt="Descripción de la imagen"
              style={{ width: "250px", height: "auto" }}
            />
          </DialogTitle>
          <DialogContent align="center">
            <div>
              <Typography variant="h4" align="center" mb={4}>
                INCRIPCION DE ESTUDIANTE
              </Typography>
              <Typography variant="h7" align="center" mb={4}>
                INGRESA TUS DATOS PERSONALES
              </Typography>
              <form action="">
                <Grid
                  container
                  p={2}
                  pb={2}
                  justifyContent="space-evenly"
                  spacing={3}
                  sx={{ width: "100%" }}
                  textAlign={"center"}
                >
                  <Grid item xs={12} md={6}>
                    <input type="text" className="format-text" placeholder="Nombre" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input type="text" className="format-text" placeholder="Apellidos" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input type="text" className="format-text" placeholder="Sexo" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input type="text" className="format-text" placeholder="Dni" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input type="text" className="format-text" placeholder="Celular" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input type="text" className="format-text" placeholder="Correo Institucional" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input type="text" className="format-text" placeholder="Ciclo" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input type="text" className="format-text" placeholder="Carrera" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <input type="text" className="format-text" placeholder="Modalidad de pago" />
                  </Grid>
                </Grid>
              </form>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </Card>
    </>
  );
};
Precios1.propTypes = {
  precio: PropTypes.string.isRequired,
  consumidor: PropTypes.string.isRequired,
  imagenPrecio: PropTypes.string.isRequired,
};
export default Precios1;
