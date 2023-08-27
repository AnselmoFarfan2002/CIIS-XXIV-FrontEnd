import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import colors from "@/styles/colors";
import { ArrowLeftSharp, ArrowRightSharp } from "@mui/icons-material";

const UltimaEdicion = ({ action = true }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const content = (
    <Grid container justifyContent={"center"} spacing={3} maxWidth={"1800px"}>
      <Grid item textAlign={"center"} sm={11} md={7} lg={6} xl={4.5}>
        <Chip label="NUESTRA HISTORIA" color="secondary" />
        <Typography variant="h1">Ediciones anteriores</Typography>
        <Typography variant="body">
          Presentamos una recopilación de las ediciones anteriores del
          prestigioso Congreso Internacional de Informática y Sistemas
        </Typography>
        <br />
        {action && (
          <Button
            href="/historia"
            variant="contained"
            color="secondary"
            endIcon={<ArrowLeftSharp />}
            startIcon={<ArrowRightSharp />}
            sx={{ fontWeight: "bold", my: 2 }}
          >
            VER HISTORIA
          </Button>
        )}
      </Grid>
    </Grid>
  );

  return (
    <Box
      id="share"
      component={"section"}
      sx={{
        background: colors.bg.main,
        zIndex: 1,
        position: "relative",
        padding: {
          lg: 10,
          xs: 5,
        },
        paddingTop: "0 !important",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      ref={ref}
    >
      {inView ? (
        <motion.div
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {content}
        </motion.div>
      ) : (
        <Box sx={{ opacity: 0 }}>{content}</Box>
      )}
    </Box>
  );
};

export default UltimaEdicion;
