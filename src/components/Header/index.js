import colors from "@/styles/colors";
import {
  AppBar,
  Box,
  Button,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FacebookIcon from "@mui/icons-material/Facebook";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import { useState, useEffect } from "react";

import {
  Dashboard,
  Event,
  Home,
  LinkedIn,
  Login,
  Menu,
  YouTube,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { useAuth } from "@/context/auth";

const Header = (props) => {
  const { onLogin = () => {} } = props;
  const { logged } = useAuth();
  const [isAtTop, setIsAtTop] = useState(true);
  const [openMiniBar, useOpenMiniBar] = useState(false);
  const router = useRouter();

  const handleScroll = () => {
    setIsAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOpenMiniBar = () => {
    useOpenMiniBar(!openMiniBar);
  };

  return (
    <AppBar
      component={"header"}
      p={2}
      width={"100vw"}
      sx={{
        bgcolor: isAtTop ? "transparent" : "#101418",
        backgroundImage: "none",
        position: "fixed",
        transition: ".5s",
        ...(isAtTop ? { boxShadow: "none" } : {}),
      }}
    >
      <Hidden mdDown>
        <Grid
          container
          justifyContent={"center"}
          sx={{ position: "relative", py: 1 }}
        >
          <Grid item lg={8} md={10}>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <Button
                  sx={{ px: 5, py: 1, color: colors.fonts.main }}
                  onClick={() => router.push("/")}
                >
                  CIIS
                </Button>
              </Grid>
              <Grid item>
                <Button
                  sx={{
                    px: 2,
                    py: 1,
                    color: colors.fonts.main,
                    bgcolor: colors.primary.light,
                  }}
                  startIcon={<Event />}
                  variant="contained"
                  color="info"
                  onClick={() => router.push("/actividades")}
                >
                  <Typography fontSize={12} fontWeight={"bold"}>
                    Inscripciones
                  </Typography>
                </Button>
                <Button
                  sx={{ px: 2, py: 2, color: colors.fonts.main }}
                  onClick={() => router.push("/postmaster")}
                  startIcon={<AccountBalanceIcon />}
                >
                  <Typography fontSize={12}>Postmaster</Typography>
                </Button>
                <Button
                  sx={{ px: 2, py: 2, color: colors.fonts.main }}
                  onClick={() => router.push("/historia")}
                  startIcon={<HistoryEduIcon />}
                >
                  <Typography fontSize={12}>Ediciones anteriores</Typography>
                </Button>

                {logged ? (
                  <Button
                    sx={{ px: 2, py: 2, color: colors.fonts.main }}
                    onClick={() => router.push("/dashboard")}
                    startIcon={<Dashboard />}
                  >
                    <Typography fontSize={12}>Panel</Typography>
                  </Button>
                ) : (
                  <Button
                    sx={{ px: 2, py: 2, color: colors.fonts.main }}
                    onClick={onLogin}
                    startIcon={<Login />}
                  >
                    <Typography fontSize={12}>Ingresar</Typography>
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid
          container
          justifyContent={"center"}
          sx={{
            position: "relative",
            py: 1,
            bgcolor: !openMiniBar ? "transparent" : "#101418",
          }}
        >
          <Grid item xs={12}>
            <Grid container width={"100%"} flexDirection={"column"}>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  sx={{ px: 5, py: 1, color: colors.fonts.main }}
                  onClick={handleOpenMiniBar}
                >
                  <Menu />
                </Button>
              </Grid>
              {openMiniBar && (
                <>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{ px: 5, py: 1, color: colors.fonts.main, mt: 3 }}
                      onClick={() => router.push("/")}
                      startIcon={<Home />}
                    >
                      <Typography fontSize={12}>Inicio</Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{
                        px: 2,
                        py: 1,
                        color: colors.fonts.main,
                        bgcolor: colors.primary.light,
                      }}
                      startIcon={<Event />}
                      variant="contained"
                      color="info"
                      onClick={() => {
                        router.push("/actividades");
                        setTimeout(() => useOpenMiniBar(false), 500);
                      }}
                    >
                      <Typography fontSize={12} fontWeight={"bold"}>
                        Inscripciones
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{ px: 2, py: 2, color: colors.fonts.main }}
                      onClick={() => {
                        router.push("/postmaster");
                        setTimeout(() => useOpenMiniBar(false), 500);
                      }}
                      startIcon={<AccountBalanceIcon />}
                    >
                      <Typography fontSize={12}>Postmaster</Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{ px: 2, py: 2, color: colors.fonts.main }}
                      onClick={() => {
                        router.push("/historia");
                        setTimeout(() => useOpenMiniBar(false), 500);
                      }}
                      startIcon={<HistoryEduIcon />}
                    >
                      <Typography fontSize={12}>
                        Ediciones anteriores
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12} textAlign={"center"}>
                    {logged ? (
                      <Button
                        fullWidth
                        sx={{ px: 2, py: 2, color: colors.fonts.main }}
                        onClick={() => {
                          router.push("/dashboard");
                          setTimeout(() => useOpenMiniBar(false), 500);
                        }}
                        startIcon={<Dashboard />}
                      >
                        <Typography fontSize={12}>Panel</Typography>
                      </Button>
                    ) : (
                      <Button
                        fullWidth
                        sx={{ px: 2, py: 2, color: colors.fonts.main }}
                        onClick={onLogin}
                        startIcon={<Login />}
                      >
                        <Typography fontSize={12}>Ingresar</Typography>
                      </Button>
                    )}
                  </Grid>
                </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </AppBar>
  );
};

export default Header;
