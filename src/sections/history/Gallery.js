import { directory } from "@/context/url-context";
import { Box, Card, CardContent, Chip, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { v4 } from "uuid";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";

import colors from "@/styles/colors";
import { imagenesGaleria } from "./data.gallery";

const Gallery = (props) => {
  const [data, setData] = useState([]);
  const [currentImages, setCurrentImages] = useState({ index: 0, slides: [] });
  const [openGallery, setOpenGallery] = useState(false);

  useEffect(() => {
    setData(imagenesGaleria);
  }, []);
  // useEffect(() => {
  //   if (!data.length) {
  //     fetch(directory.events.gallery.get(1))
  //       .then((res) => {
  //         if (res.ok) return res.json();
  //         throw new Error();
  //       })
  //       .then((data) => setData(data.reverse()));
  //   }
  // }, [data]);

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const Titulo = (
    <Grid
      container
      justifyContent={"center"}
      spacing={3}
      sx={{ paddingTop: { lg: 5 } }}
    >
      <Grid item textAlign={"center"} xs={11} sm={10} lg={8}>
        <Chip label="NUESTRA HISTORIA" color="secondary" />
        <Typography variant="h1">Ediciones anteriores</Typography>
        <Typography variant="body">
          Presentamos una recopilación de las ediciones anteriores del
          prestigioso Congreso Internacional de Informática y Sistemas
        </Typography>
      </Grid>
    </Grid>
  );

  const renderData = data.map(({ title, description, anio, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={v4()}>
      <Grid item xs={12} lg={3}>
        <Box position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <Typography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </Typography>
          <Typography variant="body2" fontWeight="regular" mb={1} pr={2}>
            {description}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name }, idx) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={v4()}>
              <Card
                sx={{
                  height: { md: "300px" },
                  borderRadius: 3,
                  backgroundColor: colors.bg.light,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ mb: 2 }}>
                    {name}
                  </Typography>
                  <Box
                    onClick={() => {
                      setOpenGallery(true);
                      setCurrentImages({
                        index: idx,
                        slides: items.map((i) => ({ src: i.image })),
                      });
                    }}
                    sx={{ "&:hover": { cursor: "pointer" } }}
                  >
                    <img
                      src={image}
                      alt={name}
                      style={{ width: "100%", maxHeight: "100%" }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <Box>
      <Grid container justifyContent={"center"} spacing={10}>
        <Grid item ref={ref}>
          {inView ? (
            <motion.div
              initial={{ opacity: 0, y: 0, x: 0 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {Titulo}
            </motion.div>
          ) : (
            Titulo
          )}
        </Grid>
        <Grid item>{renderData}</Grid>
      </Grid>

      <Lightbox
        index={currentImages.index}
        styles={{ container: { backgroundColor: colors.bg.main } }}
        open={openGallery}
        close={() => setOpenGallery(false)}
        slides={currentImages.slides}
        plugins={[Zoom, Thumbnails, Counter]}
        animation={0.02}
        counter={{ container: { style: { bottom: 0 } } }}
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
        carousel={{ preload: 1 }}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
          border: 0,
          borderRadius: 4,
          padding: 4,
          gap: 16,
          showToggle: 0,
        }}
      />
    </Box>
  );
};

export default Gallery;
