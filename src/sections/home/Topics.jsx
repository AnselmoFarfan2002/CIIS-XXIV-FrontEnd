import { Box, Card, CardContent, Grid } from "@mui/material";
import colors from "@/styles/colors";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useEffect, useState } from "react";
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
import BarLeftTitle from "@/components/Sections/BarLeftTitle";

const emojis = {
  "Inteligencia artificial": <SmartToy />,
  Ciberseguridad: <Security />,
  "Desarrollo de software": <Terminal />,
  "Ciencia de datos": <BarChart />,
  "Computación en la nube": <Cloud />,
  "Ingeniería de Software": <Engineering />,
  "Remote Sensing & IoT": <SettingsRemote />,
};

const Topics = ({ setEjes, setTematicas, ejes }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setEjes(
      getLocalTopics().map((t) => ({
        ...t,
        emoji: emojis[t.name] ? emojis[t.name] : <Topic />,
      }))
    );
    setTematicas(getLocalTopics().length);
  }, []);

  return (
    <Box
      id="topics"
      component={"section"}
      sx={{
        backgroundImage: colors.bg.transparent(0),
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
                      <BarLeftTitle title={"Ejes temáticos"} />
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
                        style={{
                          padding: "16px",
                          textAlign: "center",
                        }}
                        sx={{ bgcolor: "#020c1c" }}
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
                        <Card sx={{ bgcolor: colors.bg.card }}>
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

function getLocalTopics() {
  return [
    {
      name: "Inteligencia artificial",
      description:
        "Descubre cómo la inteligencia artificial está transformando la industria e impactando en la vida de las personas. ¿Quieres conocer las últimas tendencias respecto a la inteligencia artificial y cómo aplicarlas en tu trabajo diario?",
    },
    {
      name: "Ciberseguridad",
      description:
        "Protege tus datos y activos digitales de los ciberataques con las últimas tendencias en ciberseguridad. ¿Estás interesado en conocer cómo podemos asegurar la privacidad y seguridad de nuestros datos en un mundo cada vez más digital?",
    },
    {
      name: "Desarrollo de software",
      description:
        "Descubre las mejores prácticas en el desarrollo de software y cómo aplicarlas en tu trabajo. ¿Te gustaría conocer cómo la metodología ágil está transformando el desarrollo de software y mejorando la eficiencia de los equipos?",
    },
    {
      name: "Ciencia de datos",
      description:
        "Sumérgete en el mundo de la ciencia de datos y descubre cómo utilizar los datos para obtener información valiosa. Aprende sobre técnicas de análisis de datos y la aplicación de algoritmos de aprendizaje automático para tomar decisiones basadas en datos.",
    },
    {
      name: "Computación en la nube",
      description:
        "Explora los beneficios y desafíos de la computación en la nube y cómo puede transformar la forma en que las empresas y organizaciones gestionan sus recursos tecnológicos. Aprende sobre los diferentes servicios de la nube y cómo aprovecharlos eficazmente.",
    },
    {
      name: "Ingeniería de Software",
      description:
        "Descubre las últimas tendencias en ingeniería de software y cómo aplicarlas en tu trabajo diario. ¿Quieres conocer cómo la ingeniería de software está transformando la industria y mejorando la calidad de vida de las personas?",
    },
    {
      name: "Remote Sensing & IoT",
      description:
        "Explora el campo de la teledetección (remote sensing) y el Internet de las cosas (IoT) y cómo se utilizan para recopilar datos en tiempo real y obtener información sobre nuestro entorno. Aprende sobre las aplicaciones en diferentes industrias y sectores.",
    },
  ];
}
