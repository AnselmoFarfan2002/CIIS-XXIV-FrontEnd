import { React, forwardRef, createRef, Component } from "react";
import {
  Grid,
  Card,
  Typography,
  Box,
  Dialog,
  DialogContent,
  DialogActions,
  Fade,
  useMediaQuery,
} from "@mui/material";
import "./loginInscripcion.css";
import PropTypes from "prop-types";
import MKAvatar from "components/MKAvatar";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKInput from "components/MKInput";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import NumberStepper from "components/NumberStepper/NumberStepper";

import IconStepper from "components/IconStepper/IconStepper";
import ImageUpload from "components/ImageUpload/ImageUpload";

import sucessImg from "assets/images/deafults/success.png";
import defaultVoucher from "assets/images/deafults/default-image-voucher.png";
import ReCAPTCHA from "react-google-recaptcha";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const apiURI = "https://testapi.ciistacna.com/api/v1/register?event=12";

import { PacmanLoader } from "react-spinners";
import MKTypography from "components/MKTypography";

const Transition = forwardRef(function Transition(props, ref) {
  return <Fade direction="up" ref={ref ? ref : null} {...props} />;
});

const Stepper = ({ steps, activeStep }) => {
  const isSmallScreen = useMediaQuery("(max-width:400px)");

  if (isSmallScreen) {
    return <NumberStepper steps={steps} activeStep={activeStep} />; // No renderizar el componente si no se cumple el media query
  }

  return <IconStepper steps={steps} activeStep={activeStep} />;
};

Stepper.propTypes = {
  steps: PropTypes.array,
  activeStep: PropTypes.number,
};

