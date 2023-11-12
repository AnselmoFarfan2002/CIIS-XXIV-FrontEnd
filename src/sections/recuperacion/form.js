import { directory } from "@/context/url-context";
import colors from "@/styles/colors";
import typography from "@/styles/typography";
import { fetchPost } from "@/utils/data.fetch";
import getFieldStyle from "@/utils/getFieldStyle";
import { Info, Send } from "@mui/icons-material";
import {
  Box,
  Button,
  FormHelperText,
  Grid,
  TextField,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import Swal from "sweetalert2";
import * as Yup from "yup";

export default function RecuperacionForm() {
  const [loading, setLoading] = useState(false);
  const theme = createTheme({ palette: { mode: "dark" } });
  const formikEmail = useFormik(formikEmailControl(setLoading));
  const formikAll = useFormik(formikControl(setLoading));

  function formikControl(setLoading = () => {}) {
    return {
      initialValues: {
        dni: "",
        code: "",
      },
      validationSchema: Yup.object().shape({
        dni: Yup.string()
          .matches(/^[0-9]+$/, "Debe contener solo números")
          .length(8, "Deben ser 8 caracteres")
          .required("Este campo es obligatorio"),
        code: Yup.string().required("Este campo es obligatorio"),
      }),
      onSubmit: (values) => {
        if (formikEmail.isValid) {
          setLoading(true);
          Swal.fire({
            icon: "info",
            title: "Atención",
            text: "Se enviará el código único de usuario a la cuenta asociada, en caso existiese",
            confirmButtonText: "Enviar",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
          })
            .then((res) => {
              if (res.isConfirmed)
                fetchPost(
                  directory.user.restore,
                  { ...values, email: formikEmail.values.email },
                  () =>
                    Swal.fire(
                      "Listo",
                      "Se ha enviado el código a su email",
                      "success"
                    ),
                  (err) => {
                    if (err?.code)
                      return Swal.fire(err.error, err.reason, "error");
                    else
                      return Swal.fire(
                        "Error",
                        "Ha ocurrido un error inesperado",
                        "error"
                      );
                  },
                  () => setLoading(false)
                );
              else setLoading(false);
            })
            .catch((err) => {
              setLoading(false);
              console.log(err);
            });
        }
      },
    };
  }

  function formikEmailControl(setLoading = () => {}) {
    return {
      initialValues: {
        email: "",
      },
      validationSchema: Yup.object().shape({
        email: Yup.string()
          .email("Debe ser un email válido")
          .required("Campo obligatorio"),
      }),
      onSubmit: (values) => {
        setLoading(true);
        Swal.fire({
          icon: "info",
          title: "Atención",
          text: "Al realizar la restauración su código único de usuario cambiará por seguridad. El nuevo código y contraseña se le serán enviados al correo electrónico.",
          confirmButtonText: "Enviar",
          showCancelButton: true,
          cancelButtonText: "Cancelar",
        })
          .then((res) => {
            if (res.isConfirmed)
              fetchPost(
                directory.user.code,
                { email: values.email },
                () => {
                  Swal.fire(
                    "Listo",
                    "Se han enviado las credenciales a su correo electrónico",
                    "success"
                  );
                  setLoading(false);
                },
                (err) => {
                  if (err?.code) Swal.fire(err.error, err.reason, "error");
                  else
                    Swal.fire(
                      "Error",
                      "Ha ocurrido un error inesperado",
                      "error"
                    );

                  setLoading(false);
                }
              );
            else setLoading(false);
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
          });
      },
    };
  }

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" fontFamily={typography.h3} mb={1}>
            Restauración
          </Typography>
          <Typography variant="body2">
            Ingresa los siguientes datos para poder restaurar tu contraseña.
            Puedes solicitar el código único de usuario en caso de no tenerlo,
            este llegará al correo.
          </Typography>
        </Grid>
        <ThemeProvider theme={theme}>
          <Grid item xs={12} display={"flex"}>
            <TextField
              fullWidth
              variant="filled"
              label={"Correo electrónico"}
              InputProps={{
                sx: {
                  borderStartEndRadius: 0,
                  borderEndEndRadius: 0,
                },
              }}
              {...formikEmail.getFieldProps("email")}
              {...getFieldStyle(formikEmail, "email")}
            />
            <Tooltip title="Envíame mi código">
              <Button
                disabled={loading}
                onClick={formikEmail.handleSubmit}
                variant="contained"
                sx={{
                  bgcolor: colors.primary.light,
                  color: colors.fonts.main,
                  borderStartStartRadius: 0,
                  borderEndStartRadius: 0,
                  mb: formikEmail.errors.email ? 2.75 : 0,
                }}
              >
                <Send />
              </Button>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="filled"
              label={"DNI"}
              {...formikAll.getFieldProps("dni")}
              {...getFieldStyle(formikAll, "dni")}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              variant="filled"
              label={"Código único de usuario"}
              {...formikAll.getFieldProps("code")}
              {...getFieldStyle(formikAll, "code")}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={loading}
              fullWidth
              variant="contained"
              sx={{
                bgcolor: colors.primary.light,
                color: colors.fonts.main,
              }}
              onClick={() => {
                formikEmail.validateField("email");
                formikEmail.setFieldTouched("email", true, true);
                formikAll.handleSubmit();
              }}
            >
              Restaurar
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
              opacity: 0.7,
              fontFamily: theme.typography.body2,
            }}
          >
            <Box>
              <Info />
            </Box>
            <Box>
              Envía tu código único de usuario a tu correo con el botón al lado
              del correo electrónico
            </Box>
          </Grid>
        </ThemeProvider>
      </Grid>
    </>
  );
}
