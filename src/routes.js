import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

const routes = [
  {
    name: "PostMaster",
    icon: <AccountBalanceIcon />,
    href: "/postmaster",
  },
  {
    name: "Ediciones anteriores",
    icon: <HistoryEduIcon />,
    href: "#history",
  },
];

export const routesOutMain = [
  {
    name: "Sitio oficial CIIS",
    icon: <AccountBalanceIcon />,
    href: "/",
  },
];

export default routes;
