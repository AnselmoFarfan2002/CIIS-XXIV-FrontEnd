import colors from "@/styles/colors";
import { Work } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { v4 } from "uuid";

const ExamplePonentes = [
  {
    avatar: "/img/POSTMASTER/XX/BRENDA_BRIGITTE_LOPEZ_VALERA.jpeg",
    name: "Brenda Brigitte López Valera",
    role: "Analista BI",
    description:
      "Bachiller de la Carrera de Ingeniería en Informática y Sistemas, con experiencia práctica en en el modelamiento de datos, presentación de datos y simplificación de vistas de datos.",
  },
  {
    avatar: "/img/POSTMASTER/XX/Cynthia_Valeriano_Argandonia.jpeg",
    name: "Cynthia Valeriano Argandoña",
    role: "BI Developer | Data Analyst",
    description:
      "+4 años de experiencia en áreas administrativas y 2 años de experiencia en proyectos de Business Intelligence, realizando tareas de migración, limpieza, análisis y visualización de datos.",
  },
  {
    avatar: "/img/POSTMASTER/XX/Herson_Urbina.jpeg",
    name: "Herson Urbina",
    role: "Data Engineer | Manager",
    description:
      "+7 años de experiencia en los sectores de energía eléctrica y banca. 2 años como Software Engineer y +5 años en Big Data y Analítica Avanzada como Data Engineer/Manager.",
  },
  {
    avatar: "/img/POSTMASTER/XX/JESUS_JOSEPH_FLORES_YANCE.jpeg",
    name: "Jesús Joseph Flores Yance",
    role: "Administrador de base de datos",
    description:
      "Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos.",
  },
  {
    avatar: "/img/POSTMASTER/XX/Jhair_Rodrigo_Viveros.jpeg",
    name: "Jhair Rodrigo Viveros",
    role: "Lead, Software Engineer",
    description:
      "+5 años de experiencia desarrollando aplicaciones web utilizando Javascript, React.js, Laravel y Node.js para clientes locales e internacionales. Enamorado de React.js y Javascript/Typescript.",
  },
  {
    avatar: "/img/POSTMASTER/XX/KEVIN_MIKE_HERRERA.jpg",
    name: "Kevin Mike Herrera Vega",
    role: "Senior Software Engineer",
    description:
      "+7 años de experiencia desarrollando software para industrias como Fin-tech, Comercio, Educación, Salud, Minería, Extracción de Petróleo, Gas y Startups. Experiencia con Javascript y C#.",
  },
  {
    avatar: "/img/POSTMASTER/XX/EVER_JORGE_COA.jpg",
    name: "Ever Jorge Coa Sandoval",
    role: "Desarrollador Full Stack",
    description:
      "Conocimiento y experiencia en la implementación de Aplicaciones Web, Móviles y Sistemas de Información Geográfica SIG (intranet, extranet) a medida utilizando la tecnología ESRI.",
  },
  {
    avatar: "/img/POSTMASTER/XX/DANIEL_URDANIVIA.jpg",
    name: "Francisco Daniel Urdanivia Herrera",
    role: "Proyectos TIC-ERP-SCM",
    description:
      "Dieciséis años de experiencia en proyectos de mejora continua y de implementación de soluciones SAP para la gestión de la cadena de suministro en compañías del sector retail, distribución e industrial.",
  },
];

const Ponentes = (props) => {
  const { ponentes = ExamplePonentes, setPonentes = () => {} } = props;
  return (
    <Box
      id="ponentes"
      component="section"
      variant="gradient"
      py={6}
      px={{ xs: 2, lg: 0 }}
      sx={{
        backgroundColor: colors.bg.light,
        background: `linear-gradient(-45deg, ${colors.bg.main} 0%, ${colors.bg.light} 50%, ${colors.bg.main} 100%)`,
        display: "flex",
        justifyContent: "center",
      }}
      mx={-2}
    >
      <Grid container spacing={3} sx={{ px: { sm: 4 }, maxWidth: 1500 }}>
        <Grid item xs={12}>
          <Typography variant="h3">Ponentes Invitados</Typography>
          <Typography variant="body2">
            Egresad@s de la Escuela Profesional de Ingeniería en Informática y
            Sistemas de la Universidad Nacional Jorge Basadre Grohmann
          </Typography>
          <br />
        </Grid>
        {ponentes.map((ponente) => {
          return (
            <Grid item xs={12} lg={6} key={v4()}>
              <Card
                sx={{
                  display: {
                    sm: "flex",
                  },
                }}
              >
                <CardMedia
                  component={"img"}
                  src={ponente.avatar}
                  sx={{ maxWidth: "175px", mx: "auto" }}
                />
                <CardContent>
                  <Typography variant="h4">{ponente.name}</Typography>
                  <Box display={"flex"} gap={1} color={"info"}>
                    <Work color={"info"} />
                    <Typography variant="h6" style={{ color: "#29B6F6" }}>
                      {ponente.role}
                    </Typography>
                  </Box>
                  <Typography variant="body2">{ponente.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Ponentes;
