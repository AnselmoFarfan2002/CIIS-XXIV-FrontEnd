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
  alpha,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";

const Login = (props) => {
  const { open = false, onClose = () => {} } = props;

  const theme = createTheme({
    palette: { mode: "dark" },
    typography: typography,
  });

  const movil = useMediaQuery(theme.breakpoints.between("xs", "md"));

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open} onClose={onClose}>
        <DialogContent sx={{ padding: 0 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={3} sx={{ padding: 7 }}>
                <Grid item xs={12}>
                  <Typography variant="h4">Iniciar sesión</Typography>
                </Grid>
                <Grid item xs={12} sx={{ pt: "12px !important" }}>
                  <TextField
                    type="text"
                    name="email"
                    label={"Correo"}
                    variant="standard"
                    inputProps={{ style: { fontSize: 17 } }}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label={"Contraseña"}
                    variant="standard"
                    inputProps={{ style: { fontSize: 17 } }}
                    fullWidth
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
                  >
                    Continuar
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <FormHelperText>
                    ¿No registrado aún?{" "}
                    <Link sx={{ cursor: "pointer" }}>Registrate</Link>
                  </FormHelperText>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                bgcolor: colors.bg.main,
                display: "grid",
                alignContent: "center",
                justifyContent: "center",
                px: "0 !important",
                py: "24px",
              }}
            >
              <img src="/img/CIIS/XXIV/logo.png" width={movil ? 100 : 200} />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </ThemeProvider>
  );
};

export default Login;
