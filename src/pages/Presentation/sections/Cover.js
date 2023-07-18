// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import Crono from "components/Crono/Crono";

// Images
import bgImage from "assets/images/bg-auditorio-since-izq-sq-Copy.png";
import "pages/Presentation/styles/cover.css";

function PortadaPresentacion() {
  return (
    <MKBox component="header" position="relative">
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) => `
            ${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              CIIS XXIV
            </MKTypography>
            <MKTypography
              variant="h3"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              13/11/2023 - 17/11/2023
            </MKTypography>
            <MKTypography
              id="dateDetailedCover"
              variant="h6"
              color="white"
              mt={-2}
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["m"],
                },
              })}
            >
              Desde el lunes 13 hasta el viernes 17 de noviembre
            </MKTypography>
            <MKTypography id="cronoCover" variant="h3" color="white" opacity={0.8} pr={6} mb={3}>
              <Crono />
            </MKTypography>
            <MKTypography color="white" opacity={0.8} fontSize={16} mb={3} mt={-3}>
              Días : Horas : Minutos : Segundos
            </MKTypography>
            <MKTypography id="desc" variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              Un año más del evento donde converge el conocimiento, un año más del{" "}
              <b>Congreso Internacional de Informática y Sistemas</b>.
            </MKTypography>
            <Stack id="botonesCover" direction="row" spacing={1} mt={3}>
              <MKButton color="white" disabled={true}>
                Inscríbete
              </MKButton>
              <MKButton variant="text" color="white" href="#informacion">
                Leer más
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

export default PortadaPresentacion;
