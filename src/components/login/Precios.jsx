import { React } from "react";
import { Card, Typography, Box } from "@mui/material";
import "./loginInscripcion.css";
import PropTypes from "prop-types";
// import Viñeta from "../../assets/theme/components/vinneta/Vinneta";
import MKAvatar from "components/MKAvatar";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MKBox from "components/MKBox";
import Login from "./Login";
const Precios1 = ({ precio, consumidor, imagenPrecio, desc, incluye }) => {
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
          <Login />
        </Box>
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
