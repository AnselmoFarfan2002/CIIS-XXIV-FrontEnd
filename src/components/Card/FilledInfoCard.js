import { ArrowForward } from "@mui/icons-material";
import { Box, Grid, Icon, Typography } from "@mui/material";
import Link from "@mui/material";
import { useRouter } from "next/router";

function FilledInfoCard({
  variant = "contained",
  bgColor = "info",
  icon,
  title,
  description,
  action = false,
  moreSX,
}) {
  const buttonStyles = {
    width: "max-content",
    display: "flex",
    alignItems: "center",

    "& .material-icons-round": {
      fontSize: "1.125rem",
      transform: `translateX(3px)`,
      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(6px)`,
    },
  };

  let iconColor = bgColor;

  if (variant === "gradient" && bgColor !== "light") {
    iconColor = "white";
  } else if (variant === "gradient" && bgColor === "light") {
    iconColor = "dark";
  }

  const router = useRouter();

  return (
    <Box
      display={{ xs: "block", md: "flex" }}
      variant={variant}
      sx={{ background: bgColor, ...moreSX }}
      borderRadius={3}
      pt={3.5}
      pb={3}
      px={3}
    >
      <Box pl={{ xs: 0, md: 2 }} lineHeight={1}>
        <Grid container spacing={0.5}>
          <Grid item>{icon}</Grid>
          <Grid item>
            <Typography
              display="block"
              variant="h6"
              color={
                variant === "contained" || bgColor === "light"
                  ? "dark"
                  : "white"
              }
              fontWeight="bold"
              mb={1}
            >
              {title}
            </Typography>
          </Grid>
        </Grid>
        <Typography
          display="block"
          variant="body2"
          color={
            variant === "contained" || bgColor === "light" ? "text" : "white"
          }
          mb={2}
        >
          {description}
        </Typography>
        {action && action.type === "external" ? (
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
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              fontWeight="regular"
              color={variant === "contained" ? bgColor : "white"}
              sx={buttonStyles}
            >
              {action.label}
            </Typography>
            <ArrowForward fontWeight="bold" />
          </Box>
        ) : null}
        {action && action.type === "internal" ? (
          <Box
            sx={{
              display: "flex",
              gap: 0.5,
              transition: ".1s",
              "&:hover": { gap: 1, cursor: "pointer" },
            }}
            onClick={() => {
              router.push(action.route);
            }}
          >
            <Typography
              variant="body2"
              fontWeight="regular"
              color={variant === "contained" ? bgColor : "white"}
              sx={buttonStyles}
            >
              {action.label}
            </Typography>
            <ArrowForward fontWeight="bold" />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

export default FilledInfoCard;
