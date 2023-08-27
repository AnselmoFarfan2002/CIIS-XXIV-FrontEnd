import { Avatar, Box, Grid, Typography, alpha } from "@mui/material";
import Atropos from "atropos/react";
import "atropos/css";
import Crono from "../../components/Crono/Crono";
import colors from "../../styles/colors";
import { fonts } from "@/styles/fonts";

import { Button } from "@mui/material";

const Cover = () => {
  const title = {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: fonts.title,
  };

  const atroposPart = {
    commonOrigin: true,
    el: "#cover-ciis",
    eventsEl: "#cover-ciis",
    style: { width: "30%" },
    highlight: false,
    rotateXInvert: true,
    rotateYInvert: true,
    alwaysActive: true,
    shadow: true,
    rotateXMax: 20,
    rotateYMax: 20,
    rotateTouch: true,
  };

  const imageAtropos = {
    "data-atropos-offset": 10,
    style: { width: "100%" },
  };

  const countrys = [
    {
      src: "/img/flags/india.png",
      alt: "India",
    },
    {
      src: "/img/flags/espania.png",
      alt: "España",
    },
    {
      src: "/img/flags/argentina.png",
      alt: "Argentina",
    },
    {
      src: "/img/flags/mexico.png",
      alt: "México",
    },
    {
      src: "/img/flags/peru.png",
      alt: "Perú",
    },
    {
      src: "/img/flags/chile.png",
      alt: "Chile",
    },
  ];

  return (
    <Box
      id="cover"
      component="section"
      sx={{
        paddingY: { xs: 6, md: 0 },
        paddingTop: { sm: 14, md: 10, lg: 0 },
        background: alpha(colors.primary.main, 0.2),
        display: "flex",
        justifyContent: "center",
        zIndex: 1,
        position: "relative",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", maxWidth: "1800px" }}
        rowGap={5}
      >
        <Grid item md={1}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ flexDirection: { xs: "row", md: "column" }, gap: 2 }}
          >
            {countrys.map((c, idx) => (
              <Box key={"flag" + idx} style={{ color: colors.fonts.main }}>
                <Avatar
                  src={c.src}
                  imgProps={{ alt: c.alt }}
                  sx={{
                    width: {
                      xs: 30,
                      md: 56,
                    },
                    height: {
                      xs: 30,
                      md: 56,
                    },
                    transition: "transform 0.1s",
                    "&:hover": {
                      transform: "scale(1.2)",
                    },
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item md={6} lg={4}>
          <Box px={5} textAlign="center">
            <Box style={{ color: colors.fonts.main }} sx={{ zIndex: 1 }}>
              <Typography variant="h4">XXIV</Typography>
              <Typography variant="h1">CIIS</Typography>
              <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
                <Typography
                  variant="h5"
                  style={{ ...title, color: colors.primary.dark }}
                >
                  Lunes 13
                </Typography>
                <Typography variant="h5">a</Typography>
                <Typography
                  variant="h5"
                  style={{ ...title, color: colors.primary.dark }}
                >
                  Viernes 17
                </Typography>
              </Box>

              <Typography
                variant="h6"
                textTransform={"uppercase"}
                fontWeight={"bold"}
              >
                Noviembre 2023
              </Typography>

              <Box py={2}>
                <Typography variant="h4" style={title}>
                  <Crono date="11-13-2023" />
                </Typography>
                <Typography variant="body2">
                  Días : Horas : Minutos : Segundos
                </Typography>
              </Box>

              <Typography variant="body2">
                Un año más del evento donde converge el conocimiento, un año más
                del Congreso Internacional de Informática y Sistemas.
              </Typography>

              <Box paddingTop={3}>
                <Button
                  variant="contained"
                  sx={{
                    color: colors.fonts.main,
                    bgcolor: colors.primary.light,
                  }}
                  href="#topics"
                >
                  <Typography
                    variant="title2"
                    fontWeight={"bold"}
                    sx={{
                      px: 2,
                      py: 0,
                    }}
                  >
                    Ver más
                  </Typography>
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid id="cover-ciis" container justifyContent="center">
            <Grid item style={{ display: "flex", justifyContent: "center" }}>
              <Atropos {...atroposPart}>
                <img
                  src="/img/CIIS/XXIV/cover-parts/00.jpg"
                  {...imageAtropos}
                />
              </Atropos>
              <Atropos {...atroposPart}>
                <img
                  src="/img/CIIS/XXIV/cover-parts/10.jpg"
                  {...imageAtropos}
                />
              </Atropos>
              <Atropos {...atroposPart}>
                <img
                  src="/img/CIIS/XXIV/cover-parts/20.jpg"
                  {...imageAtropos}
                />
              </Atropos>
            </Grid>
            <Grid item style={{ display: "flex", justifyContent: "center" }}>
              <Atropos {...atroposPart}>
                <img
                  src="/img/CIIS/XXIV/cover-parts/01.jpg"
                  {...imageAtropos}
                />
              </Atropos>
              <Atropos {...atroposPart}>
                <img
                  src="/img/CIIS/XXIV/cover-parts/11.jpg"
                  {...imageAtropos}
                />
              </Atropos>
              <Atropos {...atroposPart}>
                <img
                  src="/img/CIIS/XXIV/cover-parts/21.jpg"
                  {...imageAtropos}
                />
              </Atropos>
            </Grid>
            <Grid item style={{ display: "flex", justifyContent: "center" }}>
              <Atropos {...atroposPart}>
                <img
                  src="/img/CIIS/XXIV/cover-parts/02.jpg"
                  {...imageAtropos}
                />
              </Atropos>
              <Atropos {...atroposPart}>
                <img
                  src="/img/CIIS/XXIV/cover-parts/12.jpg"
                  {...imageAtropos}
                />
              </Atropos>
              <Atropos {...atroposPart}>
                <img
                  src="/img/CIIS/XXIV/cover-parts/22.jpg"
                  {...imageAtropos}
                />
              </Atropos>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cover;
