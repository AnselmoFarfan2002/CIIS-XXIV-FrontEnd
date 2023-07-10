import React from "react";
import { Card, Typography, List, Button, Avatar, Box } from "@mui/material";
import "./loginInscripcion.css";
import Viñeta from "../../assets/theme/components/vinneta/Vinneta";
export default function Precios() {
  return (
    <>
      <Card
        sx={{
          paddingLeft: 3,
          paddingRight: 3,
          paddingTop: 5,
          paddingBottom: 5,
          mx: { xs: 4, lg: 5 },
          mb: 4,
          marginTop: 10,
          backgroundColor: "#ffffff",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
        align="center"
        fullWidth
      >
        <Box align="center">
          <Box mt={-10} mb={5} maxWidth={250}>
            <Avatar sx={{ width: 100, height: 100 }} fullWidth>
              H
            </Avatar>
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" align="center" mb={4}>
            30 lujanes
          </Typography>
          <Typography variant="h5" align="center" mb={4}>
            ESTUDIANTES
          </Typography>
          <List>
            <Viñeta contenido="Certificado" />
            <Viñeta contenido="Kit postmaster" />
          </List>
          <Button align="center">INSCRIBIRSE</Button>
        </Box>
      </Card>
    </>
  );
}
