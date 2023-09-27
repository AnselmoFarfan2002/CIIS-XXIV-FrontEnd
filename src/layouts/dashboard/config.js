import {
  AccountBalance,
  AccountBox,
  CollectionsBookmark,
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
  },
  {
    title: "Programa",
    path: "/programa",
    icon: (
      <SvgIcon fontSize="small">
        <CollectionsBookmark />
      </SvgIcon>
    ),
  },
  {
    title: "Ponencias",
    path: "/ponencias",
    icon: (
      <SvgIcon fontSize="small">
        <AccountBalance />
      </SvgIcon>
    ),
  },
];
