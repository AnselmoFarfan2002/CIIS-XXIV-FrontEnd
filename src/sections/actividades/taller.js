import colors from "@/styles/colors";
import typography from "@/styles/typography";
import {
  AppRegistrationRounded,
  Place,
  Schedule,
  Today,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Skeleton,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { v4 } from "uuid";
import LocalFade from "@/components/Animation/LocalFade";
import { useRouter } from "next/router";
import { useAuth } from "@/context/auth";

export default function ActividadTaller({
  talleres = [],
  title = "Talleres",
  subHeader = "Todos los talleres presentes en nuestro evento",
  fromDash = false,
  handleChangeView = () => {},
}) {
  const { user } = useAuth();
  const router = useRouter();
  function inscribirseTaller(id) {
    if (user) router.push("/dashboard/talleres?id=" + id);
    else router.push(`/registro?next=${"/dashboard/talleres?id=" + id}`);
  }

  return (
    <Grid
      id="talleres"
      container
      spacing={3}
      alignItems={"center"}
      maxWidth={"lg"}
    >
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
          {!talleres.length && (
            <>
              <Grid item xs={12} md={6} key={v4()}>
                <LocalFade sx={{ height: "100%" }}>
                  <Card
                    sx={{
                      backgroundColor: colors.bg.light,
                      p: 1,
                      height: "100%",
                    }}
                  >
                    <CardContent>
                      <Skeleton width={100} />
                      <Skeleton />
                      <Skeleton width={200} sx={{ mb: 1 }} />
                      <Skeleton variant="rectangular" height={118} />
                    </CardContent>
                  </Card>
                </LocalFade>
              </Grid>
              <Grid item xs={12} md={6} key={v4()}>
                <LocalFade>
                  <Card
                    sx={{
                      backgroundColor: colors.bg.light,
                      p: 1,
                      height: "100%",
                    }}
                  >
                    <CardContent>
                      <Skeleton width={100} />
                      <Skeleton />
                      <Skeleton width={200} sx={{ mb: 1 }} />
                      <Skeleton variant="rectangular" height={118} />
                    </CardContent>
                  </Card>
                </LocalFade>
              </Grid>
            </>
          )}
          {talleres.map((tll) => {
            const endDate = new Date() > new Date("2023-11-15");
            return (
              <Grid item xs={12} md={6} key={v4()}>
                <LocalFade
                  sx={{
                    height: "100%",
                  }}
                >
                  <Card
                    sx={{
                      height: "100% !important",
                      backgroundColor: colors.bg.light,
                      borderRadius: 5,
                      p: 1,
                    }}
                  >
                    <CardContent>
                      <Typography fontFamily={typography.h6}>Taller</Typography>
                      <Typography fontFamily={typography.h5}>
                        {tll.name}
                      </Typography>
                      <Box
                        sx={{
                          my: 1,
                          display: "flex",
                          columnGap: 1,
                          alignItems: "center",
                        }}
                      >
                        <Avatar src={tll.relatedSpeaker.dir_img_speaker} />
                        <Box>
                          <Typography
                            fontFamily={typography.body2}
                            fontWeight={450}
                          >
                            {tll.relatedSpeaker.name_speaker}{" "}
                            {tll.relatedSpeaker.lastname_speaker}
                          </Typography>
                          <Typography fontFamily={typography.body2}>
                            {tll.relatedSpeaker.university_speaker}
                          </Typography>
                        </Box>
                      </Box>
                      <Grid container spacing={1} sx={{ mb: 2 }}>
                        <Grid item>
                          <Typography>
                            <Today fontSize="small" />{" "}
                            {new Date(tll.date).toLocaleDateString()}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography>
                            <Schedule fontSize="small" /> {tll.start} -{" "}
                            {tll.end}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography>
                            <Place fontSize="small" /> {tll.place}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Chip label={"Certificable"} />
                        </Grid>
                        <Grid item>
                          <Tooltip title="Costo de inscripción">
                            <Chip label={"S/. " + tll.price} />
                          </Tooltip>
                        </Grid>
                        <Grid item>
                          <Tooltip
                            title={
                              endDate
                                ? ""
                                : `Máximo ${tll.tickets} participantes`
                            }
                          >
                            <Chip
                              label={
                                endDate
                                  ? "Inscripciones cerradas"
                                  : tll.avaible > 0
                                  ? "Vacantes disponibles"
                                  : "Vacantes agotadas"
                              }
                            />
                          </Tooltip>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="contained"
                            startIcon={<AppRegistrationRounded />}
                            sx={{ borderRadius: 5, height: 32 }}
                            disabled={endDate || !tll.avaible > 0}
                            onClick={() =>
                              fromDash
                                ? handleChangeView(tll)
                                : inscribirseTaller(tll.id)
                            }
                          >
                            Inscribirse
                          </Button>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </LocalFade>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
