// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
// import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import PageviewIcon from "@mui/icons-material/Pageview";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon={<PageviewIcon color="info" fontSize="large" />}
                    title="Descubre"
                    description="Como nuestros egresados han llegado a la posición laboral en la que se encuentran."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon={<PersonSearchIcon color="info" fontSize="large" />}
                    title="Conecta"
                    description="Ten la oportunidad de conocer y establecer comunicación con los ponentes del evento."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon={<LightbulbIcon color="info" fontSize="large" />}
                    title="Aprende"
                    description="De las experiencias de los ponentes para facilitar tu camino en el ámbito laboral."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon={<PsychologyAltIcon color="info" fontSize="large" />}
                    title="Pregunta"
                    description="Todos los detalles ocultos y díficiles de conocer directamente a nuestros egresados."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
