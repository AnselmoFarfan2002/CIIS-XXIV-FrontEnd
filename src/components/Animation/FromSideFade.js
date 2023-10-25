import { Box, Fade, Slide } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function FromSideFade({
  children,
  side = "right",
  timeout = { enter: 500 },
}) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <Box ref={ref} sx={{ height: "100%" }}>
      <Slide direction={side} in={inView} timeout={timeout}>
        <Box sx={{ height: "100%" }}>
          <Fade in={inView} timeout={{ enter: timeout.enter * 2 }}>
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
      </Slide>
    </Box>
  );
}

export function FromSideFadeNoObserver({
  children,
  side = "right",
  timeout = { enter: 500 },
  trigger = true,
}) {
  return (
    <Box>
      <Slide direction={side} in={trigger} timeout={timeout}>
        <Box>
          <Fade in={trigger} timeout={timeout}>
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
