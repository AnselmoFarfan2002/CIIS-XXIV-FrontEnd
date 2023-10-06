import { Card, CardContent, CardHeader, Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const certificacion = [
  { label: "Califica", color: "success" },
  { label: "No califica", color: "error" },
  { label: "No disponible", color: "primary" },
];

export default function InfoCardAsistencias({
  user = {},
  attTotal,
  attAct,
  tasaAceptacion,
}) {
  const [stateTemp, setStateTemp] = useState(2);
  const [stateTota, setStateTota] = useState(2);

  useEffect(() => {
    setStateTemp(attTotal * tasaAceptacion <= user.attendances ? 0 : 1);
    setStateTota(attAct * tasaAceptacion <= user.attendances ? 0 : 1);
  }, []);

  return (
    <Card>
      <CardHeader
        title="Asistencias"
        subheader="Contadores de asistencias para certificación"
      />
      <CardContent>
        <Typography variant="body2" mt={-2}>
          Estado de final certificación:{" "}
          <Chip component={"span"} {...certificacion[stateTemp]} />
        </Typography>
        <Typography variant="body2">
          Asistencias necesarias: {attTotal}
        </Typography>
        <Typography variant="body2">
          Asistencias registradas: {user.attendances}
        </Typography>
        <Typography variant="body2" mt={1}>
          Estado de actual certificación:{" "}
          <Chip component={"span"} {...certificacion[stateTota]} />
        </Typography>
        <Typography variant="body2">
          Asistencias hasta el momento: {attAct}
        </Typography>
        <Typography variant="body2">
          Asistencias registradas: {user.attendances}
        </Typography>
      </CardContent>
    </Card>
  );
}
