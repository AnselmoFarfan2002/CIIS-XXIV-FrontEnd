import colors from "@/styles/colors";
import typography from "@/styles/typography";
import { CheckCircle } from "@mui/icons-material";
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

export default function ActividadMain({
  title = "Actividades",
  subHeader = "Detalles de todas las actividades disponibles durante este evento",
  fromDash = false,
}) {
  const router = useRouter();
  const { user } = useAuth();

  return (
    <Grid container spacing={3} alignItems={"center"}>
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
            <CardMedia component={"img"} src="/img/CIIS/XXIV/flyer-main.png" />
            <CardContent sx={{ textAlign: "center" }}>
              <Typography fontFamily={typography.h6}>
                Evento principal
              </Typography>
              <Typography fontFamily={typography.h3}>CIIS XXIV</Typography>
              <Typography fontFamily={typography.body2}>
                Congreso Internacional de Informática y Sistemas
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle />
                  </ListItemIcon>
                  <ListItemText
                    primary="Certificación"
                    secondary={"Se otorgará un certificado de 120 horas."}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle />
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
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {costosCIIS.map((costo, idx) => (
            <LocalZoom timeout={400 * (idx + 1)} key={v4()}>
              <Card sx={{ backgroundColor: colors.bg.light, p: 1 }}>
                <CardActionArea
                  onClick={() => {
                    if (!user) router.push("/registro");
                    else if (!fromDash)
                      router.push("/dashboard/ciis?type=" + (idx + 1));
                  }}
                  sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
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
                  </Box>
                  <Box>
                    <Typography fontFamily={typography.h3}>
                      S/. {costo.value}
                    </Typography>
                  </Box>
                </CardActionArea>
              </Card>
            </LocalZoom>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
