import Head from "next/head";
import { Box } from "@mui/material";
import Cover from "@/sections/home/Cover.js";

import Header from "@/components/Header";
import Topics from "@/sections/home/Topics";
import PostmasterCard from "@/sections/home/Postmaster";
import Particles from "@/components/Particles/Particles";
import Share from "@/sections/home/Share.js";
import { useState } from "react";
import CIISLayout from "@/layouts/CIIS/CIISLayout";
import UltimaEdicion from "@/sections/home/UltimaEdicion";

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
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Box component="main">
        <Particles />
        <Cover />
        <Topics
          edicion={edicion}
          setEdicion={setEdicion}
          ejes={ejes}
          setEjes={setEjes}
          ponencias={ponencias}
          setPonencias={setPonencias}
          tematicas={tematicas}
          setTematicas={setTematicas}
        />
        <PostmasterCard />
        <Share edicion={edicion} setEdicion={setEdicion} />
        <UltimaEdicion />
      </Box>
    </>
  );
};

Page.getLayout = (page) => <CIISLayout>{page}</CIISLayout>;

export default Page;
