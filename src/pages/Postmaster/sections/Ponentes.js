// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
// import unknown from "assets/images/mistery-ponent.jpg";

import ponente1 from "assets/images/PONENTES/PM-XX/BRENDA_BRIGITTE_LOPEZ_VALERA.jpeg";
import ponente2 from "assets/images/PONENTES/PM-XX/Cynthia_Valeriano_Argandonia.jpeg";
import ponente3 from "assets/images/PONENTES/PM-XX/Herson_Urbina.jpeg";
import ponente4 from "assets/images/PONENTES/PM-XX/JESUS_JOSEPH_FLORES_YANCE.jpeg";
import ponente5 from "assets/images/PONENTES/PM-XX/Jhair_Rodrigo_Viveros.jpeg";
import ponente6 from "assets/images/PONENTES/PM-XX/KEVIN_MIKE_HERRERA.jpg";
import ponente7 from "assets/images/PONENTES/PM-XX/EVER_JORGE_COA.jpg";
import ponente8 from "assets/images/PONENTES/PM-XX/DANIEL_URDANIVIA.jpg";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Ponentes Invitados
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Ex egresad@s de la escuela profesional de ingeniería en informática y sistemas de la
              Universidad Nacional Jorge Basadre Grohmann
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={ponente1}
                name="Brenda Brigitte López Valera"
                position={{ color: "info", label: "Aún un misterio" }}
                description="Bachiller de la Carrera de Ingeniería en Informática y Sistemas, con experiencia práctica en en el modelamiento de datos, presentación de datos y simplificación de vistas de datos."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={ponente2}
                name="Cynthia Valeriano Argandoña"
                position={{ color: "info", label: "BI Developer | Data Analyst" }}
                description="+4 años de experiencia en áreas administrativas y 2 años de experiencia en proyectos de Business Intelligence, realizando tareas de migración, limpieza, análisis y visualización de datos."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={ponente3}
                name="Herson Urbina"
                position={{ color: "info", label: "Data Engineer | Manager" }}
                description="+7 años de experiencia en los sectores de energía eléctrica
                y banca. 2 años como Software Engineer y +5 años en Big Data y Analítica Avanzada como Data Engineer/Manager."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={ponente4}
                name="Jesús Joseph Flores Yance"
                position={{ color: "info", label: "Administrador de base de datos" }}
                description="Conocimientos en Spring Boot Java - Microservicios, Reporting Services (SSRS), Integration Services (SSIS), Power BI Report Server, Machine Learning y administración de base de datos."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={ponente5}
                name="Jhair Rodrigo Viveros"
                position={{ color: "info", label: "Lead, Software Engineer" }}
                description="+5 años de experiencia desarrollando aplicaciones web utilizando Javascript, React.js, Laravel y Node.js para
                clientes locales e internacionales. Enamorado de React.js y Javascript/Typescript."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={ponente6}
                name="Kevin Mike Herrera Vega"
                position={{
                  color: "info",
                  label: "Senior Software Engineer",
                }}
                description="+7 años de experiencia desarrollando software para industrias como Fin-tech, Comercio, Educación, Salud, Minería, Extracción de Petróleo, Gas y Startups. Experiencia con Javascript y C#."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={ponente7}
                name="Ever Jorge Coa Sandoval"
                position={{
                  color: "info",
                  label: "Desarrollador Full Stack",
                }}
                description="Conocimiento y experiencia en la implementación de Aplicaciones Web, Móviles y Sistemas de Información Geográfica SIG (intranet, extranet) a medida utilizando la tecnología ESRI."
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={ponente8}
                name="Francisco Daniel Urdanivia Herrera"
                position={{
                  color: "info",
                  label: "Proyectos TIC-ERP-SCM",
                }}
                description="Dieciséis años de experiencia en proyectos de mejora continua y de implementación de soluciones SAP para la gestión de la cadena de suministro en compañías del sector retail, distribución e industrial."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
