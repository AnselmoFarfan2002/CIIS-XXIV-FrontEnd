import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";

function CounterCard({ color, count, title, description, duration, ...rest }) {
  return (
    <Box p={2} textAlign="center" lineHeight={1}>
      <Typography variant="h1" color={color}>
        <CountUp end={count} duration={duration ? duration : 1} {...rest} />
      </Typography>
      {title && (
        <Typography variant="h5" mt={2} mb={1}>
          {title}
        </Typography>
      )}
      {description && (
        <Typography variant="body2" color="text">
          {description}
        </Typography>
      )}
    </Box>
  );
}

export default CounterCard;
