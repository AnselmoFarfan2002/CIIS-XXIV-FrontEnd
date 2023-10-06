import FromSideFade from "@/components/Animation/FromSideFade";
import LogoCIISAnimated from "@/components/Animation/Logo";
import CIISLayout from "@/layouts/CIIS/CIISLayout";
import RegistroForm from "@/sections/registro/form";
import colors from "@/styles/colors";
import {
  Box,
  Container,
  Fade,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Head from "next/head";

function Page() {
  const theme = createTheme({ palette: { mode: "dark" } });
  return (
    <>
      <Head>
        <title>Registro | CIIS</title>
      </Head>
      <Box
        width={"100vw"}
        sx={{ background: colors.bg.gradientSolid(0), py: 15 }}
      >
        <ThemeProvider {...{ theme }}>
          <Container maxWidth={"lg"}>
            <Grid
              container
              alignItems={"center"}
              justifyContent={"center"}
              columnSpacing={10}
            >
              <Grid item xs={12} sm={10} md={6}>
                <RegistroForm />
              </Grid>
              <Grid item xs={8} sm={6} sx={{ paddingTop: { xs: 8, md: 0 } }}>
                <FromSideFade side="left">
                  <LogoCIISAnimated src={"/img/CIIS/XXIV/logo2.png"} />
                </FromSideFade>
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </Box>
    </>
  );
}

Page.getLayout = (page) => <CIISLayout>{page}</CIISLayout>;
export default Page;
