import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemText, Typography } from "@mui/material";

const Viñeta = ({ contenido }) => {
  return (
    <ListItem>
      <Typography variant="body1" component="span">
        •
      </Typography>
      <ListItemText primary={contenido} />
    </ListItem>
  );
};
Viñeta.propTypes = {
  contenido: PropTypes.string.isRequired,
};
export default Viñeta;
