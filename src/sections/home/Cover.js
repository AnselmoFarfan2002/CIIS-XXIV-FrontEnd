import {
  Avatar,
  Box,
  ButtonGroup,
  Grid,
  Tooltip,
  Typography,
  alpha,
} from "@mui/material";
import Atropos from "atropos/react";
import "atropos/css";
import Crono from "../../components/Crono/Crono.js";
import colors from "../../styles/colors";
import { fonts } from "@/styles/fonts";

import { Button } from "@mui/material";
import {
  AccountBalance,
  Help,
  Info,
  Map,
  MapSharp,
  Place,
  QuestionAnswerSharp,
} from "@mui/icons-material";
import removeTilde from "@/utils/removeTilde";
import typography from "@/styles/typography";
import { useRouter } from "next/router";

const Cover = () => {
  const router = useRouter();
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
    style: { width: "100%", height: "100%" },
  };

  const countrys = [
    {
      src: "/img/flags/india.png",
      alt: "India",
    },
    {
      src: "/img/flags/brasil.png",
      alt: "Brasil",
    },
    {
      src: "/img/flags/peru.png",
      alt: "Perú",
    },
    {
      src: "/img/flags/chile.png",
      alt: "Chile",
    },
    {
      src: "/img/flags/ecuador.png",
      alt: "Ecuador",
    },
    {
      src: "/img/flags/corea del sur.png",
      alt: "Corea del sur",
    },
  ];

  return (
    <Box
      id="cover"
      component="section"
      sx={{
        py: { xs: 6, sm: 14, md: 0 },
        pt: { md: 14 },
        background: alpha(colors.primary.main, 0.2),
        display: "flex",
        justifyContent: "center",
        zIndex: 1,
        position: "relative",
        minHeight: {
          xs: "100vh",
          xl: "auto",
        },
        alignItems: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "1800px" }}
        rowGap={5}
      >
        <Grid item md={5}>
          <Grid container spacing={4} justifyContent={"center"}>
            <Grid item>
              <Box px={5} textAlign="center">
                <Box style={{ color: colors.fonts.main }} sx={{ zIndex: 1 }}>
                  <Typography variant="h4">XXIV</Typography>
                  <Typography variant="h1">CIIS</Typography>
                  <Box
                    sx={{ display: "flex", gap: 1, justifyContent: "center" }}
                  >
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
                      <Crono
                        date="2023-11-13T16:00:00"
                        endDate="2023-11-17T19:00:00"
                      />
                    </Typography>
                    <Typography variant="body2">
                      Días : Horas : Minutos : Segundos
                    </Typography>
                  </Box>

                  <Box sx={{ maxWidth: { xs: 500, md: 800 } }}>
                    <Typography
                      variant="body2"
                      fontWeight={"bold"}
                      sx={{ fontVariant: "small-caps" }}
                    >
                      Un año más del evento donde converge el conocimiento, un
                      año más del Congreso Internacional de Informática y
                      Sistemas.
                    </Typography>
                  </Box>

                  <Box paddingTop={3}>
                    <ButtonGroup>
                      <Button
                        variant="contained"
                        sx={{
                          color: colors.fonts.main,
                          borderStartEndRadius: 0,
                          borderEndEndRadius: 0,
                        }}
                        onClick={() => router.push("/actividades")}
                      >
                        <Typography
                          variant="title2"
                          fontWeight={"bold"}
                          sx={{
                            px: 2,
                            py: 0,
                          }}
                        >
                          Inscríbete
                        </Typography>
                      </Button>
                      <Tooltip title="¿Cómo hacerlo?">
                        <Button
                          sx={{
                            bgcolor: colors.primary.light,
                            borderStartStartRadius: 0,
                            borderEndStartRadius: 0,
                          }}
                          variant="contained"
                          href="https://www.facebook.com/ciistacna/posts/pfbid0iFPef4VCbx6XCuUoX9oMJ8grXJ1zgE83a4EzvKc2icUL46hBpq85CBj89e8aA1v1l?mibextid=YxdKMJ"
                        >
                          <Help />
                        </Button>
                      </Tooltip>
                    </ButtonGroup>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ flexDirection: { xs: "row" }, gap: 2 }}
              >
                {countrys.map((c, idx) => (
                  <Box key={"flag" + idx} style={{ color: colors.fonts.main }}>
                    <Avatar
                      src={removeTilde(c.src)}
                      alt={c.alt}
                      sx={{
                        width: {
                          xs: 30,
                          md: 30,
                        },
                        height: {
                          xs: 30,
                          md: 30,
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
          </Grid>
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

        <Grid item xs={10}>
          <Button
            fullWidth
            color="white"
            fontFamily={typography.body2}
            startIcon={<AccountBalance sx={{ marginRight: 0.8 }} />}
            endIcon={<Place />}
            sx={{ textTransform: "capitalize", px: 4 }}
            onClick={() => router.push("/actividades#location")}
          >
            <Typography variant="body2" textAlign={"center"}>
              Tacna Perú • Universidad Nacional Jorge Basadre Grohmann •
              Auditorio Juan Figueroa Salgado
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cover;
