import Head from "next/head";
import { Box, Card } from "@mui/material";
import PMCover from "@/sections/postmaster/cover";

import PostmasterCard from "@/sections/home/Postmaster";
import Particles from "@/components/Particles/Particles";
import Share from "@/sections/home/Share.js";
import { useState } from "react";
import CIISLayout from "@/layouts/CIIS/CIISLayout";
import UltimaEdicion from "@/sections/home/UltimaEdicion";
import Information from "@/sections/postmaster/information";
import Ponentes from "@/sections/postmaster/ponentes";
import Auspiciadores from "@/sections/postmaster/auspiciadores";

const Page = (props) => {
  const [edicion, setEdicion] = useState(24);
  const [ejes, setEjes] = useState([]);
  const [ponencias, setPonencias] = useState(18);
  const [tematicas, setTematicas] = useState(0);

  return (
    <>
      <Head>
        <title>Congreso internacional de informática y sistemas | CIIS</title>
        <meta
          name="description"
          content={`Sitio web oficial del evento con más historia en Perú relacionado a la informática y sistemas. En la ${edicion} edición el CIIS vuelve a juntar a pontenes de alto nivel en un congreso de 4 días de duración. ¡Bievenido!`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component="main">
        <PMCover />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -4,
            mb: 4,
            borderRadius: 4,
            padding: 4,
          }}
        >
          <Information />
          <Ponentes />
          <Auspiciadores />
        </Card>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <CIISLayout>{page}</CIISLayout>;

export default Page;
