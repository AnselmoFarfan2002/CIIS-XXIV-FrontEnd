import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Typography,
} from "@mui/material";

const estados = [
  { label: "En espera", color: "info" },
  { label: "Inscrito", color: "success" },
  { label: "Observado", color: "error" },
  { label: "No inscrito", color: "primary" },
];

export default function InfoCardInscription({ user = {} }) {
  return (
    <Card>
      <CardHeader
        title="Inscripciones"
        subheader="Inscríbete y verifica el estado de tu inscripción"
      />
      <CardContent>
        <Box display={"flex"} alignItems={"center"} mt={-3} columnGap={1}>
          <Typography variant="body2">Estado de inscripción:</Typography>
          <Chip
            component={"span"}
            {...estados[
              user
                ? user.inscriptions.ciis
                  ? user.inscriptions.ciis.status
                  : 3
                : 3
            ]}
          />
        </Box>
        <Typography variant="body2">
          Cierre de inscripciones: 13 de noviembre del 2023
        </Typography>
      </CardContent>
    </Card>
  );
}
