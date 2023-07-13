import { React, useState } from "react";
import logo from "../../assets/images/logos/logo-jackelin-postmaster.jpg";
import {
  Grid,
  Card,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import "./loginInscripcion.css";
import PropTypes from "prop-types";
// import Viñeta from "../../assets/theme/components/vinneta/Vinneta";
import MKAvatar from "components/MKAvatar";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";

const Precios1 = ({ precio, consumidor, imagenPrecio, desc, incluye }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <Card
        sx={{
          borderRadius: 8,
          paddingTop: 5,
          paddingBottom: 5,
        }}
        align="center"
        shadow="lg"
      >
        <Box mt={-12} mb={3}>
          <MKAvatar src={imagenPrecio} alt="Estudiante" size="xxl" shadow="lg" bgColor="light" />
        </Box>
        <Box>
          <MKBox>
            <Typography variant="h2" align="center" mb={0}>
              {precio}
            </Typography>
            <Typography variant="h4" align="center" mb={1}>
              {consumidor}
            </Typography>
            <Typography variant="body2" align="center">
              {desc}
            </Typography>
          </MKBox>
          <MKBox my={2} opacity={0.9}>
            <Typography variant="h5" textTransform="uppercase">
              Incluye
            </Typography>
          </MKBox>

          <MKBox maxWidth={200} mx={"auto"} mb={3}>
            <List>
              {incluye.map((element, idx) => {
                return (
                  <ListItem key={idx}>
                    <ListItemIcon>
                      <CheckCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary={element} />
                  </ListItem>
                );
              })}
            </List>
          </MKBox>

          <MKButton color="success" onClick={handleOpen}>
            <AppRegistrationIcon /> Inscribirse
          </MKButton>
        </Box>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle align="center">
            <MKBox mx={"auto"}>
              <MKAvatar src={logo} alt="POSTMASTER XX" size="xxl" />
            </MKBox>
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
                    <select
                      className="format-text"
                      value={selectedOption}
                      onChange={handleOptionChange}
                      style={{ width: "80%", borderWidth: "2px" }}
                    >
                      <option value="" disabled>
                        Sexo
                      </option>
                      <option value="opcion1">Masculino</option>
                      <option value="opcion2">Femenino</option>
                    </select>
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
                    <select
                      className="format-text"
                      value={selectedOption}
                      onChange={handleOptionChange}
                      style={{ width: "80%", borderWidth: "2px" }}
                    >
                      <option value="" disabled>
                        Carrera
                      </option>
                      <option value="opcion1">Masculino</option>
                      <option value="opcion2">Femenino</option>
                    </select>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <select
                      className="format-text"
                      value={selectedOption}
                      onChange={handleOptionChange}
                      style={{ width: "80%", borderWidth: "2px" }}
                    >
                      <option value="" disabled>
                        Modalidad de Pago
                      </option>
                      <option value="opcion1">Masculino</option>
                      <option value="opcion2">Femenino</option>
                    </select>
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
  desc: PropTypes.string.isRequired,
  incluye: PropTypes.array.isRequired,
};
export default Precios1;
