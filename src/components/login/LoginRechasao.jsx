import React from "react";
import { Grid, Typography, Button, InputLabel, Input, Card } from "@mui/material";
import logo from "../../assets/images/logos/gray-logos/logo-netflix.svg";
import "./login.css";
export default function LoginRechasao() {
  return (
    <Card
      sx={{
        paddingLeft: 3,
        mx: { xs: 4, lg: 40 },
        mb: 4,
        marginTop: 10,
        backgroundImage:
          "url('https://img.freepik.com/vector-premium/fondo-formas-superpuestas_23-2148667678.jpg?w=1060')",
        boxShadow: ({ boxShadows: { xxl } }) => xxl,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="form-container">
        <Typography variant="h2" align="center" mb={4}>
          Formulario de Incripcion
        </Typography>
        <form action="">
          <Grid
            container
            alignContent="center"
            justifyContent="space-evenly"
            spacing={3}
            sx={{ width: "100%" }}
          >
            <Grid item xs={12} md={8} container spacing={2}>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="Nombres" sx={{ color: "#000000" }}>
                  Ingrese Nombres:
                </InputLabel>
                <Input type="text" id="Nombres" fullWidth sx={{ background: "#ffffff" }} />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="Apellido1" sx={{ color: "#000000" }}>
                  Ingrese Apellido Paterno:
                </InputLabel>
                <Input type="text" id="Apellido1" sx={{ background: "#ffffff" }} fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel type="text" htmlFor="Apellido2" sx={{ color: "#000000" }}>
                  Ingrese Materno:
                </InputLabel>
                <Input type="text" id="Apellido2" sx={{ background: "#ffffff" }} fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="Email" sx={{ color: "#000000" }}>
                  Ingrese Email:
                </InputLabel>
                <Input type="email" id="Email" sx={{ background: "#ffffff" }} fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="Celular" sx={{ color: "#000000" }}>
                  Ingrese Celular:
                </InputLabel>
                <Input type="text" id="Celular" sx={{ background: "#ffffff" }} fullWidth />
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel htmlFor="password" sx={{ color: "#000000" }}>
                  Contraseña:
                </InputLabel>
                <Input type="password" id="password" sx={{ background: "#ffffff" }} fullWidth />
              </Grid>
              <Grid item xs={12} md={12}>
                <InputLabel htmlFor="boucher" sx={{ color: "#000000" }}>
                  Ingrese boucher:
                </InputLabel>
                <input type="file" style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={12} md={12} container justifyContent="center" alignItems="center">
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    color: "#000000",
                    background: "#ffffff",
                  }}
                >
                  Registrar
                </Button>
              </Grid>
            </Grid>
            <Grid container item xs={12} md={4} justifyContent="center">
              <img
                src={logo}
                alt="Descripción de la imagen"
                style={{ width: "250px", height: "auto" }}
              />
              <Typography variant="body1" color="textPrimary" align="justify">
                En caso de necesitar alguna ayuda llamar a Anselmo 5to año ESIS su numero es
                ********
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
    </Card>
  );
}
