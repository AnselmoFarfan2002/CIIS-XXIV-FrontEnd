import { Box, Zoom } from "@mui/material";
import { useInView } from "react-intersection-observer";

export default function LocalZoom({
  children,
  sx = {},
  timeout = { enter: 500 },
}) {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <Box ref={ref} {...sx}>
      <Zoom in={inView} timeout={timeout}>
        <Box>{children}</Box>
      </Zoom>
    </Box>
  );
}
