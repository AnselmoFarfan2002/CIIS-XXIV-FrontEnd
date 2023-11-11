import LocalFade from "@/components/Animation/LocalFade";
import { useAuth } from "@/context/auth";
import typography from "@/styles/typography";
import { createTheme } from "@/theme";
import capitalizeWords from "@/utils/capitalize";
import fromSVGtoJPG from "@/utils/fromSVGtoJPG";
import getFieldStyle from "@/utils/getFieldStyle";
import { Download, Save } from "@mui/icons-material";
import canvg from "canvg";

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme as MUICT,
  FormHelperText,
} from "@mui/material";
import { useFormik } from "formik";
import Head from "next/head";
import { QRCodeSVG } from "qrcode.react";
import * as Yup from "yup";
import { abortFetch, fetchPatch } from "@/utils/data.fetch";
import { directory } from "@/context/url-context";
import Swal from "sweetalert2";
import { useEffect } from "react";

const { default: DashboardLayout } = require("@/layouts/dashboard/layout");

function Page() {
  const { user, setInscriptionCiis, logout } = useAuth();

  const formikPhone = useFormik(
    getValidationPhoneEdit({ onSubmit: handleUpdatePhone })
  );
  const formikPass = useFormik(
    getValidationPwdEdit({ onSubmit: handleUpdatePass })
  );
  const theme = MUICT({ palette: { mode: "dark" } });
  const themeC = createTheme({ palette: { mode: "dark" } });

  useEffect(() => {
    formikPhone.setFieldValue(
      "phone",
      Boolean(user.phone) ? user.phone : "No especificado"
    );
  }, []);

  function failServer(err) {
    if (err.code) {
      if (err.code == 401) {
        Swal.fire("¡Ups!", "Sesión expirada", "error");
        logout("/actividades?next=/dashboard/cuenta");
      } else abortFetch(err);
    } else abortFetch(err);
  }

  function handleUpdatePhone(values) {
    fetchPatch(
      directory.user.phone,
      values,
      () => {
        Swal.fire({
          title: "Teléfono actualizado",
          text: "Se ha actualizado el teléfono en tu cuenta",
          confirmButtontext: "Aceptar",
          icon: "success",
        });
        user.phone = values.phone;
        setInscriptionCiis(user);
      },
      failServer
    );
  }

  function handleUpdatePass(values) {
    fetchPatch(
      directory.user.password,
      values,
      () => {
        Swal.fire({
          title: "Contraseña actualizada",
          text: "Se ha actualizado la contraseña de tu cuenta",
          confirmButtontext: "Aceptar",
          icon: "success",
        });
      },
      failServer
    );
  }

  return (
    <>
      <Head>
        <title>Cuenta | CIIS</title>
        <meta
          name="description"
          content={`Información acerca de tu cuenta registrada en el CIIS WebApp`}
        />
      </Head>
      <Container maxWidth={"md"} sx={{ mx: "0" }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <LocalFade>
              <Typography variant="h3" fontFamily={typography.h3} mb={1}>
                Cuenta
              </Typography>
              <Typography variant="body2">
                Información de registro en el sistema
              </Typography>
            </LocalFade>
          </Grid>

          <Grid item xs={12} sm={5} md={3}>
            <Grid container>
              <Grid item xs={12}>
                <LocalFade>
                  <Typography
                    variant="h6"
                    fontFamily={typography.h3.fontFamily}
                  >
                    Credencial QR
                  </Typography>
                </LocalFade>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  sx={{
                    my: 2,
                    backgroundColor: "white",
                  }}
                >
                  <QRCodeSVG
                    width={"100%"}
                    height={"100%"}
                    id="QRcredencial"
                    style={{ padding: "5%", backgroundColor: "white" }}
                    value={JSON.stringify(user, [
                      "id",
                      "dni",
                      "role",
                      "name",
                      "lastname",
                    ])}
                  />
                </Paper>
                <FormHelperText sx={{ mt: -1 }}>
                  Necesaria para la asistencia
                </FormHelperText>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={9}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <LocalFade>
                  <Typography
                    variant="h6"
                    fontFamily={typography.h3.fontFamily}
                  >
                    Datos personales
                  </Typography>
                </LocalFade>
              </Grid>

              <ThemeProvider theme={theme}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Nombres"
                    value={capitalizeWords(user?.name)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Apellidos"
                    value={capitalizeWords(user?.lastname)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Correo"
                    value={user?.email}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="DNI"
                    value={user?.dni}
                  />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Teléfono"
                    type="text"
                    InputProps={{ sx: { borderStartEndRadius: 0 } }}
                    {...formikPhone.getFieldProps("phone")}
                    {...getFieldStyle(formikPhone, "phone")}
                  />
                  <ThemeProvider theme={themeC}>
                    <Button
                      variant="contained"
                      color="blue"
                      sx={{
                        borderRadius: 0,
                        mb:
                          formikPhone.errors.phone && formikPhone.touched.phone
                            ? 3
                            : 0,
                      }}
                      onClick={formikPhone.handleSubmit}
                    >
                      <Save></Save>
                    </Button>
                  </ThemeProvider>
                </Grid>
              </ThemeProvider>

              <Grid item xs={12}>
                <LocalFade>
                  <Typography
                    variant="h6"
                    fontFamily={typography.h3.fontFamily}
                  >
                    Credenciales
                  </Typography>
                </LocalFade>
              </Grid>

              <ThemeProvider theme={theme}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Nueva contraseña"
                    type="password"
                    {...formikPass.getFieldProps("password")}
                    {...getFieldStyle(formikPass, "password")}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    variant="filled"
                    label="Confirmación de contraseña"
                    type="password"
                    {...formikPass.getFieldProps("confPassword")}
                    {...getFieldStyle(formikPass, "confPassword")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <ThemeProvider theme={themeC}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="blue"
                      startIcon={<Save />}
                      onClick={formikPass.handleSubmit}
                    >
                      Cambiar contraseña
                    </Button>
                  </ThemeProvider>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

function getValidationPhoneEdit({ onSubmit = console.log }) {
  return {
    initialValues: { phone: "" },
    validationSchema: Yup.object().shape({
      phone: Yup.string()
        .matches(
          /^([0-9]{9})|(\+[0-9]{2,3} [0-9]{9})$/,
          "El formato no es válido"
        )
        .required("Es necesario este valor"),
    }),
    onSubmit,
  };
}

function getValidationPwdEdit({ onSubmit = console.log }) {
  return {
    initialValues: { password: "", confPassword: "" },
    validationSchema: Yup.object().shape({
      confPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .min(6, "Debe contener al menos 6 caracteres")
        .required("Es necesario para poder contactarlo"),
    }),
    onSubmit,
  };
}

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
