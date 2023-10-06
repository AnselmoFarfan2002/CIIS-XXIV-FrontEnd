import colors from "@/styles/colors";
import typography from "@/styles/typography";
import { CheckCircle } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LocalFade from "@/components/Animation/LocalFade";

export default function ActividadTaller() {
  return (
    <Grid container spacing={3} alignItems={"center"}>
      <Grid item xs={12}>
        <Grid item xs={12} md={6} lg={5}>
          <LocalFade>
            <Card sx={{ backgroundColor: colors.bg.light }}>
              <CardMedia
                component={"img"}
                src="/img/CIIS/XXIV/flyer-main.png"
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Typography fontFamily={typography.h6}>
                  Evento principal
                </Typography>
                <Typography fontFamily={typography.h3}>CIIS XXIV</Typography>
                <Typography fontFamily={typography.body2}>
                  Congreso internacional de informática y sistemas
                </Typography>

                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary="Certificación"
                      secondary={"Se otorgará un certificado de x horas."}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircle />
                    </ListItemIcon>
                    <ListItemText
                      primary="Kit CIIS XXIV"
                      secondary={
                        "Herramientas útiles en tu asistencia al evento"
                      }
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </LocalFade>
        </Grid>
      </Grid>
    </Grid>
  );
}
