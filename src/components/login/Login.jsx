import React from "react";
import { Card, Grid, Typography } from "@mui/material";
import "./loginInscripcion.css";
export default function Login() {
  return (
    <>
      <Card
        sx={{
          paddingLeft: 3,
          mx: { xs: 4, lg: 30 },
          mb: 4,
          marginTop: 10,
          backgroundColor: "#ffffff",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <div>
          <Typography variant="h4" align="center" mb={4}>
            INCRIPCION DE ESTUDIANTE
          </Typography>
          <Typography variant="h5" align="center" mb={4}>
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
            >
              <Grid item xs={12} md={6}>
                <input type="text" className="format-text" />
              </Grid>
              <Grid item xs={12} md={6}>
                <input type="text" className="format-text" />
              </Grid>
              <Grid item xs={12} md={6}>
                <input type="text" className="format-text" />
              </Grid>
              <Grid item xs={12} md={6}>
                <input type="text" className="format-text" />
              </Grid>
              <Grid item xs={12} md={6}>
                <input type="text" className="format-text" />
              </Grid>
              <Grid item xs={12} md={6}>
                <input type="text" className="format-text" />
              </Grid>
              <Grid item xs={12} md={6}>
                <input type="text" className="format-text" />
              </Grid>
              <Grid item xs={12} md={6}>
                <input type="text" className="format-text" />
              </Grid>
              <Grid item xs={12} md={6}>
                <input type="text" className="format-text" />
              </Grid>
            </Grid>
          </form>
        </div>
      </Card>
    </>
  );
}
