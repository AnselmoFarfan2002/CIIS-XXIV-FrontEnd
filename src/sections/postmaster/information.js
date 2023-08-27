import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import { v4 as uuidv4 } from "uuid";

const infoCards = [
  {
    icon: <PageviewIcon color="info" fontSize="large" />,
    title: "Descubre",
    description:
      "Como nuestros egresados han llegado a la posición laboral en la que se encuentran.",
  },
  {
    icon: <PersonSearchIcon color="info" fontSize="large" />,
    title: "Conecta",
    description:
      "Ten la oportunidad de conocer y establecer comunicación con los ponentes del evento.",
  },
  {
    icon: <LightbulbIcon color="info" fontSize="large" />,
    title: "Aprende",
    description:
      "De las experiencias de los ponentes para facilitar tu camino en el ámbito laboral.",
  },
  {
    icon: <PsychologyAltIcon color="info" fontSize="large" />,
    title: "Pregunta",
    description:
      "Todos los detalles ocultos y díficiles de conocer directamente a nuestros egresados.",
  },
];

const Information = () => {
  return (
    <Box component="section" py={6} sx={{ px: { sm: 6 } }}>
      <Grid container justifyContent={"center"} spacing={4}>
        {infoCards.map((card) => (
          <Grid item sm={6} lg={3} key={uuidv4()}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                {card.icon}
                <Typography variant="h4">{card.title}</Typography>
                <Typography variant="body2">{card.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Information;
