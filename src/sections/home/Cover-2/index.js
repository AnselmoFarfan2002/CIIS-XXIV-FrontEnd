import LocalFade from "@/components/Animation/LocalFade";
import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function CoverXXV({ viewXXV }) {
  const dir_bg = "/img/bg/bg-ciis-1.png";
  const dir_logo = "/img/CIIS/XXV/logo.png";
  const dir_flag = "/img/flags/peru.png";
  const dir_esis = "/img/auspiciadores/esis.png";
  const [hiddenSplash, setHiddenSplash] = useState(false);
  const [hiddenApp, setHiddenApp] = useState(true);

  return (
    <LocalFade
      sx={{
        zIndex: 2,
        width: "100%",
        ...(!viewXXV ? { display: "none" } : {}),
      }}
    >
      <Box
        sx={{
          backgroundImage: `url("${dir_bg}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          sx={{
            minHeight: "100vh",
            px: {
              xs: 3,
              md: 10,
            },
            py: { xs: 10, md: 13 },
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 10,
          }}
          spacing={0}
        >
          <Grid item xs={12} textAlign={"center"}>
            <img src={dir_logo} style={{ maxWidth: 300, width: "80%" }}></img>
            <Typography variant="h3" sx={{ mt: 1 }}>
              Próximamente
            </Typography>
            <Typography variant="h6">Bodas de plata</Typography>
            <img src={dir_flag} style={{ maxWidth: 20, width: "80%" }}></img>
          </Grid>

          <Grid item xs={12} textAlign={"center"}>
            <Button
              variant="contained"
              sx={{ fontWeight: 600, py: 1, px: 5 }}
              onClick={() => {
                window.location.href = "/#cover";
              }}
            >
              Edición anterior
            </Button>
          </Grid>
        </Grid>
      </Box>
    </LocalFade>
  );
}
