import FilledInfoCard from "@/components/Card/FilledInfoCard";
import colors from "@/styles/colors";
import { ArrowForward, Facebook, LinkedIn, YouTube } from "@mui/icons-material";
import { Box, Grid, Typography, alpha } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PostmasterCard = (props) => {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });

  const FilledInfoCards = (
    <Grid container spacing={2} justifyContent={"center"}>
      <Grid item xs={12} sm={10} md={4}>
        <FilledInfoCard
          variant="gradient"
          bgColor="linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))"
          icon={<Facebook />}
          title="Estamos en facebook"
          description="Facebook oficial del CIIS donde podrás estar al día con las últimas actualizaciones de las actividades para el evento."
          action={{
            type: "external",
            route: "https://www.facebook.com/ciistacna",
            label: "¡Vamos a ver!",
          }}
          moreSX={{ height: "100%" }}
        />
      </Grid>
      <Grid item xs={12} sm={10} md={4}>
        <FilledInfoCard
          variant="gradient"
          bgColor="linear-gradient(195deg, rgb(116, 123, 138), rgb(73, 83, 97))"
          icon={<YouTube />}
          title="Estamos en youtube"
          description="Canal oficial de CIIS donde podrás encontrar transmisiones pasadas del evento y sus relacionados."
          action={{
            type: "external",
            route: "https://www.youtube.com/@ciistacna",
            label: "Revisar canal",
          }}
          moreSX={{ height: "100%" }}
        />
      </Grid>
      <Grid item xs={12} sm={10} md={4}>
        <FilledInfoCard
          variant="gradient"
          bgColor="linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))"
          icon={<LinkedIn />}
          title="Estamos en LinkedIn"
          description="Contamos con un perfil en LinkedIn para mantener comunicación con anteriores, futuros y posibles ponentes."
          action={{
            type: "external",
            route:
              "https://www.linkedin.com/in/congreso-internacional-de-inform%C3%A1tica-y-sistemas-a33bb5226/",
            label: "Dar un vistazo",
          }}
          moreSX={{ height: "100%" }}
        />
      </Grid>
    </Grid>
  );

  const PostmasterCard = (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12} sm={10} md={12}>
        <Box
          display="flex"
          alignItems="center"
          my={2}
          py={6}
          px={3}
          sx={{
            backgroundImage: `linear-gradient(0deg, ${alpha(
              colors.gradients.dark.state,
              0.8
            )}, ${alpha(
              colors.gradients.dark.state,
              0.8
            )}), url(/img/bg/pm-card-bg.webp)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 3,
            maxWidth: "1800px",
          }}
        >
          <Grid container item xs={12} md={6} sx={{ ml: { xs: 0, md: 6 } }}>
            <Typography
              style={{ width: "100%" }}
              variant="h4"
              color="white"
              fontWeight="bold"
            >
              Eventos relacionados
            </Typography>
            <Typography variant="h3" color="white" mb={1}>
              POSTMASTER XX
            </Typography>
            <Typography variant="body2" color="white" opacity={0.8} mb={2}>
              Únete a nuestro evento de reencuentro de egresados, donde podrás
              conocer las inspiradoras historias de cómo nuestros graduados
              alcanzaron su actual puesto de trabajo, y las dificultades que
              superaron en el camino. ¡No te lo pierdas!
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                transition: ".1s",
                "&:hover": { gap: 1 },
              }}
            >
              <Typography
                component="a"
                href="/postmaster"
                target="_blank"
                rel="noreferrer"
                variant="body2"
                color="white"
                fontWeight="regular"
                sx={{
                  display: "flex",
                  alignItems: "center",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translateX(3px)`,
                    transition:
                      "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                  },

                  "&:hover .material-icons-round, &:focus .material-icons-round":
                    {
                      transform: `translateX(6px)`,
                    },
                }}
              >
                Ver más del evento
              </Typography>
              <ArrowForward fontWeight="bold" />
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );

  return (
    <Box
      id="about"
      component={"section"}
      sx={{
        background: colors.bg.gradientSolid(180),
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
    >
      <Box ref={ref1}>
        {inView1 ? (
          <motion.div
            initial={{ opacity: 0, y: 0, x: -100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {PostmasterCard}
          </motion.div>
        ) : (
          <Box sx={{ opacity: 0 }}>{PostmasterCard}</Box>
        )}
      </Box>

      <Box sx={{ maxWidth: "1800px" }} ref={ref2}>
        {inView2 ? (
          <motion.div
            initial={{ opacity: 0, y: 0, x: 100 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {FilledInfoCards}
          </motion.div>
        ) : (
          <Box sx={{ opacity: 0 }}>{FilledInfoCards}</Box>
        )}
      </Box>
    </Box>
  );
};

export default PostmasterCard;
