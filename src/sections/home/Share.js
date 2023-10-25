import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import colors from "@/styles/colors";
import { Close, Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Share = ({ edicion }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const buttonStyle = {
    textTransform: "uppercase",
    paddingY: 1,
    paddingX: 3,
    color: "white",
    fontWeight: "bold",
    width: "150px",
  };

  const ShareGrid = (
    <Grid
      container
      justifyContent={"space-between"}
      spacing={3}
      maxWidth={"1800px"}
    >
      <Grid
        item
        xs={12}
        lg={5}
        sx={{ textAlign: { xs: "center", lg: "left" } }}
      >
        <Typography variant="h4" fontWeight="bold" mb={0.5}>
          ¡Gracias por tu apoyo!
        </Typography>
        <Typography variant="body1" color="text">
          Ayuda a difundir este evento con más personas
        </Typography>
      </Grid>
      <Grid item xs={12} lg={5}>
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: { xs: "center", lg: "end" } }}
        >
          <Grid item>
            <Button
              href={`https://www.facebook.com/sharer/sharer.php?quote=¡Únete al congreso internacional de ingeniería en informática y sistemas en su ${edicion}va edición!&u=https://www.ciistacna.com`}
              sx={{
                ...buttonStyle,
                bgcolor: colors.socialMediaColors.facebook.main,
                "&:hover": { bgcolor: colors.socialMediaColors.facebook.dark },
                color: "#fff",
              }}
              startIcon={<Facebook />}
              variant="contained"
            >
              comparte
            </Button>
          </Grid>
          <Grid item>
            <Button
              href={`https://twitter.com/intent/tweet?text=¡Únete al congreso internacional de ingeniería en informática y sistemas en su ${edicion}va edición! Descubre más del evento en: https://www.ciistacna.com`}
              sx={{
                ...buttonStyle,
                bgcolor: colors.socialMediaColors.github.main,
                "&:hover": { bgcolor: colors.socialMediaColors.github.dark },
                color: "#fff",
              }}
              startIcon={<Close />}
              variant="contained"
            >
              tweetea
            </Button>
          </Grid>
          <Grid item>
            <Button
              href={`https://www.linkedin.com/sharing/share-offsite/?summary=¡Únete al congreso internacional de ingeniería en informática y sistemas en su ${edicion}va edición!&url=https://www.ciistacna.com`}
              sx={{
                ...buttonStyle,
                bgcolor: colors.socialMediaColors.linkedin.main,
                "&:hover": { bgcolor: colors.socialMediaColors.linkedin.dark },
                color: "#fff",
              }}
              startIcon={<LinkedIn />}
              variant="contained"
            >
              divulga
            </Button>
          </Grid>
        </Grid>
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
        py: "5em !important",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      ref={ref}
    >
      {inView ? (
        <motion.div
          initial={{ opacity: 0, y: 0, x: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {ShareGrid}
        </motion.div>
      ) : (
        <Box sx={{ opacity: 0 }}>{ShareGrid}</Box>
      )}
    </Box>
  );
};

export default Share;
