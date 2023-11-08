import colors from "@/styles/colors";
import typography from "@/styles/typography";
import {
  AppRegistrationRounded,
  EmojiEvents,
  Rule,
  Schedule,
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
} from "@mui/material";
import LocalFade from "@/components/Animation/LocalFade";
import { useState } from "react";

export default function ActividadConcurso({
  title = "Concursos",
  subHeader = "Todos los concursos presentes en nuestro evento",
  handleOpenViewImage,
}) {
  return (
    <Grid container spacing={3} alignItems={"center"} maxWidth={"lg"}>
      <Grid item xs={12}>
        <LocalFade>
          <Typography variant="h3" fontFamily={typography.h3} mb={1}>
            {title}
          </Typography>
          <Typography variant="body2">{subHeader}</Typography>
        </LocalFade>
      </Grid>

      <Grid item xs={12}>
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", height: "max-content" }}
        >
          <Grid item xs={12} md={6} lg={4}>
            <ContestCard
              {...{
                id: "concurso-robotica",
                title: "Concurso de Robótica",
                date: new Date("11-14-2023").toLocaleDateString(),
                hour: "14:00hrs - 16:00hrs",
                subtitle: "Premios primer y segundo puesto",
                bases: "/docs/bases/bases-concurso-robotica-2023.pdf",
                form: "https://forms.gle/P2FH8fwkqiVq9u5q9",
                flyer: "/img/CIIS/XXIV/contests/robotica.png",
                handleOpenViewImage,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ContestCard
              {...{
                id: "concurso-programacion",
                title: "Concurso de Programación",
                date: new Date("11-16-2023").toLocaleDateString(),
                hour: "14:00hrs - 16:00hrs",
                subtitle: "Premios primer y segundo puesto",
                bases:
                  "https://docs.google.com/document/d/1nwsQIkaygvEjakd0tvw9Xu2qRK34FJCDAhvEC4IDeAM/edit?usp=sharing",
                form: "https://forms.gle/uRL34UMY7EWVVhBb7",
                flyer: "/img/CIIS/XXIV/contests/programacion.png",
                handleOpenViewImage,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ContestCard
              {...{
                id: "concurso-conocimiento",
                title: "Concurso de Conocimiento",
                date: new Date("11-17-2023").toLocaleDateString(),
                hour: "14:00hrs - 16:00hrs",
                subtitle: "Premios primer y segundo puesto",
                bases: "/docs/bases/bases-concurso-conocimiento-2023.pdf",
                form: "https://forms.gle/LobXe3Dsr4C1Zqmm7",
                flyer: "/img/CIIS/XXIV/contests/conocimiento.png",
                handleOpenViewImage,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
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
  handleOpenViewImage,
}) {
  return (
    <LocalFade>
      <Card id={id} sx={{ backgroundColor: colors.bg.light }}>
        <CardMedia
          component={"img"}
          src={flyer}
          sx={{ "&:hover": { cursor: "pointer" } }}
          onClick={() => {
            handleOpenViewImage(flyer);
          }}
        />
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
