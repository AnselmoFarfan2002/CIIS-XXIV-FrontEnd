import LocalFade from "@/components/Animation/LocalFade";
import { costosCIIS } from "@/sections/actividades/data";
import colors from "@/styles/colors";
import typography from "@/styles/typography";
import { ArrowLeft, UploadFile } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import { register } from "./sendData";
import { useAuth } from "@/context/auth";

export default function CIISregistroFormStudent({ view, setView = () => {} }) {
  const [costo] = costosCIIS.filter((a) => a.id == view);
  const formRef = useRef(null);
  const { setInscriptionCiis } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    register(formRef, view, setInscriptionCiis);
  };

  return (
    <LocalFade>
      <Grid container maxWidth={"lg"}>
        <Grid item xs={12}>
          <Button
            startIcon={<ArrowLeft />}
            sx={{ color: "white" }}
            onClick={() => setView(null)}
          >
            Volver
          </Button>
        </Grid>
        <Grid item sm={10} md={8}>
          <Card>
            <CardHeader
              sx={{ textAlign: "center" }}
              title="Pre inscribiéndote"
              subheader="Adjunte su comprobante y su carnet o ficha de matrícula"
            />
            <CardContent sx={{ mt: -4 }}>
              <Grid
                container
                spacing={3}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Grid item>
                  <img src="/img/stamp/lecture.png" width={"100px"} />
                </Grid>
                <Grid
                  item
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    fontFamily={typography.h3}
                    sx={{
                      mt: -2,
                      fontFamily: "Arial Black, Gadget, sans-serif",
                      fontSize: 37,
                      letterSpacing: -3,
                      wordSpacing: 3,
                      fontWeight: 400,
                      fontVariant: "small-caps",
                    }}
                  >
                    CIIS - XXIV
                  </Typography>
                  <Typography
                    fontFamily={typography.h6}
                    sx={{
                      mt: -1,
                      wordSpacing: 3,
                      fontVariant: "small-caps",
                    }}
                  >
                    {costo.name}
                  </Typography>
                  <Typography variant="body2">{costo.desc}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider
                    light={false}
                    sx={{ borderColor: "white" }}
                  ></Divider>
                </Grid>
                <Grid item xs={12} textAlign={"center"}>
                  <Typography fontFamily={typography.h6} mt={-1}>
                    Aportando
                  </Typography>
                  <Typography fontFamily={typography.h3}>
                    S/. {costo.value}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={10}
                  md={8}
                  ref={formRef}
                  component={"form"}
                  onSubmit={handleSubmit}
                >
                  <FormControl style={{ width: "100%" }}>
                    <FormHelperText
                      sx={{
                        mb: 0.5,
                        color: "white",
                        fontFamily: typography.body2.fontFamily,
                      }}
                    >
                      Comprobante de pago
                    </FormHelperText>
                    <input
                      className="form-control"
                      type="file"
                      name="payment_doc"
                      required
                    />
                    <FormHelperText>
                      Una imagen de su comprobante
                    </FormHelperText>
                  </FormControl>
                  <FormControl sx={{ width: "100%", mt: 2 }}>
                    <FormHelperText
                      sx={{
                        mb: 0.5,
                        color: "white",
                        fontFamily: typography.body2.fontFamily,
                      }}
                    >
                      Carnet o ficha de matrícula
                    </FormHelperText>
                    <input
                      className="form-control"
                      type="file"
                      name="scholar_doc"
                      required
                    />
                    <FormHelperText>
                      Para acreditar que es estudiante
                    </FormHelperText>
                  </FormControl>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      textTransform: "uppercase",
                      fontWeight: 600,
                      bgcolor: colors.primary.main,
                    }}
                    startIcon={<UploadFile />}
                    color="info"
                    type="submit"
                  >
                    Registrar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </LocalFade>
  );
}
