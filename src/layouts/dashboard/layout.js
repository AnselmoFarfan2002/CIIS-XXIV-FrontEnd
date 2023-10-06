import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { withAuthGuard } from "src/hocs/with-auth-guard";
import { SideNav } from "./side-nav";
import { createTheme as localTheme } from "@/theme";
import { TopNav } from "./top-nav";
import { Box } from "@mui/material";

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  fontWeight: "normal !important",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});

const DashboardLayout = withAuthGuard((props) => {
  const { children } = props;
  const theme = localTheme();
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(false);
    }
  }, [openNav]);

  useEffect(() => {
    document.querySelector("body").style.background = "#242433";
  }, []);

  useEffect(
    () => {
      handlePathnameChange();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pathname]
  );

  const theme2 = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TopNav onNavOpen={() => setOpenNav(true)} />
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>
          <Box p={8} pr={0}>
            {children}
          </Box>
        </LayoutContainer>
      </LayoutRoot>
    </ThemeProvider>
  );
});

export default DashboardLayout;
