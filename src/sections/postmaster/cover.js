import colors from "@/styles/colors";
import { Facebook, LinkedIn, YouTube } from "@mui/icons-material";
import { Box, Grid, Container, Typography, alpha } from "@mui/material";

const PMCover = () => {
  const { gradients } = colors;
  let bgImage = "/img/bg/bg-posmaster.jpg";
  return (
    <Box
      minHeight="100vh"
      width="100%"
      sx={{
        background: `linear-gradient(0deg, ${alpha(
          gradients.dark.main,
          0.6
        )} 0%, ${alpha(gradients.dark.state, 0.6)} 100%), url(${bgImage})`,
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
          <Typography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            POSTMASTER XX
          </Typography>
          <Typography variant="body1" color="white" opacity={0.8} mt={1} mb={0}>
            Encuentro de egresados
          </Typography>
          <Typography variant="h5" color="white" opacity={0.8} mt={1} mb={1}>
            11/08/2023
          </Typography>
          {/* <MKButton
              href="/postmaster/inscripcion"
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              Pre inscripción
            </MKButton> */}
          <Typography variant="h4" color="white">
            Evento finalizado
          </Typography>
          <Typography variant="h6" color="white" mt={1}>
            Encuéntranos
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Typography
              component="a"
              variant="body1"
              color="white"
              href="https://www.facebook.com/ciistacna"
              mx={3}
            >
              <Facebook />
            </Typography>
            <Typography
              component="a"
              variant="body1"
              color="white"
              href="https://pe.linkedin.com/in/congreso-internacional-de-inform%C3%A1tica-y-sistemas-a33bb5226"
              mr={3}
            >
              <LinkedIn />
            </Typography>
            <Typography
              component="a"
              variant="body1"
              color="white"
              href="https://www.youtube.com/@ciistacna"
              mr={3}
            >
              <YouTube />
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default PMCover;
