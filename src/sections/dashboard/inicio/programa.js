import { PunchClock } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { v4 } from "uuid";

export default function SummaryProgram({ ponencias = [] }) {
  return (
    <Card>
      <CardHeader title="Programa" subheader="Ponencias del día" />
      <CardContent sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
        {ponencias.map((ponencia) => (
          <ItemPrograma
            {...{
              key: v4(),
              hora: ponencia.hora,
              nombre: ponencia.nombre,
              icon: ponencia.icon,
            }}
          />
        ))}
      </CardContent>
      <CardActions>
        <Button variant="contained" href="programa" fullWidth>
          Ver programa completo
        </Button>
      </CardActions>
    </Card>
  );
}

function ItemPrograma({
  hora,
  nombre,
  icon = <PunchClock sx={{ mt: -0.3 }} />,
}) {
  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      {icon}
      <Typography variant="body2" sx={{ color: "rgba(255,255,255,.8)" }}>
        {hora} - {nombre}
      </Typography>
    </Box>
  );
}
