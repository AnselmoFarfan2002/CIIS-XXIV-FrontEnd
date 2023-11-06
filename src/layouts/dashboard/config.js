import {
  AccountBalance,
  AccountBox,
  Class,
  CollectionsBookmark,
  EmojiEvents,
  Event,
  Home,
  People,
} from "@mui/icons-material";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Inicio",
    path: "/dashboard",
    icon: (
      <SvgIcon fontSize="small">
        <Home />
      </SvgIcon>
    ),
    disabled: false,
  },
  {
    title: "Congreso",
    path: "/dashboard/ciis",
    icon: (
      <SvgIcon fontSize="small">
        <AccountBalance />
      </SvgIcon>
    ),
    disabled: false,
  },
  {
    title: "Talleres",
    path: "/dashboard/talleres",
    icon: (
      <SvgIcon fontSize="small">
        <Class />
      </SvgIcon>
    ),
  },
  {
    title: "Asistencia",
    path: "/dashboard/asistencia",
    icon: (
      <SvgIcon fontSize="small">
        <People />
      </SvgIcon>
    ),
    disabled: false,
  },
];
