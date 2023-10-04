import { Box, Fade, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function FromSideFade({ children, side = "right" }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <Box ref={ref}>
      <Slide direction={side} in={inView} timeout={{ enter: 500 }}>
        <Box>
          <Fade in={inView} timeout={{ enter: 1800 }}>
            <Box
              sx={{
                opacity: 0,
              }}
            >
              {children}
            </Box>
          </Fade>
        </Box>
      </Slide>
    </Box>
  );
}
