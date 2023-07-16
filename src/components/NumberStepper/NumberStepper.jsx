import React from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { Check } from "@mui/icons-material";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import PropTypes from "prop-types";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const colorStepper =
  "linear-gradient(136deg, rgb(0, 204, 204) 0%, rgb(0, 153, 153) 50%, rgb(0, 102, 102) 100%)";

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.string,
  completed: PropTypes.bool,
  className: PropTypes.string,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {},
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: colorStepper,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: colorStepper,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const theme = createTheme({
  components: {
    MuiStepper: {
      styleOverrides: {
        root: {
          "&.MuiStepper-root": {
            backgroundColor: "transparent", // Quita el color de fondo
            boxShadow: "none", // Quita la sombra
          },
        },
      },
    },
  },
});

export default function NumberStepper({ steps, activeStep }) {
  return (
    <ThemeProvider theme={theme}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label, idx) => (
          <Step key={new Date().getTime() / (idx + 1)}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </ThemeProvider>
  );
}

NumberStepper.propTypes = {
  steps: PropTypes.array,
  activeStep: PropTypes.number,
};