class CardPrice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formState: {
        open: false,
        activeStep: 0,
      },
    };

    this.waiting = {
      loading: true,
    };

    this.formRefs = {
      form: createRef(),
      waiting: createRef(),
      paso1: createRef(),
      paso2: createRef(),
      paso3: createRef(),
      paso4: createRef(),
    };

    this.setLoading = this.setLoading.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.toggleVisibilityStep1 = this.toggleVisibilityStep1.bind(this);
    this.toggleVisibilityStep2 = this.toggleVisibilityStep2.bind(this);
    this.toggleVisibilityStep3 = this.toggleVisibilityStep3.bind(this);
    this.toggleVisibilityStep4 = this.toggleVisibilityStep4.bind(this);
  }

  handleOpen() {
    this.setState(({ formState }) => ({
      formState: { ...formState, open: true },
    }));
  }

  handleClose() {
    this.setState(() => ({
      formState: { activeStep: 0, open: false },
    }));
  }

  handleNext() {
    const { activeStep } = this.state.formState;
    const { typeattendee } = this.props;

    if (typeattendee == 3) {
      if (activeStep == 0) {
        this.toggleVisibilityStep1();
        this.toggleVisibilityStep3();
      } else if (activeStep == 1) {
        this.toggleVisibilityStep3();
        this.toggleVisibilityStep4();
      } else if (activeStep == 2) {
        return this.handleRegister();
      }
    } else {
      if (activeStep == 0) {
        this.toggleVisibilityStep1();
        this.toggleVisibilityStep2();
      } else if (activeStep == 1) {
        this.toggleVisibilityStep2();
        this.toggleVisibilityStep3();
      } else if (activeStep == 2) {
        this.toggleVisibilityStep3();
        this.toggleVisibilityStep4();
      } else if (activeStep == 3) {
        return this.handleRegister();
      }
    }

    this.setState(({ formState }) => ({
      formState: { ...formState, activeStep: formState.activeStep + 1 },
    }));
  }

  handleBack() {
    const { activeStep } = this.state.formState;
    const { typeattendee } = this.props;

    if (typeattendee == 3) {
      if (activeStep == 0) {
        return null;
      } else if (activeStep == 1) {
        this.toggleVisibilityStep3();
        this.toggleVisibilityStep1();
      } else if (activeStep == 2) {
        this.toggleVisibilityStep4();
        this.toggleVisibilityStep3();
      }
    } else {
      if (activeStep == 0) {
        return null;
      } else if (activeStep == 1) {
        this.toggleVisibilityStep2();
        this.toggleVisibilityStep1();
      } else if (activeStep == 2) {
        this.toggleVisibilityStep3();
        this.toggleVisibilityStep2();
      } else if (activeStep == 3) {
        this.toggleVisibilityStep4();
        this.toggleVisibilityStep3();
      }
    }

    this.setState(({ formState }) => ({
      formState: { ...formState, activeStep: formState.activeStep - 1 },
    }));
  }

  setLoading(state, sucess) {
    this.formRefs.waiting.current.classList.toggle("d-none");
    if (sucess) {
      console.log("aea");
    } else this.formRefs.form.current.classList.toggle("d-none");
    this.waiting = state;
  }

  handleRegister() {
    const { form } = this.formRefs;
    let formData = new FormData(form.current);
    const { typeattendee } = this.props;

    formData.append("numvoucher", "");
    formData.append("typeattendee", String(typeattendee));

    if (typeattendee == 3) {
      formData.append("studycenter", "");
      formData.append("career", "");
      formData.append("fileuniversity", "");
    }

    this.setLoading(true);

    fetch(apiURI, {
      method: "POST",
      body: formData,
    }).then((res) => {
      this.setLoading(false);
      if (res.ok) return;

      res.json().then((aea) => console.log(aea));
    });
  }

  toggleVisibilityStep1() {
    const { formRefs } = this;
    formRefs.paso1.current.classList.toggle("d-none");
  }

  toggleVisibilityStep2() {
    const { formRefs } = this;
    formRefs.paso2.current.classList.toggle("d-none");
  }

  toggleVisibilityStep3() {
    const { formRefs } = this;
    formRefs.paso3.current.classList.toggle("d-none");
  }

  toggleVisibilityStep4() {
    const { formRefs } = this;
    formRefs.paso4.current.classList.toggle("d-none");
  }

  render() {
    const { precio, consumidor, imagenPrecio, desc, incluye, typeattendee, steps } = this.props;

    const { activeStep, open } = this.state.formState;
    const { loading } = this.waiting;
    const { formRefs } = this;

    let nextButton = (
      <MKButton onClick={this.handleNext} variant="text" color="info">
        Siguiente
      </MKButton>
    );
    let backButton = (
      <MKButton onClick={this.handleBack} variant="text" color="info">
        Atrás
      </MKButton>
    );

    if (activeStep === 0)
      backButton = (
        <MKButton variant="text" color="info" disabled>
          Atrás
        </MKButton>
      );
    else if (activeStep === steps.length - 1)
      nextButton = (
        <MKButton onClick={this.handleNext} variant="text" color="info">
          Inscribirse
        </MKButton>
      );

    return (
      <>
        <Card
          sx={{
            borderRadius: 8,
            paddingTop: 5,
            paddingBottom: 5,
          }}
          align="center"
          shadow="lg"
        >
          {/*-------------- ZONA DE CARTA DE PRESENTACION --------------*/}
          <Box mt={-12} mb={3}>
            <MKAvatar
              src={imagenPrecio}
              alt="Estudiante"
              size="xxl"
              shadow="lg"
              bgColor="light"
              sx={{ backgroundSize: "cover" }}
            />
          </Box>
          <Box>
            <MKBox>
              <Typography variant="h2" align="center" mb={0}>
                {precio}
              </Typography>
              <Typography variant="h4" align="center" mb={1}>
                {consumidor}
              </Typography>
              <Typography variant="body2" align="center">
                {desc}
              </Typography>
            </MKBox>
            <MKBox my={2} opacity={0.9}>
              <Typography variant="h5" textTransform="uppercase">
                Incluye
              </Typography>
            </MKBox>
            <MKBox maxWidth={200} mx={"auto"} mb={3}>
              <List>
                {incluye.map((element, idx) => {
                  return (
                    <ListItem key={new Date().getTime() / (idx + 1)}>
                      <ListItemIcon>
                        <CheckCircleIcon />
                      </ListItemIcon>
                      <ListItemText primary={element} />
                    </ListItem>
                  );
                })}
              </List>
            </MKBox>

            <MKButton color="success" variant="gradient" onClick={this.handleOpen}>
              <AppRegistrationIcon /> Inscribirse
            </MKButton>
          </Box>

          {/*-------------- ZONA DE FORMULARIO DE INSCRIPCION --------------*/}
          <Dialog
            open={open}
            onClose={this.handleClose}
            TransitionComponent={Transition}
            sx={{
              "& .MuiDialog-paper": {
                width: "1000px", // Establece un ancho fijo para el diálogo
              },
            }}
          >
            {/*-------------- ZONA DE CAMPOS INSCRIPCION --------------*/}
            <DialogContent align="center">
              <MKBox mx={"auto"} mt={5}>
                <MKAvatar src={imagenPrecio} alt="POSTMASTER XX" size="xxl" />
              </MKBox>
              <Typography variant="subtitle2" align="center" mb={-0.5}>
                Inscribiendote como
              </Typography>
              <Typography variant="h4" align="center" my={1}>
                {consumidor}
              </Typography>
              <Typography variant="subtitle2" align="center">
                {desc}
              </Typography>

              <MKBox mt={2} mb={4}>
                <MKBox my={3}>
                  <Stepper steps={steps} activeStep={activeStep} />
                </MKBox>

                <form ref={formRefs.form}>
                  <Grid
                    container
                    spacing={3}
                    width="100%"
                    textAlign={"center"}
                    justifyContent={"center"}
                    ref={formRefs.paso1}
                  >
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput type="text" variant="standard" label="Nombre" name="name" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label="Primer apellido"
                        name="firstLastname"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label="Segundo apellido"
                        name="secondLastname"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput type="text" variant="standard" label="DNI" name="dni" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput type="text" variant="standard" label="Celular" name="phone" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput type="email" variant="standard" label="Correo" name="email" />
                    </Grid>
                    {typeattendee != 3 && (
                      <Grid item xs={12} sm={6} md={5}>
                        <MKInput
                          type="text"
                          variant="standard"
                          label="Centro de estudios"
                          name="studycenter"
                        />
                      </Grid>
                    )}
                    {typeattendee != 3 && (
                      <Grid item xs={12} sm={6} md={5}>
                        <MKInput type="text" variant="standard" label="Carrera" name="career" />
                      </Grid>
                    )}
                  </Grid>

                  {typeattendee != 3 && (
                    <ImageUpload ref={formRefs.paso2} className="d-none" name="fileuniversity" />
                  )}

                  <ImageUpload
                    textButton="Seleccione imagen de pago"
                    defaultImg={defaultVoucher}
                    name="imgvoucher"
                    ref={formRefs.paso3}
                    className="d-none"
                  />

                  <MKBox
                    my={4}
                    ref={formRefs.paso4}
                    sx={{ minHeight: "222px", display: "grid", placeItems: "center" }}
                    className="d-none"
                  >
                    <ReCAPTCHA sitekey="6LewoVQgAAAAAOLgERaAT1onYf6kT51gQ70BDjOi" />
                  </MKBox>
                </form>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "200px",
                  }}
                  className="d-none"
                  ref={formRefs.waiting}
                >
                  <PacmanLoader color="#36d7b7" loading={loading} size={20} />
                </div>
              </MKBox>

              <MKBox>
                <Grid container flexDirection={"column"}>
                  <MKBox item component="img" src={sucessImg} width={200} mx={"auto"} my={3} />
                  <MKTypography item variant="h3" mb={2}>
                    Se ha inscrito con éxito
                  </MKTypography>
                  <MKTypography item variant="body" mb={2}>
                    Uno de los miembros de nuestro equipo verificará que todo lo que ha especificado
                    sea correcto y tras esto, se le notificará a través del correo electrónico las
                    novedades. ¡Estamos emocionados de contar con su participación!
                  </MKTypography>
                  <MKTypography item variant="title2" mb={2}>
                    CIIS XXIV - POSTMASTER XX
                  </MKTypography>
                </Grid>
              </MKBox>
            </DialogContent>

            {/*-------------- ZONA DE BOTONES DE CONTROL --------------*/}
            <DialogActions>
              <MKBox mb={1}>
                <MKButton onClick={this.handleClose} variant="text" color="secondary">
                  Cerrar
                </MKButton>
                {backButton}
                {nextButton}
              </MKBox>
            </DialogActions>
          </Dialog>
        </Card>
      </>
    );
  }
}

CardPrice.propTypes = {
  precio: PropTypes.string.isRequired,
  consumidor: PropTypes.string.isRequired,
  imagenPrecio: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  incluye: PropTypes.array.isRequired,
  typeattendee: PropTypes.number,
  steps: PropTypes.array,
};

export default CardPrice;
