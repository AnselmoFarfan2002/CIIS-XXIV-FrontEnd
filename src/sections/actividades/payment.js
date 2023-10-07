import LocalFade from "@/components/Animation/LocalFade";
import colors from "@/styles/colors";
import typography from "@/styles/typography";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function ActividadPayment() {
  return (
    <>
      <LocalFade sx={{ mt: 5 }}>
        <Typography variant="h3" fontFamily={typography.h3} mb={1}>
          Métodos de pago
        </Typography>
        <Typography variant="body2">
          Cuentas a nombre de nuestro tesorero, Ronald Mamani Huisa
        </Typography>
      </LocalFade>
      <LocalFade>
        <Grid container mt={2}>
          <Grid xs={12} md={6}>
            <Card
              sx={{
                bgcolor: colors.bg.light,
                display: {
                  sm: "flex",
                },
                width: "100%",
              }}
            >
              <CardMedia
                component={"img"}
                src="/img/stamp/interbank.png"
                sx={{
                  maxWidth: {
                    sm: 150,
                  },
                }}
              />
              <CardContent>
                <Typography fontFamily={typography.h4}>Interbank</Typography>
                <Typography fontFamily={typography.h6}>NRO: </Typography>
                <Typography fontFamily={typography.body2}>
                  8983337369431
                </Typography>
                <Typography fontFamily={typography.h6}>CCI: </Typography>
                <Typography fontFamily={typography.body2}>
                  00389801333736943143
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </LocalFade>
    </>
  );
}
