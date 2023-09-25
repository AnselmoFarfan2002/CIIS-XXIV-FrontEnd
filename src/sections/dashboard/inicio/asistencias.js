import { Card, CardContent, CardHeader, Chip, Typography } from "@mui/material";

const certificacion = [
  { label: "No disponible", color: "primary" },
  { label: "Califica", color: "success" },
  { label: "No califica", color: "error" },
];

export default function InfoCardAsistencias({ user = {}, attTotal, attAct }) {
  return (
    <Card>
      <CardHeader
        title="Asistencias"
        subheader="Contadores de asistencias para certificación"
      />
      <CardContent>
        <Typography variant="body2" mt={-2}>
          Estado de final certificación: <Chip {...certificacion[0]} />
        </Typography>
        <Typography variant="body2">
          Asistencias necesarias: {attTotal}
        </Typography>
        <Typography variant="body2">
          Asistencias registradas: {attAct}
        </Typography>
        <Typography variant="body2" mt={1}>
          Estado de actual certificación: <Chip {...certificacion[2]} />
        </Typography>
        <Typography variant="body2">
          Asistencias hasta el momento: {6}
        </Typography>
        <Typography variant="body2">
          Asistencias registradas: {attAct}
        </Typography>
      </CardContent>
    </Card>
  );
}
