import { React, useState } from "react";
import {
  Grid,
  Typography,
  DialogTitle,
  DialogContent,
  Button,
  Dialog,
  DialogActions,
} from "@mui/material";
import MKBox from "components/MKBox";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import MKAvatar from "components/MKAvatar";
import MKButton from "components/MKButton";
import logo from "../../assets/images/logos/logo-jackelin-postmaster.jpg";
import "./loginInscripcion.css";
export default function Login() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <MKButton color="success" onClick={handleOpen}>
        <AppRegistrationIcon /> Inscribirse
      </MKButton>
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
                  <input type="text" id="name" className="format-text" placeholder="Nombre" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    type="text"
                    id="firstLastname"
                    className="format-text"
                    placeholder="Primer Apellido"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    type="text"
                    id="secondLastname"
                    className="format-text"
                    placeholder="Segundo Apellido"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input type="text" id="email" className="format-text" placeholder="Email" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input type="text" id="phone" className="format-text" placeholder="Celular" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    type="text"
                    id="numvoucher"
                    className="format-text"
                    placeholder="Numero de Voucher"
                  />
                </Grid>
              </Grid>
            </form>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cerrar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
