import { Box, Grow } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function LocalGrow({ children, sx = {} }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <Box ref={ref} {...sx}>
      <Grow in={inView} timeout={{ enter: 500 }}>
        <Box
          sx={{
            opacity: 0,
          }}
        >
          {children}
        </Box>
      </Grow>
    </Box>
  );
}
