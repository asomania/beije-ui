import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Slider, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
});

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 60,
    label: "60",
  },
];

export default function ContainerContent() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#f9f5f2",
          position: "relative",
          minHeight: 200,
        }}
        marginTop={8}
      >
        <AppBar
          position="static"
          sx={{
            boxShadow: "none",
            backgroundColor: "#f9f5f2",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab
              label="beije Ped"
              {...a11yProps(0)}
              sx={{ textTransform: "inherit" }}
            />
            <Tab
              label="beije Günlük Ped"
              {...a11yProps(1)}
              sx={{ textTransform: "inherit" }}
            />
            <Tab
              label="beije Tampon"
              {...a11yProps(2)}
              sx={{ textTransform: "inherit" }}
            />
          </Tabs>
        </AppBar>
        <Box marginTop={2}>
          <SwipeableViews
            index={value}
            onChangeIndex={handleChangeIndex}
            style={{ paddingTop: "16px", paddingBottom: "16px" }}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  marginTop: "1rem",

                  paddingBottom: "1rem",
                }}
              >
                Standart Ped
              </Typography>
              <Slider
                aria-label="Temperature"
                defaultValue={0}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={60}
              />

              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  marginTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                Süper Ped
              </Typography>
              <Slider
                aria-label="Custom marks"
                defaultValue={0}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={60}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  fontSize: "1rem",
                  marginTop: "1rem",
                  paddingBottom: "1rem",
                }}
              >
                Süper + Ped
              </Typography>
              <Slider
                aria-label="Custom marks"
                defaultValue={0}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={60}
              />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,

                  marginTop: "1rem",

                  paddingBottom: "1rem",
                }}
              >
                Günlük Ped
              </Typography>
              <Slider
                aria-label="Temperature"
                defaultValue={0}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={60}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  marginTop: "1rem",

                  paddingBottom: "1rem",
                }}
              >
                Süper Günlük Ped
              </Typography>
              <Slider
                aria-label="Custom marks"
                defaultValue={0}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={60}
              />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  marginTop: "1rem",

                  paddingBottom: "1rem",
                }}
              >
                Mini Tampon
              </Typography>
              <Slider
                aria-label="Temperature"
                defaultValue={0}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={60}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 400,
                  marginTop: "1rem",

                  paddingBottom: "1rem",
                }}
              >
                Süper Ped
              </Typography>
              <Slider
                aria-label="Custom marks"
                defaultValue={0}
                step={10}
                valueLabelDisplay="auto"
                marks={marks}
                min={0}
                max={60}
              />
            </TabPanel>
          </SwipeableViews>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
