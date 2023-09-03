import CIISLayout from "@/layouts/CIIS/CIISLayout";
import Gallery from "@/sections/history/Gallery";
import colors from "@/styles/colors";
import { Box } from "@mui/material";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title>Historia | CIIS</title>
        <meta
          name="description"
          content={`Recopilacion de imágenes de la historia del Congreso internacional en informática y sistemas CIIS. En cada edición el CIIS vuelve a juntar a pontenes de alto nivel en un congreso de 4 días de duración. ¡Bievenido!`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Box component={"main"} minHeight={"100vh"} bgcolor={colors.bg.main}>
        <Box maxWidth={"1800px"} margin={"auto"} sx={{
            padding: {
                xs: 3,
                sm: 10
            }
        }}>
          <Gallery />
        </Box>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <CIISLayout>{page}</CIISLayout>;

export default Page;
