// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Images
import unknown from "assets/images/mistery-ponent.jpg";

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
              universidad nacional Jorge Basadre Grohmann
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={unknown}
                name="Ponente 1"
                position={{ color: "info", label: "Aún un misterio" }}
                description="Ex egresad@ de la ESIS/UNJBG ¿lograrás descubrir de quién se trata?"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={unknown}
                name="Ponente 2"
                position={{ color: "info", label: "Aún un misterio" }}
                description="Ex egresad@ de la ESIS/UNJBG ¿lograrás descubrir de quién se trata?"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={unknown}
                name="Ponente 3"
                position={{ color: "info", label: "Aún un misterio" }}
                description="Ex egresad@ de la ESIS/UNJBG ¿lograrás descubrir de quién se trata?"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={unknown}
                name="Ponente 4"
                position={{ color: "info", label: "Aún un misterio" }}
                description="Ex egresad@ de la ESIS/UNJBG ¿lograrás descubrir de quién se trata?"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={unknown}
                name="Ponente 5"
                position={{ color: "info", label: "Aún un misterio" }}
                description="Ex egresad@ de la ESIS/UNJBG ¿lograrás descubrir de quién se trata?"
              />
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={unknown}
                name="Ponente 6"
                position={{ color: "info", label: "Aún un misterio" }}
                description="Ex egresad@ de la ESIS/UNJBG ¿lograrás descubrir de quién se trata?"
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
