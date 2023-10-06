import { Card, CardHeader, CardMedia } from "@mui/material";

export default function InfoCardPonencia({
  title = "A continuación",
  subheader = "Proxima ponencia en nuestro programa",
  image = "/img/CIIS/XXIV/flyer-main-long.png",
}) {
  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />
      <CardMedia component={"img"} image={image} alt="Paella dish" />
    </Card>
  );
}
