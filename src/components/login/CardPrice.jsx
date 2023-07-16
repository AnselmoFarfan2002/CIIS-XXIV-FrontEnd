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

import defaultVoucher from "assets/images/deafults/default-image-voucher.png";

const steps = ["Datos personales", "Soy un estudiante", "Foto de recibo", "Soy un humano"];

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
      participant: {
        name: "",
        firstLastName: "",
        secondLastName: "",
        dni: "",
        phone: "",
        email: "",
        studycenter: "",
        career: "",
        imgvoucher: "",
        fileuniversity: "",
      },
      formState: {
        open: false,
        activeStep: 0,
      },
    };

    this.formRefs = {
      name: createRef(),
      firstLastName: createRef(),
      secondLastName: createRef(),
      dni: createRef(),
      phone: createRef(),
      email: createRef(),
      studycenter: createRef(),
      career: createRef(),
      imgvoucher: createRef(),
      fileuniversity: createRef(),
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.saveDataParticipant = this.saveDataParticipant.bind(this);
    this.saveInsitutionDocument = this.saveInsitutionDocument.bind(this);
    this.saveVoucher = this.saveVoucher.bind(this);
  }

  handleOpen() {
    this.setState(({ participant, formState }) => ({
      participant,
      formState: { ...formState, open: true },
    }));
  }

  handleClose() {
    this.setState(({ participant, formState }) => ({
      participant,
      formState: { ...formState, open: false },
    }));
  }

  handleNext() {
    this.setState(({ participant, formState }) => ({
      participant,
      formState: { ...formState, activeStep: formState.activeStep + 1 },
    }));
  }

  handleBack() {
    this.setState(({ participant, formState }) => ({
      participant,
      formState: { ...formState, activeStep: formState.activeStep - 1 },
    }));
  }

  handleRegister() {
    let formData = new FormData();
    const { participant } = this.state;

    Object.keys(participant).forEach((key) => {
      formData.append(key, participant[key]);
    });

    console.log(Object.keys(participant));
    for (const entry of formData.entries()) {
      console.log(entry);
    }
  }

  saveDataParticipant() {
    const { formRefs } = this;
    this.setState(({ participant, formState }) => ({
      ...formState,
      participant: {
        ...participant,
        name: formRefs.name.current.querySelector("input").value,
        firstLastName: formRefs.firstLastName.current.querySelector("input").value,
        secondLastName: formRefs.secondLastName.current.querySelector("input").value,
        dni: formRefs.dni.current.querySelector("input").value,
        phone: formRefs.phone.current.querySelector("input").value,
        email: formRefs.email.current.querySelector("input").value,
        studycenter: formRefs.studycenter.current.querySelector("input").value,
        career: formRefs.career.current.querySelector("input").value,
      },
    }));
  }

  saveInsitutionDocument() {
    const { formRefs } = this;
    this.setState(({ participant, formState }) => ({
      ...formState,
      participant: {
        ...participant,
        fileuniversity: formRefs.fileuniversity.current.files[0],
      },
    }));
  }

  saveVoucher() {
    const { formRefs } = this;
    this.setState(({ participant, formState }) => ({
      ...formState,
      participant: {
        ...participant,
        imgvoucher: formRefs.imgvoucher.current.files[0],
      },
    }));
  }

  saveCaptcha() {}

  handleInputChange(fieldName, value) {
    this.setState(({ participant }) => ({
      participant: {
        ...participant,
        [fieldName]: value,
      },
    }));
  }

  render() {
    const { precio, consumidor, imagenPrecio, desc, incluye } = this.props;

    const { activeStep, open } = this.state.formState;
    const { participant } = this.state;

    const { formRefs } = this;

    const nextActionOnStep = [
      () => {
        this.saveDataParticipant();
        this.handleNext();
      },
      () => {
        this.saveInsitutionDocument();
        this.handleNext();
      },
      () => {
        this.saveVoucher();
        this.handleNext();
      },
      () => {
        this.saveCaptcha();
        this.handleRegister();
      },
    ];
    const backActionOnStep = [
      () => {},
      () => {
        this.saveInsitutionDocument();
        this.handleBack();
      },
      () => {
        this.saveVoucher();
        this.handleBack();
      },
      () => {
        this.saveCaptcha();
        this.handleBack();
      },
    ];

    let nextButton = (
      <MKButton onClick={nextActionOnStep[activeStep]} variant="text" color="info">
        Siguiente
      </MKButton>
    );
    let backButton = (
      <MKButton onClick={backActionOnStep[activeStep]} variant="text" color="info">
        Atrás
      </MKButton>
    );

    if (activeStep === 0)
      backButton = (
        <MKButton variant="text" color="info" disabled>
          Atrás
        </MKButton>
      );
    else if (activeStep === steps.length)
      nextButton = (
        <MKButton onClick={nextActionOnStep[activeStep]} variant="text" color="info">
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
          <Dialog open={open} onClose={this.handleClose} TransitionComponent={Transition}>
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

              <MKBox my={3}>
                <Stepper steps={steps} activeStep={activeStep} />
              </MKBox>

              {activeStep === 0 && (
                <MKBox mt={2} mb={4}>
                  <Grid
                    container
                    spacing={3}
                    width="100%"
                    textAlign={"center"}
                    justifyContent={"center"}
                  >
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label="Nombre"
                        name="name"
                        value={participant.name}
                        onChange={(e) => this.handleInputChange("name", e.target.value)}
                        ref={formRefs.name}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label="Primer apellido"
                        name="firstLastName"
                        ref={formRefs.firstLastName}
                        value={participant.firstLastName}
                        onChange={(e) => this.handleInputChange("firstLastName", e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label="Segundo apellido"
                        name="secondLastName"
                        ref={formRefs.secondLastName}
                        value={participant.secondLastName}
                        onChange={(e) => this.handleInputChange("secondLastName", e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label="DNI"
                        name="dni"
                        ref={formRefs.dni}
                        value={participant.dni}
                        onChange={(e) => this.handleInputChange("dni", e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label="Celular"
                        name="phone"
                        ref={formRefs.phone}
                        value={participant.phone}
                        onChange={(e) => this.handleInputChange("phone", e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="email"
                        variant="standard"
                        label="Correo"
                        name="email"
                        ref={formRefs.email}
                        value={participant.email}
                        onChange={(e) => this.handleInputChange("email", e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label="Centro de estudios"
                        name="studycenter"
                        ref={formRefs.studycenter}
                        value={participant.studycenter}
                        onChange={(e) => this.handleInputChange("studycenter", e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={5}>
                      <MKInput
                        type="text"
                        variant="standard"
                        label="Carrera"
                        name="career"
                        ref={formRefs.career}
                        value={participant.career}
                        onChange={(e) => this.handleInputChange("career", e.target.value)}
                      />
                    </Grid>
                  </Grid>
                </MKBox>
              )}
              {activeStep === 1 && (
                <MKBox mt={2} mb={4}>
                  <ImageUpload
                    ref={formRefs.fileuniversity}
                    files={participant.fileuniversity ? [participant.fileuniversity] : []}
                  />
                </MKBox>
              )}
              {activeStep === 2 && (
                <MKBox mt={2} mb={4}>
                  <ImageUpload
                    textButton="Seleccione imagen de pago"
                    defaultImg={defaultVoucher}
                    files={participant.imgvoucher ? [participant.imgvoucher] : []}
                    ref={formRefs.imgvoucher}
                  />
                </MKBox>
              )}
              {activeStep === 4 && (
                <MKBox mt={2} mb={4}>
                  <ImageUpload
                    textButton="Seleccione imagen de pago"
                    defaultImg={defaultVoucher}
                    files={participant.imgvoucher ? [participant.imgvoucher] : []}
                    ref={formRefs.imgvoucher}
                  />
                </MKBox>
              )}
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
};

export default CardPrice;
