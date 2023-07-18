// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
// import RotatingCard from "examples/Cards/RotatingCard";
// import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
// import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
// import bgFront from "assets/images/rotating-card-bg-front.jpg";
// import bgBack from "assets/images/rotating-card-bg-back.jpg";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
// import bgBack from "assets/images/logo-ciis-full-colo.png";

function Information() {
  const xs = 12;
  const sm = 6;
  const md = 6;
  const lg = 4;
  const xl = 3;
  return (
    <MKBox component="section" id="informacion" py={3} my={6}>
      <Container>
        <Grid container item xs={12} alignItems="center" sx={{ mx: "auto" }}>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <DefaultInfoCard
                icon="smart_toy"
                title="Inteligencia artificial"
                description="Descubre cómo la inteligencia artificial está transformando la industria e impactando en la vida de las personas.
                  ¿Quieres conocer las últimas tendencias respecto a la inteligencia artificial y cómo aplicarlas en tu trabajo diario?"
              />
            </Grid>
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <DefaultInfoCard
                icon="verified_user"
                title="Ciberseguridad"
                description="Protege tus datos y activos digitales de los ciberataques con las últimas tendencias en ciberseguridad.
                  ¿Estás interesado en conocer cómo podemos asegurar la privacidad y seguridad de nuestros datos en un mundo cada vez más digital?"
              />
            </Grid>
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <DefaultInfoCard
                icon="terminal"
                title="Desarrollo de software"
                description="Descubre las mejores prácticas en el desarrollo de software y cómo aplicarlas en tu trabajo.
                  ¿Te gustaría conocer cómo la metodología ágil está transformando el desarrollo de software y mejorando la eficiencia de los equipos?"
              />
            </Grid>
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <DefaultInfoCard
                icon="engineering"
                title="Ciencia de datos"
                description="Sumérgete en el mundo de la ciencia de datos y descubre cómo utilizar los datos para obtener información valiosa. Aprende sobre técnicas de análisis de datos y la aplicación de algoritmos de aprendizaje automático para tomar decisiones basadas en datos."
              />
            </Grid>
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <DefaultInfoCard
                icon="terminal"
                title="Computación en la nube"
                description="Explora los beneficios y desafíos de la computación en la nube y cómo puede transformar la forma en que las empresas y organizaciones gestionan sus recursos tecnológicos. Aprende sobre los diferentes servicios de la nube y cómo aprovecharlos eficazmente."
              />
            </Grid>
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <DefaultInfoCard
                icon="engineering"
                title="Ingeniería de Software"
                description="Descubre las últimas tendencias en ingeniería de software y cómo aplicarlas en tu trabajo diario. ¿Quieres conocer cómo la ingeniería de software está transformando la industria y mejorando la calidad de vida de las personas?"
              />
            </Grid>
            <Grid item xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              <DefaultInfoCard
                icon="terminal"
                title="Remote Sensing & IoT"
                description="Explora el campo de la teledetección (remote sensing) y el Internet de las cosas (IoT) y cómo se utilizan para recopilar datos en tiempo real y obtener información sobre nuestro entorno. Aprende sobre las aplicaciones en diferentes industrias y sectores."
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
