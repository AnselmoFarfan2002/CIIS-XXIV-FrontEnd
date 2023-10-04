import { fonts } from "@/styles/fonts";
import { Box, Typography } from "@mui/material";

export default function BarLeftTitle({ title }) {
  return (
    <Box
      sx={{
        borderLeft: 10,
        paddingLeft: 1,
        marginBottom: 4,
      }}
    >
      <Typography variant="h4" fontWeight={"bold"} fontFamily={fonts.title}>
        {title}
      </Typography>
    </Box>
  );
}
