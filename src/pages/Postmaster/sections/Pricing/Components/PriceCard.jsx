import { Component } from "react";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";

export default class PriceCard extends Component {
  render() {
    return (
      <MKBox>
        <MKTypography variant="h5" opacity={0.8}>
          Estudiante ESIS
        </MKTypography>
        <MKTypography variant="h3" opacity={1.0}>
          S/. 80
        </MKTypography>
        <MKTypography variant="body1" opacity={1.0}>
          Kit CIIS
        </MKTypography>
      </MKBox>
    );
  }
}
