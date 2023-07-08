// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function PostMasterCard() {
  const bgImage =
    "https://teambuildingpercusion.com/wp-content/uploads/2022/09/team-building-eventos-corpo.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={6} sx={{ ml: { xs: 0, lg: 6 } }}>
          <MKTypography style={{ width: "100%" }} variant="h4" color="white" fontWeight="bold">
            Eventos relacionados
          </MKTypography>
          <MKTypography variant="h3" color="white" mb={1}>
            POSTMASTER XX
          </MKTypography>
          <MKTypography variant="body2" color="white" opacity={0.8} mb={2}>
            Únete a nuestro evento de reencuentro de egresados, donde podrás conocer las
            inspiradoras historias de cómo nuestros graduados alcanzaron su actual puesto de
            trabajo, y las dificultades que superaron en el camino. ¡No te lo pierdas!
          </MKTypography>
          <MKTypography
            component="a"
            href="/postmaster"
            target="_blank"
            rel="noreferrer"
            variant="body2"
            color="white"
            fontWeight="regular"
            sx={{
              display: "flex",
              alignItems: "center",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translateX(3px)`,
                transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
              },

              "&:hover .material-icons-round, &:focus .material-icons-round": {
                transform: `translateX(6px)`,
              },
            }}
          >
            Ver más del evento <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default PostMasterCard;
