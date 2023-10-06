import { Box } from "@mui/material";

const LogoCIISAnimated = ({ src }) => {
  const animationDuration = 2; // Duración de la animación base en segundos

  return (
    <Box p={"20%"} className={"element-with-shine"}>
      <Box
        sx={{
          display: "flex",
          transform: "rotate(45deg)",
          aspectRatio: "1/1",
        }}
      >
        {[1, 2, 3, 4, 5].map((index) => (
          <Box
            key={index}
            className={`barCIISlogo barCIISlogo${index}`}
            sx={{
              animation: `${
                index % 2 == 0 ? "moveUp1" : "moveUp2"
              } ${animationDuration}s ease-in-out infinite alternate`,
              transition: `animation-duration ${animationDuration}s`, // Ajusta la velocidad según el ancho del contenedor
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          mt: "-90%",
          animation: `moveUpLogo ${3}s ease-in-out infinite alternate`,
          zIndex: 1,
        }}
      >
        <img src={src} alt="Logo" width={"130%"} />
      </Box>
    </Box>
  );
};

export default LogoCIISAnimated;
