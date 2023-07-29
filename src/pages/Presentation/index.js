// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "pages/Presentation/sections/Counters";
import Topics from "pages/Presentation/sections/Topics";
import Cover from "pages/Presentation/sections/Cover";
import History from "pages/Presentation/sections/History";

// Presentation page components
import PostMasterCard from "pages/Presentation/components/PostMasterCard";

// Routes
import routes from "routes";

// Images

import "./presentation.css";
// import "medium-zoom/dist/medium-zoom.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CenteredFooter from "examples/Footers/CenteredFooter";

import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Fade,
  ButtonGroup,
  Button,
} from "@mui/material";
import { forwardRef } from "react";
import { useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade direction="up" ref={ref ? ref : null} {...props} />;
});

function Presentation() {
  const [windowSpam, setWindowSpam] = useState(true);
  const handleCloseWindowSpam = () => {
    setWindowSpam(false);
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/",
          label: "Ingresa al CIIS",
          color: "info",
        }}
        sticky
      />
      <Cover />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -2,
          mb: 0,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Counters />
        <Topics />
        <Container sx={{ mt: 6 }}>
          <PostMasterCard />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="facebook"
                title="Estamos en facebook"
                description="Facebook oficial del CIIS donde podrás estar al día con las últimas actualizaciones acerca de las actividades para el evento."
                action={{
                  type: "external",
                  route: "https://www.facebook.com/ciistacna",
                  label: "¡Vamos a ver!",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="secondary"
                icon={<YouTubeIcon />}
                title="Estamos en youtube"
                description="Canal oficial de CIIS donde podrás encontrar transmisiones pasadas del evento y sus relacionados."
                action={{
                  type: "external",
                  route: "https://www.youtube.com/@ciistacna",
                  label: "Revisar canal",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="dark"
                icon={<LinkedInIcon />}
                title="Estamos en LinkedIn"
                description="Contamos con un perfil en LinkedIn para mantener comunicación con ponentes anteriores y futuros."
                action={{
                  type: "external",
                  route:
                    "https://www.linkedin.com/in/congreso-internacional-de-inform%C3%A1tica-y-sistemas-a33bb5226/",
                  label: "Dar un vistazo",
                }}
              />
            </Grid>
          </Grid>
        </Container>
        <MKBox pt={9} pb={10}>
          <Container>
            <Grid container spacing={3}>
              <Grid item xs={12} lg={5} ml="auto" sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography variant="h4" fontWeight="bold" mb={0.5}>
                  ¡Gracias por tu apoyo!
                </MKTypography>
                <MKTypography variant="body1" color="text">
                  Ayuda a difundir este evento con más personas
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=¡Únete al congreso internacional de ingeniería en informática y sistemas en su 24va edición! Descubre más del evento en: https://www.ciistacna.com"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;TWEETEA
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?quote=¡Únete al congreso internacional de ingeniería en informática y sistemas en su 24va edición!&u=https://www.ciistacna.com"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Comparte
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.linkedin.com/sharing/share-offsite/?summary=¡Únete al congreso internacional de ingeniería en informática y sistemas en su 24va edición!&url=https://www.ciistacna.com"
                  target="_blank"
                  color="linkedin"
                >
                  <i className="fab fa-linkedin" />
                  &nbsp;Divulga
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
        <hr />
        <History />
      </Card>
      <MKBox px={1}>
        <CenteredFooter />
      </MKBox>

      <Dialog open={windowSpam} TransitionComponent={Transition} onClose={handleCloseWindowSpam}>
        <DialogTitle sx={{ padding: 1, textAlign: "center" }}>Proximamente</DialogTitle>
        <DialogContent sx={{ padding: 0 }}>
          <img src="/ciis-history/ciis-xxiv/PM-FLYER.jpeg" style={{ height: "70vh" }} />
        </DialogContent>
        <DialogActions sx={{ padding: 0 }}>
          <ButtonGroup sx={{ width: "100%" }}>
            <Button onClick={handleCloseWindowSpam} variant="filled" sx={{ width: "50%", py: 1.5 }}>
              Cerrar
            </Button>
            <Button
              onClick={() => {
                window.location.href = "/postmaster";
              }}
              variant="filled"
              sx={{ width: "50%", py: 1.5 }}
            >
              Ver más
            </Button>
          </ButtonGroup>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Presentation;
