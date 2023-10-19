import { Box, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function LocalFade({ children, sx = {} }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <Box ref={ref} sx={sx}>
      <Fade in={inView} timeout={{ enter: 500 }}>
        <Box
          sx={{
            height: "100%",
            opacity: 0,
          }}
        >
          {children}
        </Box>
      </Fade>
    </Box>
  );
}
