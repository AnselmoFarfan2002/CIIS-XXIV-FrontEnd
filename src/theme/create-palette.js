import { common } from "@mui/material/colors";
import { alpha } from "@mui/material/styles";
import {
  blue,
  error,
  grey,
  indigo,
  info,
  neutral,
  success,
  warning,
} from "./colors";
import colors from "@/styles/colors";

export function createPalette() {
  return {
    action: {
      active: neutral[500],
      disabled: alpha(neutral[900], 0.38),
      disabledBackground: alpha(neutral[900], 0.12),
      focus: alpha(neutral[900], 0.16),
      hover: alpha(neutral[900], 0.04),
      selected: alpha(neutral[900], 0.12),
    },
    background: {
      default: common.white,
      paper: colors.bg.light,
    },
    divider: "#1A1A29",
    error,
    info,
    mode: "dark",
    neutral,
    primary: indigo,
    success,
    grey: grey,
    blue: blue,
    text: {
      primary: neutral[50],
      secondary: neutral[400],
      disabled: alpha(neutral[900], 0.38),
    },
    warning,
  };
}
