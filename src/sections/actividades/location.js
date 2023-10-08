import LocalFade from "@/components/Animation/LocalFade";
import typography from "@/styles/typography";
import { Box, Typography } from "@mui/material";

export default function ActividadLocation() {
  return (
    <Box component={"section"} id="location" pt={5}>
      <LocalFade sx={{ mt: 5 }}>
        <Typography variant="h3" fontFamily={typography.h3} mb={1}>
          Lugar del evento
        </Typography>
        <Typography variant="body2">
          La ubicación exacta de las intalaciones donde se llevará acabo el
          evento
        </Typography>
      </LocalFade>
      <LocalFade>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1790.5434816338136!2d-70.24917510723253!3d-18.023830815712664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915acf13c14965bf%3A0xeb3646a72b21d66e!2sAuditorio%20Juan%20Figueroa%20Salgado!5e0!3m2!1ses!2spe!4v1696655588457!5m2!1ses!2spe"
          frameBorder="0"
          style={{ width: "100%", aspectRatio: "2/1", marginTop: 20 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </LocalFade>
    </Box>
  );
}
