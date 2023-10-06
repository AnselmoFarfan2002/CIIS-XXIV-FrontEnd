import colors from "@/styles/colors";
import typography from "@/styles/typography";
import {
  Button,
  Dialog,
  DialogContent,
  FormHelperText,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import getFieldStyle from "@/utils/getFieldStyle";
import { useAuth } from "@/context/auth";

const Login = (props) => {
  const { open = false, onClose = () => {} } = props;
  const { login, logged } = useAuth();

  const theme = createTheme({
    palette: { mode: "dark" },
    typography: typography,
  });

  const movil = useMediaQuery(theme.breakpoints.between("xs", "md"));
  const router = useRouter();

  const form = useFormik(getSchemaForm(login));
  const handleClose = () => {
    form.resetForm();
    onClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog
        open={open && !logged}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: colors.bg.card,
          },
        }}
      >
        <DialogContent sx={{ padding: 0 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Grid
                container
                spacing={3}
                sx={{
                  py: 7,
                  px: {
                    xs: 2,
                    sm: 5,
                  },
                }}
              >
                <Grid item xs={12}>
                  <Typography variant="h4" mb={2}>
                    Iniciar sesión
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={{ pt: "12px !important" }}>
                  <TextField
                    type="text"
                    label={"Correo"}
                    variant="filled"
                    fullWidth
                    InputLabelProps={{ sx: { fontSize: 17 } }}
                    inputProps={{ style: { fontSize: 17 } }}
                    {...form.getFieldProps("email")}
                    {...getFieldStyle(form, "email", "")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"Contraseña"}
                    variant="filled"
                    type="password"
                    fullWidth
                    InputLabelProps={{ sx: { fontSize: 17 } }}
                    inputProps={{ style: { fontSize: 17 } }}
                    {...form.getFieldProps("password")}
                    {...getFieldStyle(form, "password", "")}
                  />
                </Grid>
                <Grid item xs={12} sx={{ pt: "35px !important" }}>
                  <Button
                    sx={{
                      px: 5,
                      py: 1.5,
                      fontWeight: "bold",
                      bgcolor: colors.bg.main,
                      color: "white",
                      "&:hover": { bgcolor: colors.bg.secondary },
                    }}
                    variant="contained"
                    endIcon={<LoginIcon />}
                    fullWidth
                    onClick={form.handleSubmit}
                  >
                    Continuar
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <FormHelperText>
                    ¿No registrado aún?{" "}
                    <Link
                      sx={{ cursor: "pointer" }}
                      onClick={() => {
                        handleClose();
                        router.push("/registro");
                      }}
                    >
                      Regístrate
                    </Link>
                  </FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                bgcolor: colors.bg.main,
                display: "grid",
                alignContent: "center",
                justifyContent: "center",
                px: "0 !important",
                py: "24px",
              }}
            >
              <img
                src="/img/CIIS/XXIV/logo.png"
                width={movil ? 100 : 200}
                style={{ padding: 30 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default Login;

function getSchemaForm(login) {
  return {
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Debe ser un email válido")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .min(6, "Al menos 6 caracteres")
        .required("Este campo es obligatorio"),
    }),
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  };
}
