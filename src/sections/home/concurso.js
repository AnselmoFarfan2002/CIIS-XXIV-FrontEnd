import colors from "@/styles/colors";
import typography from "@/styles/typography";
import {
  AppRegistrationRounded,
  EmojiEvents,
  Rule,
  Schedule,
  School,
  SmartToy,
  Terminal,
  Today,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  alpha,
} from "@mui/material";
import LocalFade from "@/components/Animation/LocalFade";
import BarLeftTitle from "@/components/Sections/BarLeftTitle";
import FromSideFade from "@/components/Animation/FromSideFade";
import FilledInfoCard from "@/components/Card/FilledInfoCard";

export default function HomeConcursos({}) {
  return (
    <Box
      id="about"
      component={"section"}
      sx={{
        background: colors.bg.gradientSolid(180),
        zIndex: 1,
        position: "relative",
        padding: {
          lg: 10,
          sm: 10,
          xs: 5,
        },
        paddingTop: "0 !important",
        paddingBottom: "0 !important",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Grid
        container
        alignItems={"center"}
        maxWidth={"1800px"}
        sx={{ width: "100%", my: 10 }}
      >
        <Grid item xs={12}>
          <LocalFade side="right">
            <BarLeftTitle title={"Concursos"} />
          </LocalFade>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            spacing={3}
            sx={{ display: "flex", height: "max-content" }}
          >
            <Grid item xs={12} md={4} lg={4}>
              <FromSideFade side="left" timeout={{ enter: 500 }}>
                <FilledInfoCard
                  variant="gradient"
                  icon={<SmartToy sx={{ mr: 0.2 }} />}
                  title="Concurso de Robótica"
                  description="En esta competencia, dos robots LEGO Mindstorm (NXT o EV3) se enfrentarán en un emocionante duelo de ingenio y destreza."
                  action={{
                    type: "internal",
                    route: "/actividades#concurso-robotica",
                    label: "Más información",
                  }}
                  moreSX={{
                    height: "100%",
                    backgroundImage: `linear-gradient(0deg, ${alpha(
                      "#393b3a",
                      0.8
                    )}, ${alpha(
                      colors.gradients.dark.state,
                      0.8
                    )}), url(/img/bg/concurso-robotica.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </FromSideFade>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <FromSideFade side="left" timeout={{ enter: 500 }}>
                <FilledInfoCard
                  variant="gradient"
                  bgColor={`linear-gradient(195deg, rgba(73, 163, 241, .8), rgba(26, 115, 232, .8)), url("/img/bg/concurso-programacion.jpg")`}
                  icon={<Terminal sx={{ mr: 0.2 }} />}
                  title="Concurso de Programación"
                  description="Un desafío con el propósito de prepararnos para competir en eventos internacionales, como el International Collegiate Promgramming Contest - ICPC"
                  action={{
                    type: "internal",
                    route: "/actividades#concurso-programacion",
                    label: "Más información",
                  }}
                  moreSX={{
                    height: "100%",
                    backgroundImage: `linear-gradient(0deg, ${alpha(
                      "#133d61",
                      0.8
                    )}, ${alpha(
                      colors.gradients.dark.state,
                      0.8
                    )}), url(/img/bg/concurso-programacion.jpg)`,
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </FromSideFade>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <FromSideFade side="left" timeout={{ enter: 500 }}>
                <FilledInfoCard
                  variant="gradient"
                  icon={<School sx={{ mr: 0.2 }} />}
                  title="Concurso de Conocimiento"
                  description="Enfrentamientos donde podrás demostrar tu dominio en temas que van desde programción, gestión de bases de datos, redes y muchos más."
                  action={{
                    type: "internal",
                    route: "/actividades#concurso-conocimiento",
                    label: "Más información",
                  }}
                  moreSX={{
                    height: "100%",
                    backgroundImage: `linear-gradient(0deg, ${alpha(
                      "#05361a",
                      0.8
                    )}, ${alpha(
                      colors.gradients.dark.state,
                      0.8
                    )}), url(/img/bg/concurso-conocimiento.jpg)`,
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </FromSideFade>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

function ContestCard({
  id = "",
  title = "",
  subtitle = "",
  date = "",
  hour = "",
  flyer = "",
  bases = "",
  form = "",
}) {
  return (
    <LocalFade>
      <Card
        component={"section"}
        id={id}
        sx={{ backgroundColor: colors.bg.light }}
      >
        <CardMedia component={"img"} src={flyer} />
        <CardContent sx={{ p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ display: "flex", columnGap: 0.5, mb: 0.5 }}>
                <EmojiEvents />
                <Typography fontFamily={typography.h5} sx={{ mb: 0.5 }}>
                  {title}
                </Typography>
              </Box>
              <Grid container sx={{ gap: 1 }}>
                <Grid item sx={{ display: "flex" }}>
                  <Today sx={{ mr: 1 }} />
                  <Typography fontFamily={typography.body}>{date}</Typography>
                </Grid>
                <Grid item sx={{ display: "flex" }}>
                  <Schedule sx={{ mr: 1 }} />
                  <Typography fontFamily={typography.body}>{hour}</Typography>
                </Grid>
              </Grid>
              <Typography fontFamily={typography.body}>{subtitle}</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="secondary"
                href={bases}
                target="_blank"
                startIcon={<Rule />}
                fullWidth
              >
                Bases
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                href={form}
                target="_blank"
                startIcon={<AppRegistrationRounded />}
                fullWidth
              >
                Inscripción
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </LocalFade>
  );
}
