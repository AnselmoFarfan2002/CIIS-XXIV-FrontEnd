import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import colors from "@/styles/colors";
import { useState } from "react";
import cronogramaData from "./data";
import { v4 } from "uuid";
import { useInView } from "react-intersection-observer";
import BarLeftTitle from "@/components/Sections/BarLeftTitle";
import LocalFade from "@/components/Animation/LocalFade";

export default function HomeCronograma() {
  const [value, setValue] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <Box
      id="topics"
      component={"section"}
      sx={{
        backgroundImage: colors.bg.gradient(0),
        zIndex: 1,
        position: "relative",
        padding: {
          lg: 10,
          xs: 5,
        },
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LocalFade sx={{ maxWidth: 1800, width: "100%" }}>
        <Grid container>
          <Grid item xs={12}>
            <BarLeftTitle title={"Cronograma"} />
          </Grid>

          <Grid item xs={12}>
            <Card sx={{ bgcolor: colors.bg.light }}>
              <CardContent>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    textColor="inherit"
                    indicatorColor="secondary"
                  >
                    {cronogramaData.map((plan, idx) => {
                      return (
                        <Tab
                          key={v4()}
                          label={`${
                            plan.day
                          } • ${plan.date.toLocaleDateString()}`}
                          {...a11yProps(idx)}
                        />
                      );
                    })}
                  </Tabs>
                </Box>

                {cronogramaData.map((plan, idx) => {
                  return (
                    <CustomTabPanel key={v4()} value={value} index={idx}>
                      <Typography variant="body2">
                        {plan.day} • {plan.date.toLocaleDateString()}
                      </Typography>
                      <Typography variant="h4">
                        Día {plan.date.getDay()}
                      </Typography>
                      {plan.activities.map((activity) => {
                        return (
                          <Box mt={1.5} key={v4()}>
                            <Typography variant="h6">
                              {activity.start} • {activity.end}
                            </Typography>
                            {activity.type == "Taller" && (
                              <Typography variant="h6">Taller</Typography>
                            )}
                            {["Ponencia", "Taller"].includes(activity.type) &&
                              activity.speaker && (
                                <Box
                                  display={"flex"}
                                  sx={{ gap: 1, alignItems: "center" }}
                                >
                                  <img
                                    src={`/img/flags/${activity.country.toLocaleLowerCase()}.png`}
                                    width={15}
                                    height={15}
                                  />
                                  <Typography variant="body2">
                                    {activity.speaker} • {activity.country}
                                  </Typography>
                                </Box>
                              )}

                            <Typography variant="body2">
                              {activity.name}
                            </Typography>
                          </Box>
                        );
                      })}
                    </CustomTabPanel>
                  );
                })}

                {value > 0 && (
                  <Button color="white" onClick={() => setValue(value - 1)}>
                    <b>Anterior</b>
                  </Button>
                )}
                {value < cronogramaData.length - 1 && (
                  <Button color="white" onClick={() => setValue(value + 1)}>
                    <b>Siguiente</b>
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </LocalFade>
    </Box>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}
