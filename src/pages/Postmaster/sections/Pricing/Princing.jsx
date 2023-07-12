import { Component } from "react";
import PriceCard from "./Components/PriceCard";
import { Container } from "@mui/material";

export default class Pricing extends Component {
  render() {
    return (
      <>
        <Container>
          <PriceCard />
        </Container>
      </>
    );
  }
}
