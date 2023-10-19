import LocalFade from "@/components/Animation/LocalFade";
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
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { abortFetch, fetchPostWithFile } from "@/utils/data.fetch";
import { directory } from "@/context/url-context";
import Swal from "sweetalert2";
import { useAuth } from "@/context/auth";

export default function TallerRegistro({ taller = {}, handleBack = () => {} }) {
  const { logout = () => {} } = useAuth();
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  function handleSucess() {
    Swal.fire({
      title: "Pre-inscrito con éxito",
      text: "Aún será necesaria una validación por parte de los organizadores, sin embargo su vacante ya ha sido reservada",
      confirmButtonText: "Aceptar",
      icon: "success",
    });
    setLoading(false);
  }

  function handleFail(err) {
    setLoading(false);
    if (err.code == 409) {
      Swal.fire({
        title: "Ha ocurrido un error",
        text: "Usted ya se encuentra registrado",
        confirmButtonText: "Aceptar",
        icon: "error",
      });
    } else if (err.code == 401) {
      Swal.fire({
        title: "Ha ocurrido un error",
        text: "Su sesión ha caducado, vuelva a inciar sesión",
        confirmButtonText: "Aceptar",
        icon: "error",
      });
      logout();
    } else {
      abortFetch();
    }
  }

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    let formData = new FormData(formRef.current);
    fetchPostWithFile(
      directory.taller.one(taller.id).participant,
      formData,
      handleSucess,
      handleFail
    );
  };

  return (
    <LocalFade>
      <Grid container maxWidth={"lg"}>
        <Grid item xs={12}>
          <Button
            startIcon={<ArrowLeft />}
            sx={{ color: "white" }}
            onClick={handleBack}
          >
            Volver
          </Button>
        </Grid>
        <Grid item sm={10} md={9}>
          <Card>
            <CardHeader
              sx={{ textAlign: "center" }}
              title="Pre inscribiéndote"
              subheader="Es sencillo, solo debe subir su comprobante 😄"
            />
            <CardContent sx={{ mt: -4 }}>
              <Grid
                container
                spacing={3}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Grid item>
                  <img src="/img/stamp/taller.png" width={"100px"} />
                </Grid>
                <Grid
                  item
                  sx={{
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  <Typography
                    fontFamily={typography.h6}
                    sx={{
                      mt: -1,
                      wordSpacing: 3,
                      fontVariant: "small-caps",
                    }}
                  >
                    {taller.name}
                  </Typography>
                  <Typography
                    fontFamily={typography.h6}
                    sx={{
                      fontWeight: 400,
                    }}
                  >
                    {taller.relatedSpeaker.name_speaker +
                      " " +
                      taller.relatedSpeaker.lastname_speaker}
                  </Typography>
                  <Typography
                    fontFamily={typography.body2}
                    sx={{
                      fontWeight: 400,
                      fontSize: 12,
                    }}
                  >
                    {taller.relatedSpeaker.university_speaker}
                  </Typography>
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
                    S/. {taller.price}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={10}
                  md={8}
                  component={"form"}
                  onSubmit={handleSubmit}
                  ref={formRef}
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
                      accept="image/*"
                      name="payment_doc"
                      required
                    />
                    <FormHelperText>
                      Una imagen de su comprobante
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
                    disabled={loading}
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
