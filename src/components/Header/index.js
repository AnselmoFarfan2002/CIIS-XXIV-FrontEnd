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

import { LinkedIn, YouTube } from "@mui/icons-material";

const Header = (props) => {
  const { onLogin = () => {} } = props;
  const [isAtTop, setIsAtTop] = useState(true);

  const handleScroll = () => {
    setIsAtTop(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      component={"header"}
      p={2}
      width={"100vw"}
      sx={{
        bgcolor: isAtTop ? "transparent" : "#101418",
        backgroundImage: "none",
        position: "fixed",
        py: 1,
        transition: ".5s",
        ...(isAtTop ? { boxShadow: "none" } : {}),
      }}
    >
      <Hidden smDown>
        <Grid container justifyContent={"center"} sx={{ position: "relative" }}>
          <Grid item lg={8} md={10}>
            <Grid
              container
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <Button
                  sx={{ px: 5, py: 1, color: colors.fonts.main }}
                  href="/"
                >
                  CIIS ft. ESIS
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
                  startIcon={<GroupAddIcon />}
                  variant="contained"
                  color="info"
                  disabled
                  onClick={onLogin}
                >
                  <Typography fontSize={12} fontWeight={"bold"}>
                    Inscribirse
                  </Typography>
                </Button>
                <Button
                  sx={{ px: 2, py: 2, color: colors.fonts.main }}
                  href="/postmaster"
                  startIcon={<AccountBalanceIcon />}
                >
                  <Typography fontSize={12}>Postmaster</Typography>
                </Button>
                <Button
                  sx={{ px: 2, py: 2, color: colors.fonts.main }}
                  href="/historia"
                  startIcon={<HistoryEduIcon />}
                >
                  <Typography fontSize={12}>Ediciones anteriores</Typography>
                </Button>
                <IconButton
                  aria-label="facebook"
                  href="https://www.facebook.com/ciistacna"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  aria-label="youtube"
                  href="https://www.youtube.com/@ciistacna"
                >
                  <YouTube />
                </IconButton>
                <IconButton
                  aria-label="linkedin"
                  href="https://www.linkedin.com/in/congreso-internacional-de-inform%C3%A1tica-y-sistemas-a33bb5226/?originalSubdomain=pe"
                >
                  <LinkedIn />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </AppBar>
  );
};

export default Header;
