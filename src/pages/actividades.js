import { directory } from "@/context/url-context";
import CIISLayout from "@/layouts/CIIS/CIISLayout";
import ActividadMain from "@/sections/actividades/actividad";
import ActividadConcurso from "@/sections/actividades/concurso";
import ActividadLocation from "@/sections/actividades/location";
import ActividadPayment from "@/sections/actividades/payment";
import ActividadTaller from "@/sections/actividades/taller";
import colors from "@/styles/colors";
import { fetchGET } from "@/utils/data.fetch";
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

function Page() {
  const [slides, setSlides] = useState([]);
  const [open, setOpen] = useState(false);
  const [talleres, setTalleres] = useState([]);

  const theme = createTheme({ palette: { mode: "dark" } });

  useEffect(() => fetchGET(directory.taller.src, setTalleres), []);

  function handleOpenViewImage(src, alt) {
    const scrollY = window.scrollY;

    // Aplicar el bloqueo de desplazamiento
    document.body.style.position = "fixed";
    document.body.style.overflow = "hidden";
    document.body.style.top = `-${scrollY}px`;

    setSlides([{ src, alt }]);
    setOpen(true);
  }

  function handleCloseViewImage() {
    document.body.style.position = "";
    document.body.style.overflow = "";
    const topValue = document.body.style.top;
    document.body.style.top = "";
    window.scrollTo(0, parseInt(topValue || "0") * -1);
    setOpen(false);
  }
  return (
    <>
      <Head>
        <title>Inscripciones | CIIS</title>
        <meta
          name="description"
          content={`Inscripciones a las actividades CIIS. Desde el evento principal (nuestro congreso), concursos y talleres que se darán durante el Congreso Internacional de Informática y Sistemas (CIIS) ${new Date().getFullYear()}`}
        />
      </Head>
      <Box
        width={"100vw"}
        sx={{ background: colors.bg.gradientSolid(0), py: 15 }}
      >
        <ThemeProvider {...{ theme }}>
          <Container maxWidth={"lg"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              columnSpacing={10}
              rowSpacing={5}
            >
              <Grid item xs={12}>
                <ActividadMain {...{ handleOpenViewImage }} />
              </Grid>
              <Grid item xs={12} component={"section"} id={"concursos"}>
                <ActividadConcurso {...{ handleOpenViewImage }} />
              </Grid>
              <Grid item xs={12}>
                <ActividadTaller {...{ talleres }} />
              </Grid>
              <Grid item xs={12}>
                <ActividadPayment />
              </Grid>
              <Grid item xs={12}>
                <ActividadLocation />
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </Box>

      <Lightbox
        {...{ open, slides, close: handleCloseViewImage }}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, .6)" } }}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 5, // Aumenta o disminuye según quieras permitir más o menos zoom
          zoomInMultiplier: 1.2, // Aumenta o disminuye para ajustar la velocidad del zoom con la rueda del mouse o gestos de pinza
          doubleTapDelay: 300, // Aumenta este valor para requerir un doble toque más largo para activar el zoom
          doubleClickDelay: 300, // Aumenta este valor para requerir un doble clic más largo para activar el zoom
          doubleClickMaxStops: 2, // Puedes dejarlo en 2 para un doble clic con un aumento máximo de 2 veces el tamaño original
          keyboardMoveDistance: 100, // Aumenta o disminuye según quieras cambiar la velocidad de desplazamiento con las teclas de flecha
          wheelZoomDistanceFactor: 1000, // Disminuye este valor para tener un zoom más lento con la rueda del mouse
          pinchZoomDistanceFactor: 1000, // Disminuye este valor para tener un zoom más lento con gestos de pinza en dispositivos táctiles
          scrollToZoom: 1, // Activa el zoom al desplazarse con la rueda del mouse
        }}
        render={{
          iconPrev: () => {},
          iconNext: () => {},
        }}
      />
    </>
  );
}

Page.getLayout = (page) => <CIISLayout>{page}</CIISLayout>;
export default Page;
