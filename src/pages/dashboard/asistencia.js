import LocalFade from "@/components/Animation/LocalFade";
import { useAuth } from "@/context/auth";
import { directory } from "@/context/url-context";
import { cronogramaDatav0 } from "@/sections/home/Cronograma/data";
import colors from "@/styles/colors";
import typography from "@/styles/typography";
import { fetchGET, fetchPost } from "@/utils/data.fetch";
import {
  CheckCircle,
  Label,
  Schedule,
  SignalWifiBad,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { v4 } from "uuid";

const { default: DashboardLayout } = require("@/layouts/dashboard/layout");

function Page() {
  const theme = createTheme({ palette: { mode: "dark" } });

  let today = new Date();
  today = today - 5 * 60 * 60 * 1000;

  const [day, setDay] = useState(
    new Date(today).toISOString().substring(0, 10)
  );
  const [serverError, setServerError] = useState(false);
  const [ponenciaFromServer, setPonenciaFromServer] = useState(null);

  const router = useRouter();
  const { logout } = useAuth();

  const day2fecha = {
    "2023-11-13": "Lunes",
    "2023-11-14": "Martes",
    "2023-11-15": "Miércoles",
    "2023-11-16": "Jueves",
    "2023-11-17": "Viernes",
  };

  function sessionExpired() {
    Swal.fire("¡Ups!", "Sesión expirada", "error");
    logout("/actividades?next=/dashboard/asistencia");
  }

  useEffect(() => {
    fetchGET(
      directory.conference["schedule-day"](day),
      setPonenciaFromServer,
      (err) => {
        if (err.code) {
          if (err.code == 401) sessionExpired();
        }
        setServerError(true);
      }
    );
  }, [day]);

  function handleOnChageDay(event) {
    setServerError(false);
    setPonenciaFromServer(null);
    setDay(event.target.value);
  }

  function handleCheckAttedance(id, idx) {
    document.getElementById(`button-ponencia-${id}`).style.display = "none";
    fetchPost(
      directory.conference.one(id).attendance,
      {},
      (msg) => {
        let ponencias = Array.from(ponenciaFromServer);
        ponencias[idx].attendance = true;
        setPonenciaFromServer(ponencias);
        Swal.fire("Listo", "Asistencia registrada", "success");
      },
      (err) => {
        document.getElementById(`button-ponencia-${id}`).style.display =
          "inline-flex";
        if (err.code) {
          if (err.code == 401) sessionExpired();
          else Swal.fire(err.error, err.reason, "error");
        } else {
          Swal.fire(
            "Sin conexión al servidor",
            "Hubo problemas al comunicarse con el servidor",
            "error"
          );
        }
      }
    );
  }

  return (
    <>
      <Head>
        <title>CIIS Asistencia | CIIS</title>
      </Head>
      <Container maxWidth={"lg"} sx={{ mx: 0 }}>
        <LocalFade>
          <Grid container alignItems={"center"} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3" fontFamily={typography.h3} mb={1}>
                Asistencia
              </Typography>
              <Typography variant="body2">
                Marca tu asistencia tras ser habilitado por un organizador.
              </Typography>
              <Typography variant="body2" mb={2} fontWeight={500}>
                La asistencia es habilitada tras el escaneo su código QR
              </Typography>
            </Grid>

            <ThemeProvider {...{ theme }}>
              <Grid item xs={12} sm={8} md={6.1}>
                <FormControl fullWidth>
                  <InputLabel sx={{ backgroundColor: colors.bg.main }}>
                    Día de ponencia
                  </InputLabel>
                  <Select value={day} onChange={handleOnChageDay}>
                    <MenuItem value="2023-11-13">Lunes 13/11/2023</MenuItem>
                    <MenuItem value="2023-11-14">Martes 14/11/2023</MenuItem>
                    <MenuItem value="2023-11-15">Miércoles 15/11/2023</MenuItem>
                    <MenuItem value="2023-11-16">Jueves 16/11/2023</MenuItem>
                    <MenuItem value="2023-11-17">Viernes 17/11/2023</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </ThemeProvider>
            {/* {today
              .filter((activity) => activity.type == "Ponencia")
              .map((activity, idx) => (
                <Grid item xs={12} key={v4()}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6">Ponencia {idx + 1}</Typography>
                      <Typography variant="h6" mb={0.5}>
                        {activity.start} • {activity.end}
                      </Typography>
                      <Typography>{activity.name}</Typography>
                      <Typography>{activity.speaker}</Typography>
                      <Typography>{activity.country}</Typography>
                      <Box>
                        {isActive(day, activity.start, activity.end) ? (
                          <Button
                            variant="contained"
                            color="info"
                            startIcon={<CheckCircle />}
                            sx={{ mt: 2, fontWeight: "bold" }}
                          >
                            Marcar asistencia
                          </Button>
                        ) : (
                          <Chip
                            label="No disponible"
                            color="grey"
                            sx={{ mt: 1 }}
                          />
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))} */}
            {serverError ? (
              <>
                <Grid item xs={12} textAlign={"center"} sx={{ my: 5 }}>
                  <SignalWifiBad sx={{ fontSize: 100 }} />
                  <Typography variant="h6" mt={1}>
                    Sin contacto con el mundo exterior
                  </Typography>
                  <Typography variant="body2" mt={1}>
                    Verfique su conexión a internet
                  </Typography>
                </Grid>
              </>
            ) : !ponenciaFromServer ? (
              <>
                <Grid item xs={12}>
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={"200px"}
                    sx={{ my: 0 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={"200px"}
                    sx={{ my: 0 }}
                  />
                </Grid>
              </>
            ) : (
              ponenciaFromServer?.map((activity, idx) => (
                <Grid item xs={12} key={v4()}>
                  <LocalFade>
                    <Card>
                      <CardContent>
                        <Typography variant="h6">Ponencia {idx + 1}</Typography>
                        <Typography variant="h6" mb={0.5}>
                          {activity.start_date_conference.substring(11, 16)}
                          {Number(
                            activity.start_date_conference.substring(11, 13)
                          ) < 12
                            ? "am"
                            : "hrs"}{" "}
                          • {activity.exp_date_conference.substring(11, 16)}
                          {Number(
                            activity.exp_date_conference.substring(11, 13)
                          ) < 12
                            ? "am"
                            : "hrs"}
                        </Typography>
                        <Typography>{activity.topic_conference}</Typography>
                        <Typography>
                          {activity.speaker.name_speaker}{" "}
                          {activity.speaker.lastname_speaker}
                        </Typography>
                        <Box>
                          {isActive(
                            activity.start_date_conference,
                            activity.exp_date_conference
                          ) && !activity.attendance ? (
                            <Button
                              id={`button-ponencia-${activity.id_conference}`}
                              variant="contained"
                              color="info"
                              startIcon={<CheckCircle />}
                              sx={{ mt: 2, fontWeight: "bold" }}
                              onClick={() =>
                                handleCheckAttedance(
                                  activity.id_conference,
                                  idx
                                )
                              }
                            >
                              Marcar asistencia
                            </Button>
                          ) : (
                            <Chip
                              label={
                                activity.attendance ? (
                                  <>
                                    <CheckCircle /> Registrada
                                  </>
                                ) : (
                                  "No disponible"
                                )
                              }
                              color={activity.attendance ? "success" : "grey"}
                              sx={{ mt: 1 }}
                            />
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </LocalFade>
                </Grid>
              ))
            )}
          </Grid>
        </LocalFade>
      </Container>
    </>
  );
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;

function getDateString(day, hour = "") {
  return `${day}T${hour.substring(0, 5)}`;
}

// function isActive(day, start, end) {
//   return (
//     new Date() >= new Date(getDateString(day, start)) &&
//     new Date() <= new Date(getDateString(day, end))
//   );
// }

function isActive(start, end) {
  return (
    new Date() >= new Date(start.replace("Z", "")) &&
    new Date() <= new Date(end.replace("Z", ""))
  );
}
