import { Box, Fade, Grid, Zoom } from "@mui/material";
import { v4 } from "uuid";
import CounterCard from "@/components/Card/CounterCard";
import { useInView } from "react-intersection-observer";
import colors from "@/styles/colors";

export default function HomeCounters({
  ponencias,
  tematicas,
  talleres,
  concursos,
  edicion,
}) {
  const [refAbout, inViewAbout] = useInView({
    triggerOnce: false,
  });

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
        pb: 10,
      }}
    >
      <Grid
        container
        flexDirection={"row"}
        sx={{ maxWidth: "1800px", mt: 5 }}
        justifyContent="center"
        ref={refAbout}
      >
        {getLocalCounters({
          edicion,
          ponencias,
          tematicas,
          concursos,
          talleres,
        }).map((counter, idx) => (
          <Grid item xs={12} md={4} lg={2.4} key={v4()}>
            <Box maxWidth={350} mx={"auto"}>
              <Zoom in={inViewAbout} timeout={200 * (idx + 1)}>
                <Box>
                  <CounterCard {...counter} />
                </Box>
              </Zoom>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function getLocalCounters({
  ponencias,
  edicion,
  tematicas,
  talleres,
  concursos,
}) {
  const cardCounters = [
    {
      count: ponencias,
      suffix: "*",
      title: "Ponencias",
      description: `¡Con importantes ponentes internacionales se tendrán ${ponencias} ponencias!`,
    },
    {
      count: edicion,
      suffix: "va",
      title: "Edición",
      description: `Con ${
        edicion - 1
      } años de trayectoria, el CIIS continua reuniendo ponentes de todas partes del mundo.`,
    },
    {
      count: tematicas,
      suffix: "*",
      title: "Temáticas",
      description: `¡Variedad en las temáticas! En esta ${edicion}va han sido confirmadas ${tematicas} temáticas de actualidad.`,
    },
    {
      count: talleres,
      suffix: "*",
      title: "Talleres",
      description: `¡Contaremos con talleres! En esta ${edicion}va han sido confirmados ${talleres} importantes talleres.`,
    },
    {
      count: concursos,
      suffix: "*",
      title: "Concursos",
      description: `¡Participa en nuestros concursos! ${concursos} estarán disponibles, ¿te atreverás a participar?`,
    },
  ];

  return cardCounters;
}
