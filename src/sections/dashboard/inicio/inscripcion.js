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
  { label: "No inscrito", color: "primary" },
  { label: "Inscrito", color: "success" },
  { label: "En espera", color: "info" },
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
          <Chip {...estados[user.status]} />
        </Box>
        <Typography variant="body2">
          Cierre de inscripciones: 13 de noviembre del 2023
        </Typography>
      </CardContent>
    </Card>
  );
}
