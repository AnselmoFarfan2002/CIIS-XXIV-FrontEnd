import MKTypography from "components/MKTypography";
import { Grid } from "@mui/material";

import yapeLogo from "assets/images/logos/yape.png";
import plinLogo from "assets/images/logos/plin.png";
import interbankLogo from "assets/images/logos/interbank.png";
import yapeQR from "assets/images/cuentasPagos/yape.png";
import plinQR from "assets/images/cuentasPagos/plin.png";

import DigitalBillCard from "examples/Cards/PayCards/DigitalBillCard";
import CCCard from "examples/Cards/PayCards/CCCard";
import MKBox from "components/MKBox";
import MKBadge from "components/MKBadge";

export default function MetodosPago() {
  const cuentaBancaria = [
    {
      name: "Interbank",
      app: interbankLogo,
      type: "Cuenta bancaria",
      description: "¡Paga por transferencia!",
      cc: "8983337369431",
      cci: "00389801333736943143",
    },
  ];
  const depoAppMovil = [
    {
      name: "Yape",
      app: yapeLogo,
      type: "Billetera digital",
      description: "¡Escanea el código QR!",
      qr: yapeQR,
    },
    {
      name: "Plin",
      app: plinLogo,
      type: "Billetera digital",
      description: "¡Escanea el código QR!",
      qr: plinQR,
    },
  ];
  return (
    <>
      <Grid
        item
        container
        xs={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: "center", mt: 5, mx: "auto", px: 0.75 }}
      >
        <MKBox>
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="¿Cómo pagar?"
            container
            sx={{ mb: 2 }}
          />
        </MKBox>
        <MKTypography variant="h2" fontWeight="bold">
          Métodos de pago
        </MKTypography>
        <MKTypography variant="body2" mt={1}>
          Cuentas a nombre de: Ronald Mamani Huisa
        </MKTypography>

        <MKBox sx={{ height: 10, width: "70%", borderBottom: 1 }} my={1} opacity={0.5} />
      </Grid>
      <Grid
        container
        align="center"
        gap={5}
        sx={{
          rowGap: {
            sm: 10,
            xs: 10,
          },
          mb: 7,
        }}
        justifyContent={"center"}
      >
        {cuentaBancaria.map((method, idx) => (
          <MKBox key={new Date() * idx} maxWidth={500}>
            <CCCard
              image={method.app}
              cc={method.cc}
              cci={method.cci}
              name={method.name}
              position={{ color: "info", label: method.type }}
              description={method.description}
            />
          </MKBox>
        ))}
      </Grid>
      <Grid
        container
        align="center"
        gap={5}
        sx={{
          rowGap: {
            sm: 10,
            xs: 10,
          },
        }}
        justifyContent={"center"}
      >
        {depoAppMovil.map((method, idx) => (
          <MKBox key={new Date() * idx}>
            <DigitalBillCard
              logo={method.app}
              qr={method.qr}
              name={method.name}
              position={{ color: "info", label: method.type }}
              description={method.description}
            />
          </MKBox>
        ))}
      </Grid>
    </>
  );
}
