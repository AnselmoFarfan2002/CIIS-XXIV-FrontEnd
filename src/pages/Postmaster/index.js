// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/CenteredFooter/index.js";

// About Us page sections
import CartasInformacion from "pages/Postmaster/sections/CartasInformacion";
import Ponentes from "pages/Postmaster/sections/Ponentes";
import Auspiciadores from "pages/Postmaster/sections/Auspiciadores";
// import Pricing from "./sections/Pricing/Princing";
// import Newsletter from "pages/LandingPages/AboutUs/sections/Newsletter";

// Routes
import { routesOutMain } from "routes";
// Images
import bgImage from "assets/images/bg-posmaster.jpg";

function PostMaster() {
  return (
    <>
      <DefaultNavbar routes={routesOutMain} transparent light />
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              POSTMASTER XX
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={0}>
              Encuentro de egresados
            </MKTypography>
            <MKTypography variant="h5" color="white" opacity={0.8} mt={1} mb={1}>
              11/08/2023
            </MKTypography>
            <MKButton
              href="/postmaster/inscripcion"
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              Pre inscripción
            </MKButton>
            <MKTypography variant="h6" color="white" mt={1}>
              Encuéntranos
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.facebook.com/ciistacna"
                mx={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://pe.linkedin.com/in/congreso-internacional-de-inform%C3%A1tica-y-sistemas-a33bb5226"
                mr={3}
              >
                <i className="fab fa-linkedin" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="https://www.youtube.com/@ciistacna"
                mr={3}
              >
                <i className="fab fa-youtube" />
              </MKTypography>
            </MKBox>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -4,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <CartasInformacion />
        <Ponentes />
        <Auspiciadores />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter />
      </MKBox>
    </>
  );
}

export default PostMaster;
