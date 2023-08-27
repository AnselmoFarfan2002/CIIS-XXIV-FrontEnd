import { Box, Card, CardContent, Grid } from "@mui/material";
import colors from "@/styles/colors";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import { fonts } from "@/styles/fonts";
import {
  BarChart,
  Cloud,
  Engineering,
  Security,
  SettingsRemote,
  SmartToy,
  Terminal,
  Topic,
} from "@mui/icons-material";
import uuidv4 from "uuid";
import { directory } from "@/context/url-context";
import CounterCard from "@/components/Card/CounterCard";

const Topics = ({
  edicion,
  setEdicion,
  ejes,
  setEjes,
  ponencias,
  setPonencias,
  tematicas,
  setTematicas,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [refAbout, inViewAbout] = useInView({
    triggerOnce: false,
  });

  const emojis = {
    "Inteligencia artificial": <SmartToy />,
    Ciberseguridad: <Security />,
    "Desarrollo de software": <Terminal />,
    "Ciencia de datos": <BarChart />,
    "Computación en la nube": <Cloud />,
    "Ingeniería de Software": <Engineering />,
    "Remote Sensing & IoT": <SettingsRemote />,
  };

  useEffect(() => {
    if (!ejes.length) {
      fetch(directory.events.topics.get(24))
        .then((res) => res.json())
        .then((topics) => {
          setEjes(
            topics.map((t) => ({
              ...t,
              emoji: emojis[t.name] ? emojis[t.name] : <Topic />,
            }))
          );

          setTematicas(topics.length);
        });
    }
  }, [ejes, tematicas]);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);

  const handleScroll = () => {
    const currentScrollPos =
      window.pageYOffset || document.documentElement.scrollTop;
    setScrollingDown(prevScrollPos < currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <Box
      id="topics"
      component={"section"}
      sx={{
        backgroundImage: colors.bg.gradient(0),
        zIndex: 1,
        position: "relative",
        padding: {
          lg: 10,
          xs: 5,
        },
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        container
        flexDirection={"row"}
        sx={{ maxWidth: "1800px", marginBottom: 10 }}
        justifyContent="center"
        ref={refAbout}
      >
        <Grid item xs={12} md={4} lg={3}>
          <Box maxWidth={350} mx={"auto"} sx={{ transition: "1s" }}>
            {inViewAbout ? (
              <motion.div
                style={{ width: "100%", margin: "auto" }}
                initial={{ opacity: 0, y: scrollingDown ? 50 : -50, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CounterCard
                  count={ponencias}
                  suffix="+"
                  title="Ponencias"
                  description={`¡Con importantes ponentes internacionales se esperan al menos ${ponencias} ponencias!`}
                />
              </motion.div>
            ) : (
              <Box sx={{ opacity: 0 }}>
                <CounterCard
                  count={ponencias}
                  suffix="+"
                  title="Ponencias"
                  description={`¡Con importantes ponentes internacionales se esperan al menos ${ponencias} ponencias!`}
                />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Box maxWidth={350} mx={"auto"}>
            {inViewAbout ? (
              <motion.div
                style={{ width: "100%", margin: "auto" }}
                initial={{ opacity: 0, y: scrollingDown ? 50 : -50, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CounterCard
                  count={edicion}
                  suffix="va"
                  title="Edición"
                  description={`Con ${
                    edicion - 1
                  } años de trayectoria, el CIIS continua reuniendo ponentes de todas partes del mundo.`}
                />
              </motion.div>
            ) : (
              <Box sx={{ opacity: 0 }}>
                <CounterCard
                  count={edicion}
                  suffix="va"
                  title="Edición"
                  description={`Con ${
                    edicion - 1
                  } años de trayectoria, el CIIS continua reuniendo ponentes de todas partes del mundo.`}
                />
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Box maxWidth={350} mx={"auto"}>
            {inViewAbout ? (
              <motion.div
                style={{ width: "100%", margin: "auto" }}
                initial={{ opacity: 0, y: scrollingDown ? 50 : -50, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <CounterCard
                  count={tematicas}
                  duration={2}
                  suffix="*"
                  title="Temáticas"
                  description={`¡Variedad en las temáticas! En esta ${edicion}va han sido confirmadas ${tematicas} temáticas de actualidad.`}
                />
              </motion.div>
            ) : (
              <Box sx={{ opacity: 0 }}>
                <CounterCard
                  count={edicion}
                  suffix="va"
                  title="Edición"
                  description={`Con ${
                    edicion - 1
                  } años de trayectoria, el CIIS continua reuniendo ponentes de todas partes del mundo.`}
                />
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: "1800px" }}
        ref={ref}
      >
        {inView && (
          <Grid item>
            <Grid container>
              <Grid item xs={12}>
                <Grid container spacing={4}>
                  <Grid item>
                    <motion.div
                      initial={{ opacity: 0, y: 0, x: -100 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Box
                        sx={{
                          borderLeft: 10,
                          paddingLeft: 1,
                          marginBottom: 4,
                        }}
                      >
                        <Typography
                          variant="h4"
                          fontWeight={"bold"}
                          fontFamily={fonts.title}
                        >
                          Ejes temáticos
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid
                  container
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={3}
                >
                  <Grid item sm={10} md={4} xl={3}>
                    <motion.div
                      initial={{ opacity: 0, y: 100, x: 0 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      transition={{ duration: 1 }}
                    >
                      <Paper
                        elevation={3}
                        style={{ padding: "16px", textAlign: "center" }}
                      >
                        <video
                          controls
                          width="100%"
                          poster="/video/CIIS/XXIV/poster.png"
                          style={{ objectFit: "cover" }}
                        >
                          <source
                            src="/video/CIIS/XXIV/topics.mp4"
                            type="video/mp4"
                          />
                          Tu navegador no soporta el elemento de video.
                        </video>
                      </Paper>
                    </motion.div>
                  </Grid>
                  {ejes.map((eje, idx) => (
                    <Grid
                      key={"topic-" + idx}
                      item
                      xs={12}
                      sm={10}
                      md={4}
                      xl={3}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 100, x: 0 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Card>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              fontWeight={"bold"}
                            >
                              <span
                                style={{ color: colors.primary.dark }}
                                display={"inline-block"}
                              >
                                {eje.emoji}
                              </span>
                              <Box marginTop={-4.5} marginLeft={4}>
                                {eje.name}
                              </Box>
                            </Typography>
                            <Typography variant="body2">
                              {eje.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Topics;
