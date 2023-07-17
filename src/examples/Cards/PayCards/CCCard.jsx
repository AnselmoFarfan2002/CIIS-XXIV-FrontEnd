// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function CCCard({ image, name, position, description, cc, cci }) {
  return (
    <Card sx={{ mt: 3, p: 3 }}>
      <Grid container maxWidth={{ xs: "200px", sm: "50%", md: "100%" }} mx={"auto"} rowGap={3}>
        <Grid item md={4} lg={4}>
          <MKBox width="100%">
            <MKBox
              component="img"
              src={image}
              alt={name}
              width="100%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>
        <Grid item md={8} lg={8} sx={{ my: "auto" }}>
          <MKBox lineHeight={1}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="h6" color={position.color}>
              {position.label}
            </MKTypography>
            <MKTypography variant="body2" color="text" mb={1}>
              {description}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              CC: {cc}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              CCI: {cci}
            </MKTypography>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
CCCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  cc: PropTypes.string,
  cci: PropTypes.string,
};

export default CCCard;
