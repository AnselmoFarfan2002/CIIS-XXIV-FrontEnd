import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemText, Typography, Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
const Viñeta = ({ contenido }) => {
  return (
    <ListItem>
      <Grid container>
        <Grid item xs={1} md={4}></Grid>
        <Grid item xs={1} md={1}>
          <Typography variant="body1" component="span">
            <CircleIcon sx={{ backgroundSize: "100% 100%" }} />
          </Typography>
        </Grid>
        <Grid item xs={10} md={7}>
          <ListItemText primary={contenido} />
        </Grid>
      </Grid>
    </ListItem>
  );
};
Viñeta.propTypes = {
  contenido: PropTypes.string.isRequired,
};
export default Viñeta;
