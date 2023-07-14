import React from "react";
import { styled } from "@mui/material/styles";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import { Check } from "@mui/icons-material";
import StepConnector, { stepConnectorClasses } from "@mui/material/StepConnector";
import PropTypes from "prop-types";
import MKTypography from "components/MKTypography";
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
    zIndex: 1,
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
  completed: PropTypes.string,
  className: PropTypes.string,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
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

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage: colorStepper,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  }),
  ...(ownerState.completed && {
    backgroundImage: colorStepper,
  }),
}));

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BadgeIcon from "@mui/icons-material/Badge";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <AssignmentIndIcon />,
    2: <BadgeIcon />,
    3: <RequestQuoteIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  active: PropTypes.number,
  completed: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
};

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

export default function IconStepper({ steps, activeStep }) {
  return (
    <ThemeProvider theme={theme}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>
              <MKTypography variant="body3">{label}</MKTypography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </ThemeProvider>
  );
}

IconStepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.String),
  activeStep: PropTypes.number,
};
