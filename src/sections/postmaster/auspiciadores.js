import { Box, Card, CardMedia, Container, Grid } from "@mui/material";

const Auspiciadores = () => {
  const auspiciadores = [
    "/img/auspiciadores/montoya.png",
    "/img/auspiciadores/itel.png",
    "/img/auspiciadores/ceid.png",
    "/img/auspiciadores/primavera.png",
  ];

  return (
    <Box
      component="section"
      mt={8}
      pt={3}
      pb={3}
      style={{ background: "white" }}
    >
      <Grid container spacing={3} justifyContent="center" padding={5}>
        {auspiciadores.map((a, idx) => {
          return (
            <Grid
              key={"auspiciador-" + idx}
              item
              xs={6}
              md={4}
              lg={3}
              display={"flex"}
              justifyContent={"center"}
              style={{ padding: 0 }}
            >
              <Card
                sx={{
                  background: "transparent",
                  border: 0,
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  component={"img"}
                  src={a}
                  sx={{ padding: 2 }}
                  style={{ maxWidth: "100%", maxHeight: "150px" }}
                />
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Auspiciadores;
