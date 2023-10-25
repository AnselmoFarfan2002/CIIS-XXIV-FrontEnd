import colors from "@/styles/colors";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  IconButton,
  Grow,
} from "@mui/material";
import { v4 } from "uuid";
import auspiciadoresData from "./data";
import { Facebook, LinkedIn, Public, Web, YouTube } from "@mui/icons-material";
import LocalFade from "@/components/Animation/LocalFade";
import BarLeftTitle from "@/components/Sections/BarLeftTitle";
import { useInView } from "react-intersection-observer";

const snIcon = {
  Facebook: <Facebook />,
  LinkedIn: <LinkedIn />,
  YouTube: <YouTube />,
};

export default function HomeAuspiciadores() {
  const [ref, inView] = useInView({ triggerOnce: false });
  return (
    <Box
      id="topics"
      component={"section"}
      sx={{
        background: colors.bg.gradientSolid(180),
        zIndex: 1,
        position: "relative",
        padding: {
          lg: 10,
          xs: 5,
        },
        pt: "0em !important",
        pb: "5em !important",
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: 1800 }}>
        <LocalFade>
          <BarLeftTitle title={"Auspiciadores"} />
        </LocalFade>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{ height: "max-content", justifyContent: "center", maxWidth: 1800 }}
        ref={ref}
      >
        {auspiciadoresData.map((auspiciador, idx) => (
          <Grid item xs={12} sm={4} md={3} lg={2.4} key={v4()}>
            <Grow in={inView} timeout={{ enter: 200 * idx }}>
              <Card
                sx={{
                  textAlign: "center",
                  height: "100%",
                  bgcolor: colors.bg.light,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  sx={{
                    bgcolor: "white !important",
                    p: 3,
                    flex: 1,
                    objectFit: "contain",
                  }}
                  component={"img"}
                  src={auspiciador.logo}
                />
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    {auspiciador.web && (
                      <IconButton
                        href={auspiciador.web}
                        target="_blank"
                        title="Sitio web"
                      >
                        <Public />
                      </IconButton>
                    )}
                    {auspiciador.social_networks.map((sn) => (
                      <IconButton
                        key={v4()}
                        href={sn.href}
                        target="_blank"
                        title="Red social"
                      >
                        {snIcon[sn.name]}
                      </IconButton>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grow>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
