import { Box, Grid, IconButton, Typography } from "@mui/material";
import ToVisit from "./ToVisit";
import colors from "@/styles/colors";
import SocialNetworks from "./SocialNetworks";

const Footer = (props) => {
  return (
    <Box
      component={"footer"}
      sx={{
        background: colors.bg.main,
        zIndex: 1,
        position: "relative",
        paddingBottom: 8
      }}
    >
      <Grid container justifyContent={"center"} spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={5} justifyContent={"center"}>
            {ToVisit.map((url, idx) => {
              return (
                <Grid key={`footer-tv-${idx}`} item>
                  <Typography variant="body2" component={"a"} href={url.href}>
                    {url.name}
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={5} justifyContent={"center"}>
            {SocialNetworks.map((sn, idx) => {
              return (
                <Grid key={`footer-sn-${idx}`} item>
                  <IconButton href={sn.href} title={sn.name}>
                    {sn.icon}
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" textAlign={"center"}>
            Copyright © {new Date().getFullYear()} CIIS por Círculo de estudios
            de la ESIS.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
