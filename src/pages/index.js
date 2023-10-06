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
import HomeCounters from "@/sections/home/Counters";
import HomeCronograma from "@/sections/home/Cronograma";
import HomeAuspiciadores from "@/sections/home/Auspiciadores";

const Page = (props) => {
  const [edicion, setEdicion] = useState(24);
  const [ejes, setEjes] = useState([]);
  const [ponencias, setPonencias] = useState(18);
  const [concursos, setConcursos] = useState(3);
  const [talleres, setTalleres] = useState(4);
  const [tematicas, setTematicas] = useState(0);

  return (
    <>
      <Head>
        <title>Congreso internacional de informática y sistemas | CIIS</title>
        <meta
          name="description"
          content={`Sitio web oficial del evento con más historia en Perú relacionado a la informática y sistemas. En la ${edicion} edición el CIIS vuelve a juntar a pontenes de alto nivel en un congreso de 4 días de duración. ¡Bievenido!`}
        />
      </Head>

      <Box component="main">
        <Particles />
        <Cover />
        <HomeCounters
          {...{ ponencias, talleres, tematicas, edicion, concursos }}
        />
        <Topics {...{ ejes, setEjes, setTematicas }} />
        <HomeCronograma />
        <HomeAuspiciadores />
        <PostmasterCard />
        <Share edicion={edicion} setEdicion={setEdicion} />
        <UltimaEdicion />
      </Box>
    </>
  );
};

Page.getLayout = (page) => <CIISLayout>{page}</CIISLayout>;

export default Page;
