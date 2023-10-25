import colors from "@/styles/colors";
import typography from "@/styles/typography";
import { Search } from "@mui/icons-material";
import { Button, Fade, Grid, TextField, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { abortFetch, fetchByDNI, fetchPost } from "@/utils/data.fetch";
import { useFormik } from "formik";
import * as Yup from "yup";
import getFieldStyle from "@/utils/getFieldStyle";
import { directory } from "@/context/url-context";

import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useAuth } from "@/context/auth";

export default function RegistroForm() {
  const [dniError, setDniError] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const refDniInput = useRef(null);
  const refNameInput = useRef(null);
  const refLastnameInput = useRef(null);
  const router = useRouter();
  const { csfr } = useAuth();

  const abort = abortFetch;

  const success = (user) => {
    Swal.fire({
      title: "Registro exitoso",
      text: "Estás a un solo paso de ser parte de este evento.",
      icon: "success",
    });
    csfr(user, router.query.next ?? "/dashboard");
  };

  const form = useFormik(getSchemaForm({ success, abort, setLoading }));

  const handleFillData = (data) => {
    setUser(data);
    form.setFieldValue("name", data.nombres);
    form.setFieldValue(
      "lastname",
      data.apellido_paterno + " " + data.apellido_materno
    );
  };

  const handleAskData = () => {
    let dni = refDniInput.current.value;
    if (isNaN(Number(dni))) return setDniError("Deben únicamente números");
    if (dni.length != 8) return setDniError("Debe ser de 8 caracteres");

    setDniError("");
    fetchByDNI(dni, handleFillData);
  };

  return (
    <Fade in={true} timeout={{ enter: 1000 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" fontFamily={typography.h3} mb={1}>
            ¡Regístrate!
          </Typography>
          <Typography variant="body2">
            Así podrás inscribirte a cualquier actividad de nuestro evento, ya
            sea la principal (nuestro congreso), talleres o concursos.
          </Typography>
        </Grid>

        <Grid item xs={12} display={"flex"}>
          <TextField
            variant="filled"
            label="DNI"
            InputLabelProps={{ sx: { fontSize: 14 } }}
            inputRef={refDniInput}
            sx={{ flex: 1 }}
            {...form.getFieldProps("dni")}
            {...getFieldStyle(
              form,
              "dni",
              "Ingrese su DNI para cargar su datos"
            )}
          />

          {!user && (
            <Button
              variant="contained"
              sx={{
                mb: 2.78,
                bgcolor: colors.primary.light,
                color: colors.fonts.main,
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              }}
              onClick={handleAskData}
            >
              <Search />
            </Button>
          )}
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="filled"
            label="Nombres"
            inputRef={refNameInput}
            InputLabelProps={{ sx: { fontSize: 14 } }}
            {...form.getFieldProps("name")}
            {...getFieldStyle(form, "name", "")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="filled"
            label="Apellidos"
            inputRef={refLastnameInput}
            InputLabelProps={{ sx: { fontSize: 14 } }}
            {...form.getFieldProps("lastname")}
            {...getFieldStyle(form, "lastname", "")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="filled"
            label="Correo electrónico"
            InputLabelProps={{ sx: { fontSize: 14 } }}
            {...form.getFieldProps("email")}
            {...getFieldStyle(form, "email", "")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="filled"
            label="Contraseña"
            type="password"
            InputLabelProps={{ sx: { fontSize: 14 } }}
            {...form.getFieldProps("password")}
            {...getFieldStyle(form, "password", "")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="filled"
            label="Confirmación de contraseña"
            type="password"
            InputLabelProps={{ sx: { fontSize: 14 } }}
            {...form.getFieldProps("confPassword")}
            {...getFieldStyle(form, "confPassword", "")}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: colors.primary.light,
              color: colors.fonts.main,
            }}
            onClick={form.handleSubmit}
            disabled={loading}
          >
            Registrarse
          </Button>
        </Grid>
      </Grid>
    </Fade>
  );
}

function getSchemaForm({
  success = () => {},
  abort = () => {},
  setLoading = () => {},
}) {
  return {
    initialValues: {
      dni: "",
      name: "",
      lastname: "",
      email: "",
      password: "",
      confPassword: "",
    },
    validationSchema: Yup.object().shape({
      dni: Yup.string()
        .matches(/^[0-9]+$/, "Debe contener solo números")
        .length(8, "Deben ser 8 caracteres")
        .required("Este campo es obligatorio"),
      name: Yup.string().required("Este campo es obligatorio"),
      lastname: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .email("Debe ser un email válido")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .min(6, "Debe tener al menos 6 caracteres")
        .required("Este campo es obligatorio"),
      confPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir")
        .required("Este campo es obligatorio"),
    }),
    onSubmit: (values) => {
      setLoading(true);
      fetchPost(directory.user.src, values, success, (err) => {
        abort(err);
        setLoading(false);
      });
    },
  };
}
