import LocalFade from "@/components/Animation/LocalFade";
import { directory } from "@/context/url-context";
import { fetchGET } from "@/utils/data.fetch";
import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

const estados = [
  { label: "En espera", color: "info" },
  { label: "Inscrito", color: "success" },
  { label: "Observado", color: "error" },
  { label: "No inscrito", color: "primary" },
];

export default function InfoCardInscription({ user = {} }) {
  const states = ["grey", "lightgreen", "red"];
  const [ins, setIns] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSucess(ins) {
    setLoading(false);
    setIns(ins);
  }
  function handleFail() {
    setLoading(false);
  }
  function handleGetInscription() {
    fetchGET(
      directory.user.inscription + "?event=24",
      handleSucess,
      handleFail
    );
  }
  useEffect(handleGetInscription, []);
  return (
    <Card>
      <CardHeader
        title="Inscripciones"
        subheader="Inscríbete y verifica el estado de tu inscripción"
      />
      <CardContent>
        <Box display={"flex"} alignItems={"center"} mt={-3} columnGap={1}>
          <Typography variant="body2">Estado de inscripción CIIS:</Typography>
          {loading ? (
            <Skeleton width={50} />
          ) : (
            <Chip component={"span"} {...estados[ins ? ins.ciis : 3]} />
          )}
        </Box>
        <Typography variant="body2">
          Cierre de inscripciones: 13 de noviembre del 2023
        </Typography>

        <Typography variant="body2" sx={{ mt: 2, fontWeight: 500 }}>
          Otras inscripciones
        </Typography>
        {loading && (
          <>
            <Skeleton sx={{ mt: 2 }} />
            <Skeleton />
            <Skeleton />
          </>
        )}
        {Boolean(ins?.talleres.length) && (
          <LocalFade>
            <Box sx={{ my: 1 }}>
              {ins.talleres.map((tll) => (
                <Typography key={v4()}>
                  <CheckCircle sx={{ color: states[tll.state], mt: -0.5 }} />{" "}
                  {tll.name}
                </Typography>
              ))}
            </Box>
            <Grid container sx={{ mt: 3 }}>
              <Grid item md={4}>
                <Typography>
                  <CheckCircle
                    sx={{ color: states[0], mt: -0.5 }}
                    fontSize="small"
                  />{" "}
                  Por validar
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>
                  <CheckCircle
                    sx={{ color: states[1], mt: -0.5 }}
                    fontSize="small"
                  />{" "}
                  Confimado
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography>
                  <CheckCircle
                    sx={{ color: states[2], mt: -0.5 }}
                    fontSize="small"
                  />{" "}
                  Observado
                </Typography>
              </Grid>
            </Grid>
          </LocalFade>
        )}

        {!ins?.talleres.length && !loading && (
          <Typography variant="body2" sx={{ my: 0.5 }}>
            Sin inscripciones registradas
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}
