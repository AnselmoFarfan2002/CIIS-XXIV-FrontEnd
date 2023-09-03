import { alpha } from "@mui/material/styles";

let colors = {
  bg: {
    main: "rgb(16, 20, 24)",
    secondary: "rgb(20, 50, 60)",
    light: "#515764",
  },
  primary: {
    main: "rgb(0, 58, 117)",
    light: "#00508B",
    dark: "#3399FF",
  },
  secondary: {
    main: "#008C9D",
    light: "#2B777C",
    dark: "#2B777C", // Puedes ajustar esto según tus necesidades
  },
  fonts: {
    main: "#fff",
  },

  dark: {
    main: "#fff",
    focus: "#2c3c58",
  },

  gradients: {
    primary: {
      main: "#EC407A",
      state: "#D81B60",
    },

    secondary: {
      main: "#747b8a",
      state: "#495361",
    },

    info: {
      main: "#49a3f1",
      state: "#1A73E8",
    },

    success: {
      main: "#66BB6A",
      state: "#43A047",
    },

    warning: {
      main: "#FFA726",
      state: "#FB8C00",
    },

    error: {
      main: "#EF5350",
      state: "#E53935",
    },

    light: {
      main: "#EBEFF4",
      state: "#CED4DA",
    },

    dark: {
      main: "#42424a",
      state: "#191919",
    },
  },
  socialMediaColors: {
    facebook: {
      main: "#3b5998",
      dark: "#344e86",
    },

    twitter: {
      main: "#55acee",
      dark: "#3ea1ec",
    },

    instagram: {
      main: "#125688",
      dark: "#0e456d",
    },

    linkedin: {
      main: "#0077b5",
      dark: "#00669c",
    },

    pinterest: {
      main: "#cc2127",
      dark: "#b21d22",
    },

    youtube: {
      main: "#e52d27",
      dark: "#d41f1a",
    },

    vimeo: {
      main: "#1ab7ea",
      dark: "#13a3d2",
    },

    slack: {
      main: "#3aaf85",
      dark: "#329874",
    },

    dribbble: {
      main: "#ea4c89",
      dark: "#e73177",
    },

    github: {
      main: "#24292e",
      dark: "#171a1d",
    },

    reddit: {
      main: "#ff4500",
      dark: "#e03d00",
    },

    tumblr: {
      main: "#35465c",
      dark: "#2a3749",
    },
  },
};

colors.bg.gradient = (angle) =>
  `linear-gradient(${angle}deg, ${colors.bg.main} 0%, ${alpha(
    colors.primary.main,
    0.2
  )} 100%)`;

colors.bg.gradientSolid = (angle) =>
  `linear-gradient(${angle}deg, ${colors.bg.main} 0%, ${alpha(
    colors.primary.main,
    0.2
  )} 100%), ${colors.bg.main}`;

export default colors;
