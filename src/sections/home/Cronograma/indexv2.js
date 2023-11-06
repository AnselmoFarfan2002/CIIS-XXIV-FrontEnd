import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Fade,
  Grid,
  Grow,
  Tab,
  Tabs,
  Tooltip,
  Typography,
  Zoom,
  alpha,
} from "@mui/material";
import colors from "@/styles/colors";
import { useState, useEffect } from "react";
import { cronogramaDatav0 } from "./data";
import { v4 } from "uuid";
import { useInView } from "react-intersection-observer";
import BarLeftTitle from "@/components/Sections/BarLeftTitle";
import LocalFade from "@/components/Animation/LocalFade";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import {
  Download,
  EmojiEvents,
  LibraryBooks,
  LinkedIn,
  RecordVoiceOver,
  Restaurant,
  Schedule,
  Store,
  Today,
} from "@mui/icons-material";
import removeTilde from "@/utils/removeTilde";
import FromSideFade, {
  FromSideFadeNoObserver,
} from "@/components/Animation/FromSideFade";
import { fetchGET } from "@/utils/data.fetch";
import { directory } from "@/context/url-context";

const activityIcons = {
  lunch: <Restaurant fontSize="xs" sx={{ mt: 0.3 }} />,
  contest: <EmojiEvents fontSize="xs" sx={{ mt: 0.3 }} />,
};
export default function HomeCronogramav2() {
  const [value, setValue] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const handleChange = (event, newValue) => setValue(newValue);
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  const handleSet = (id) => {
    setActiveStep(id);
  };

  return (
    <Box
      id="topics"
      component={"section"}
      sx={{
        backgroundImage: colors.bg.gradient(0),
        zIndex: 1,
        position: "relative",
        px: {
          lg: 10,
          sm: 5,
          xs: 0,
        },
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LocalFade sx={{ maxWidth: 1800, width: "100%" }}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              px: {
                sm: 0,
                xs: 5,
              },
            }}
          >
            <BarLeftTitle title={"Cronograma"} />
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={3} sx={{ height: "max-content" }}>
              <Grid item xs={12} md={12}>
                <Card
                  sx={{ bgcolor: alpha(colors.bg.light, 0.9), px: { sm: 2 } }}
                >
                  <CardContent>
                    <Stepper activeStep={activeStep} orientation="vertical">
                      <Button
                        fullWidth
                        variant="contained"
                        sx={{ fontWeight: 500 }}
                        startIcon={<Download />}
                        href="/docs/cronogramas/Cronograma CIIS XXIV - 2023.pdf"
                        target="_blank"
                      >
                        Descargar cronograma
                      </Button>
                      {cronogramaDatav0.map((plan, index) => (
                        <Step key={v4()}>
                          <StepLabel
                            icon={<Today sx={{ mt: -1 }} />}
                            onClick={() => handleSet(index + 1)}
                            sx={{
                              "&:hover": {
                                cursor: "pointer",
                                background: "rgba(100,100,100,.2)",
                              },
                              pt: 2,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{ fontVariant: "small-caps" }}
                            >
                              {plan.day} • {plan.date.toLocaleDateString()}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ lineHeight: 0.8 }}
                            >
                              Día {plan.date.getDay()}
                            </Typography>
                          </StepLabel>
                          <StepContent>
                            <Grid container columnSpacing={3}>
                              {plan.day == "Viernes" && (
                                <Grid item xs={12}>
                                  <Typography variant="h6" mt={2}>
                                    Evento especial
                                  </Typography>
                                  <Box mt={2} sx={{ display: "flex", gap: 1 }}>
                                    <Schedule />
                                    <Typography
                                      variant="h6"
                                      sx={{ fontWeight: 425 }}
                                    >
                                      09:00am • 15:00hrs
                                    </Typography>
                                  </Box>
                                  <Box
                                    mt={0.5}
                                    sx={{ display: "flex", gap: 1 }}
                                  >
                                    <Store />
                                    <Typography variant="body2">
                                      Feria tecnológica
                                    </Typography>
                                  </Box>
                                </Grid>
                              )}
                              <Grid item xs={12} md={6}>
                                <Typography variant="h6" mt={2}>
                                  Primera parte
                                </Typography>
                                <Box sx={{ mb: 2 }}>
                                  {plan.early.map((activity, idx) => {
                                    return (
                                      <FromSideFadeNoObserver
                                        side="left"
                                        timeout={{ enter: 200 * (idx + 1) }}
                                        key={v4()}
                                      >
                                        <Box>
                                          <Box
                                            mt={2}
                                            sx={{ display: "flex", gap: 1 }}
                                          >
                                            <Schedule />
                                            <Typography
                                              variant="h6"
                                              sx={{ fontWeight: 425 }}
                                            >
                                              {activity.start} • {activity.end}
                                              {activity.type == "Taller" && (
                                                <> • Taller</>
                                              )}
                                            </Typography>
                                          </Box>
                                          <Box>
                                            {["Ponencia", "Taller"].includes(
                                              activity.type
                                            ) &&
                                              activity.speaker && (
                                                <Box
                                                  display={"flex"}
                                                  sx={{
                                                    gap: 1,
                                                    alignItems: "center",
                                                  }}
                                                >
                                                  <RecordVoiceOver fontSize="xs" />
                                                  <img
                                                    src={`/img/flags/${removeTilde(
                                                      activity.country
                                                    ).toLocaleLowerCase()}.png`}
                                                    width={15}
                                                    height={15}
                                                    style={{
                                                      transform:
                                                        "translate(-20px, 5px)",
                                                    }}
                                                  />
                                                  <TooltipSpeaker
                                                    idSpeaker={
                                                      activity.idSpeaker
                                                    }
                                                  >
                                                    <Typography
                                                      variant="body2"
                                                      style={{
                                                        transform:
                                                          "translate(-22px, 0)",
                                                      }}
                                                      sx={{
                                                        "&:hover": {
                                                          cursor: "help",
                                                        },
                                                      }}
                                                    >
                                                      {activity.speaker}
                                                    </Typography>
                                                  </TooltipSpeaker>
                                                </Box>
                                              )}

                                            {activity.name && (
                                              <Box
                                                mt={0.5}
                                                sx={{ display: "flex", gap: 1 }}
                                              >
                                                {activityIcons[
                                                  activity.type
                                                ] ?? (
                                                  <LibraryBooks
                                                    fontSize="xs"
                                                    sx={{ mt: 0.3 }}
                                                  />
                                                )}
                                                <Typography variant="body2">
                                                  {activity.name}
                                                </Typography>
                                              </Box>
                                            )}
                                          </Box>
                                        </Box>
                                      </FromSideFadeNoObserver>
                                    );
                                  })}
                                </Box>
                              </Grid>
                              <Grid item xs={12} md={6}>
                                <Typography variant="h6" mt={2}>
                                  Segunda parte
                                </Typography>
                                <Box sx={{ mb: 2 }}>
                                  {plan.late.map((activity, idx) => {
                                    return (
                                      <FromSideFadeNoObserver
                                        side="left"
                                        timeout={{ enter: 200 * (idx + 1) }}
                                        key={v4()}
                                      >
                                        <Box>
                                          <Box
                                            mt={2}
                                            sx={{ display: "flex", gap: 1 }}
                                          >
                                            <Schedule />
                                            <Typography
                                              variant="h6"
                                              sx={{ fontWeight: 425 }}
                                            >
                                              {activity.start} • {activity.end}
                                              {activity.type == "Taller" && (
                                                <> • Taller</>
                                              )}
                                            </Typography>
                                          </Box>
                                          <Box>
                                            {["Ponencia", "Taller"].includes(
                                              activity.type
                                            ) &&
                                              activity.speaker && (
                                                <Box
                                                  display={"flex"}
                                                  sx={{
                                                    gap: 1,
                                                    alignItems: "center",
                                                  }}
                                                >
                                                  <RecordVoiceOver fontSize="xs" />
                                                  <img
                                                    src={`/img/flags/${removeTilde(
                                                      activity.country
                                                    ).toLocaleLowerCase()}.png`}
                                                    width={15}
                                                    height={15}
                                                    style={{
                                                      transform:
                                                        "translate(-20px, 5px)",
                                                    }}
                                                  />
                                                  <TooltipSpeaker
                                                    idSpeaker={
                                                      activity.idSpeaker
                                                    }
                                                  >
                                                    <Typography
                                                      variant="body2"
                                                      style={{
                                                        transform:
                                                          "translate(-22px, 0)",
                                                      }}
                                                      sx={{
                                                        "&:hover": {
                                                          cursor: "help",
                                                        },
                                                      }}
                                                    >
                                                      {activity.speaker}
                                                    </Typography>
                                                  </TooltipSpeaker>
                                                </Box>
                                              )}

                                            {activity.name && (
                                              <Box
                                                mt={0.5}
                                                sx={{ display: "flex", gap: 1 }}
                                              >
                                                {activityIcons[
                                                  activity.type
                                                ] ?? (
                                                  <LibraryBooks
                                                    fontSize="xs"
                                                    sx={{ mt: 0.3 }}
                                                  />
                                                )}
                                                <Typography variant="body2">
                                                  {activity.name}
                                                </Typography>
                                              </Box>
                                            )}
                                          </Box>
                                        </Box>
                                      </FromSideFadeNoObserver>
                                    );
                                  })}
                                </Box>
                              </Grid>
                              <Grid item xs={12}>
                                <div style={{ marginTop: 15 }}>
                                  <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    disabled={
                                      index === cronogramaDatav0.length - 1
                                    }
                                    sx={{ mt: 1, mr: 1 }}
                                  >
                                    Siguiente
                                  </Button>
                                  <Button
                                    variant="contained"
                                    disabled={index === 0}
                                    onClick={handleBack}
                                    sx={{ mt: 1, mr: 1 }}
                                  >
                                    Atrás
                                  </Button>
                                </div>
                              </Grid>
                            </Grid>
                          </StepContent>
                        </Step>
                      ))}
                    </Stepper>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </LocalFade>
    </Box>
  );
}

function TooltipSpeaker({ idSpeaker, children }) {
  let [speaker, setSpeaker] = useState({});
  useEffect(() => {
    fetchGET(directory.speaker.one(idSpeaker).src, setSpeaker);
  }, []);

  return (
    <Tooltip
      TransitionComponent={Zoom}
      leaveDelay={200}
      title={
        <Grid container sx={{ px: 2, py: 1 }} spacing={1}>
          <Grid item>
            <Avatar src={speaker.dir_img_speaker} sizes="lg" />
          </Grid>
          <Grid item>
            <Typography variant="h5">{`${speaker.name_speaker} ${speaker.lastname_speaker}`}</Typography>
            <Typography variant="h6">{`${speaker.university_speaker}`}</Typography>
          </Grid>
          {speaker.about_profile_speaker && (
            <Grid item>
              <Typography variant="body2">{`${speaker.about_profile_speaker}`}</Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Button
              variant="contained"
              startIcon={<LinkedIn />}
              fullWidth
              href={speaker.linkedin_speaker}
              disabled={!Boolean(speaker.linkedin_speaker)}
              target="_blank"
            >
              LinkedIn
            </Button>
          </Grid>
        </Grid>
      }
    >
      {children}
    </Tooltip>
  );
}
