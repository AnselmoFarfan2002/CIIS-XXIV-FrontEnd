// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function DigitalBillCard({ logo, name, position, qr, description }) {
  return (
    <Card sx={{ mt: 3 }}>
      <Grid container maxWidth={250} flexDirection={"column"}>
        <Grid item mt={-5}>
          <MKBox pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              src={logo}
              alt={name}
              width="80%"
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>

        <Grid item>
          <MKBox pt={{ xs: 1, lg: 2.5 }} lineHeight={1}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="h6" color={position.color}>
              {position.label}
            </MKTypography>
            <MKTypography variant="body2" color="text">
              {description}
            </MKTypography>
            <MKBox
              component="img"
              src={qr}
              alt={name}
              width="90%"
              mt={1}
              mb={-5}
              borderRadius="md"
              shadow="lg"
            />
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
}

// Typechecking props for the HorizontalTeamCard
DigitalBillCard.propTypes = {
  logo: PropTypes.string.isRequired,
  qr: PropTypes.string.isRequired,
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
};

export default DigitalBillCard;
