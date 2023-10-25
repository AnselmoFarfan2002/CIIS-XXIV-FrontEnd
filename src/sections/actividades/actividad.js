import colors from "@/styles/colors";
import typography from "@/styles/typography";
import { ArrowLeft, ArrowRight, CheckCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Zoom,
} from "@mui/material";
import { costosCIIS } from "./data";
import { v4 } from "uuid";
import LocalFade from "@/components/Animation/LocalFade";
import LocalZoom from "@/components/Animation/LocalZoom";
import { useRouter } from "next/router";
import { useAuth } from "@/context/auth";
import Swal from "sweetalert2";

export default function ActividadMain({
  title = "Evento principal",
  subHeader = "Detalles de todas las actividades disponibles durante este evento",
  fromDash = false,
  setView = () => {},
  handleOpenViewImage = () => {},
}) {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <Grid container spacing={3} alignItems={"center"} maxWidth={"lg"}>
      <Grid item xs={12}>
        <LocalFade>
          <Typography variant="h3" fontFamily={typography.h3} mb={1}>
            {title}
          </Typography>
          <Typography variant="body2">{subHeader}</Typography>
        </LocalFade>
      </Grid>

      <Grid item xs={12} md={6} lg={5}>
        <LocalFade>
          <Card sx={{ backgroundColor: colors.bg.light }}>
            <CardMedia
              component={"img"}
              src="/img/CIIS/XXIV/flyer-main.png"
              sx={{ "&:hover": { cursor: "pointer" } }}
              onClick={() =>
                handleOpenViewImage("/img/CIIS/XXIV/flyer-main.png")
              }
            />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography fontFamily={typography.h6}>
                Evento principal
              </Typography>
              <Typography
                fontFamily={typography.h3}
                sx={{
                  mt: -1,
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
              {!fromDash && (
                <Typography fontFamily={typography.body2}>
                  Congreso Internacional de Informática y Sistemas
                </Typography>
              )}

              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Certificación"
                    secondary={"Se otorgará un certificado de 120 horas."}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Kit CIIS XXIV"
                    secondary={"Herramientas útiles en tu asistencia al evento"}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </LocalFade>
      </Grid>
      <Grid item xs={12} md={6} lg={7}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {costosCIIS.map((costo, idx) => (
            <LocalZoom timeout={400 * (idx + 1)} key={v4()}>
              <Card sx={{ backgroundColor: colors.bg.light, p: 1 }}>
                <CardActionArea
                  onClick={() => {
                    if (!user)
                      router.push(
                        `/registro?next=${"/dashboard/ciis?type=" + costo.id}`
                      );
                    else if (!fromDash)
                      router.push("/dashboard/ciis?type=" + costo.id);
                    else {
                      if (!user?.inscription?.ciis) setView(costo.id);
                      else {
                        Swal.fire(
                          "Ya estás inscrito",
                          "No hace falta entrar aquí otra vez",
                          "info"
                        );
                      }
                    }
                  }}
                >
                  <Grid
                    sx={{ px: 2, py: 2 }}
                    container
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Grid item>
                      <Box>
                        <Typography fontFamily={typography.h6}>
                          {costo.descuento
                            ? "Tarifa con descuento • CIIS XXIV"
                            : "Tarifa estándar • CIIS XXIV"}
                        </Typography>
                        <Typography fontFamily={typography.h3}>
                          {costo.name}
                        </Typography>
                        <Typography fontFamily={typography.body2}>
                          {costo.desc}
                        </Typography>
                        <Typography
                          fontFamily={typography.body2}
                          fontWeight={500}
                        >
                          Continuar aquí
                          <ArrowRight />
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box sx={{ minWidth: { xs: 150, sm: null } }}>
                        <Typography fontFamily={typography.h3}>
                          S/. {costo.value}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardActionArea>
              </Card>
            </LocalZoom>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
