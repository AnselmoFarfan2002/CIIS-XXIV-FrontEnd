import { React, useState, forwardRef } from "react";
import {
  Grid,
  Card,
  Typography,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Fade,
} from "@mui/material";
import "./loginInscripcion.css";
import PropTypes from "prop-types";
import MKAvatar from "components/MKAvatar";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";

import IconStepper from "components/IconStepper/IconStepper";
import ImageUpload from "components/ImageUpload/ImageUpload";

import defaultVoucher from "assets/images/deafults/default-image-voucher.png";

const steps = ["Datos personales", "Documento de estudiante", "Recibo de pago"];

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade direction="up" ref={ref ? ref : null} {...props} />;
});

const Precios1 = ({ precio, consumidor, imagenPrecio, desc, incluye }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [activeStep, setActiveStep] = useState(0); // Estado para el paso activo

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
          <MKAvatar
            src={imagenPrecio}
            alt="Estudiante"
            size="xxl"
            shadow="lg"
            bgColor="light"
            sx={{ backgroundSize: "cover" }}
          />
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

          <MKButton color="success" variant="gradient" onClick={handleOpen}>
            <AppRegistrationIcon /> Inscribirse
          </MKButton>
        </Box>

        <Dialog open={open} onClose={handleClose} TransitionComponent={Transition}>
          <DialogContent align="center">
            <MKBox mx={"auto"} mt={5}>
              <MKAvatar src={imagenPrecio} alt="POSTMASTER XX" size="xxl" />
            </MKBox>
            <Typography variant="subtitle2" align="center" mb={-0.5}>
              Inscribiendote como
            </Typography>
            <Typography variant="h4" align="center" my={1}>
              {consumidor}
            </Typography>
            <Typography variant="subtitle2" align="center">
              {desc}
            </Typography>

            <MKBox my={3}>
              <IconStepper steps={steps} activeStep={activeStep} />
            </MKBox>

            {activeStep === 0 && (
              <MKBox mt={2} mb={4}>
                <Grid
                  container
                  spacing={3}
                  width="100%"
                  textAlign={"center"}
                  justifyContent={"center"}
                >
                  <Grid item xs={12} sm={6} md={5}>
                    <MKInput type="text" variant="standard" label="Nombre" name="name" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={5}>
                    <MKInput
                      type="text"
                      variant="standard"
                      label="Primer apellido"
                      name="firstLastName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={5}>
                    <MKInput
                      type="text"
                      variant="standard"
                      label="Segundo apellido"
                      name="secondLastName"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={5}>
                    <MKInput type="text" variant="standard" label="DNI" name="dni" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={5}>
                    <MKInput type="text" variant="standard" label="Celular" name="cellphone" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={5}>
                    <MKInput type="email" variant="standard" label="Correo" name="email" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={5}>
                    <MKInput
                      type="text"
                      variant="standard"
                      label="Centro de estudios"
                      name="institution"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={5}>
                    <MKInput type="text" variant="standard" label="Carrera" name="career" />
                  </Grid>
                </Grid>
              </MKBox>
            )}
            {activeStep === 1 && (
              <MKBox mt={2} mb={4}>
                <ImageUpload />
              </MKBox>
            )}
            {activeStep === 2 && (
              <MKBox mt={2} mb={4}>
                <ImageUpload textButton="Seleccione imagen de pago" defaultImg={defaultVoucher} />
              </MKBox>
            )}
          </DialogContent>

          <DialogActions>
            <MKBox mb={1}>
              <MKButton onClick={handleClose} variant="text" color="secondary">
                Cerrar
              </MKButton>
              {activeStep > 0 ? (
                <MKButton onClick={handleBack} variant="text" color="info">
                  Atrás
                </MKButton>
              ) : (
                <MKButton onClick={handleBack} variant="text" color="info" disabled>
                  Atrás
                </MKButton>
              )}
              {activeStep < steps.length - 1 ? (
                <MKButton onClick={handleNext} variant="text" color="info">
                  Siguiente
                </MKButton>
              ) : (
                <MKButton onClick={handleNext} variant="text" color="info" disabled>
                  Siguiente
                </MKButton>
              )}
            </MKBox>
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
