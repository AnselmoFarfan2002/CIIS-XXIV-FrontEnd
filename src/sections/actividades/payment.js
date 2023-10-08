import LocalFade from "@/components/Animation/LocalFade";
import colors from "@/styles/colors";
import typography from "@/styles/typography";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { v4 } from "uuid";

export default function ActividadPayment({ fromDash = false }) {
  const px1110 = createTheme().breakpoints.down("md");
  return (
    <Box component="section" id="payment">
      <LocalFade sx={{ mt: 5 }}>
        <Typography variant="h3" fontFamily={typography.h3} mb={1}>
          Métodos de pago
        </Typography>
        <Typography variant="body2">
          Cuentas a nombre de nuestro tesorero, Ronald Mamani Huisa
        </Typography>
      </LocalFade>
      <LocalFade>
        <Grid container mt={-1} spacing={3}>
          {accountBank().map((account) => (
            <Grid item xs={12} md={6} key={v4()}>
              <Card
                sx={{
                  bgcolor: colors.bg.light,
                  width: "100%",
                  display: {
                    sm: "flex",
                  },
                }}
              >
                <CardMedia
                  component={"img"}
                  src={account.src}
                  sx={{
                    aspectRatio: "1/1",
                    maxWidth: {
                      sm: "200px",
                    },
                  }}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography fontFamily={typography.h4}>
                    {account.name}
                  </Typography>
                  <Typography fontFamily={typography.h6}>NRO: </Typography>
                  <Typography fontFamily={typography.body2}>
                    {account.nro}
                  </Typography>
                  <Typography fontFamily={typography.h6}>CCI: </Typography>
                  <Typography fontFamily={typography.body2}>
                    {account.cci}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
          {digitalCarter().map((account) => (
            <Grid item xs={12} md={6} key={v4()}>
              <Card
                sx={{
                  bgcolor: colors.bg.light,
                  width: "100%",
                  display: {
                    sm: "flex",
                  },
                }}
              >
                <CardMedia
                  component={"img"}
                  src={account.src}
                  sx={{
                    aspectRatio: "1/1",
                    maxWidth: {
                      sm: "50%",
                    },
                  }}
                />
                <CardMedia
                  component={"img"}
                  src={account.qr}
                  sx={{
                    aspectRatio: "1/1",
                    maxWidth: {
                      sm: "50%",
                    },
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </LocalFade>
    </Box>
  );
}

function accountBank() {
  return [
    {
      name: "Interbank",
      nro: "8983337369431",
      cci: "00389801333736943143",
      src: "/img/stamp/interbank.png",
    },
    {
      name: "BCP",
      nro: "54091644066086",
      cci: "00254019164406608634",
      src: "/img/stamp/bcp.png",
    },
    {
      name: "Scotiabank",
      nro: "7408263817",
      cci: "009-417-207408263817-75",
      src: "/img/stamp/scotiabank.png",
    },
    {
      name: "Banco de la nación",
      nro: "04-160-330428",
      cci: "018-160-004160330428-22",
      src: "/img/stamp/banco-nacion.png",
    },
  ];
}

function digitalCarter() {
  return [
    {
      name: "Yape",
      nro: "977550266",
      src: "/img/stamp/yape.png",
      qr: "/img/stamp/yape-ronald-2023.png",
    },
    {
      name: "Plin",
      nro: "977550266",
      src: "/img/stamp/plin.png",
      qr: "/img/stamp/plin-ronald-2023.png",
    },
  ];
}
