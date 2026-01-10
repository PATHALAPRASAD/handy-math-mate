import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Stack, Tab, Typography } from "@mui/material";
import React, { useState } from "react";
import { Tables } from "./Tables";
import { Powers } from "./Powers";
import { PrimeNumbers } from "./PrimeNumbers";

const tabsData: any[] = [
  {
    value: "1",
    label: "Maths Tables",
    component: <Tables />,
  },
  {
    value: "2",
    label: "Powers",
    component: <Powers />,
  },
  {
    value: "3",
    label: "Prime Numbers",
    component: <PrimeNumbers />,
  },
  {
    value: "4",
    label: "Maths Tables",
    component: <Tables />,
  },
];

export const MathsBasics1Main = () => {
  const [mainTabValue, setMainTabValue] = useState<string>("1");

  const handleMainTabsChange = (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    setMainTabValue(newValue);
  };

  return (
    <Stack>
      <TabContext value={mainTabValue}>
        <TabList
          onChange={handleMainTabsChange}
          centered
          variant="fullWidth"
          sx={{ bgcolor: "cyan" }}
          textColor="secondary"
          indicatorColor="secondary"
          scrollButtons="auto"
        >
          {/* <Tab label={"Maths Tables"} value={"1"} sx={{ color: "yellow" }} />
          <Tab label={"Powers"} value={"2"} sx={{ color: "yellow" }} />
          <Tab label={"Prime Numbers"} value={"3"} sx={{ color: "yellow" }} />
          <Tab label={"Maths Tables"} value={"4"} sx={{ color: "yellow" }} /> */}

          {tabsData.map((tab: any, tabIndex: number) => (
            <Tab
              key={tabIndex}
              value={tab.value}
              label={tab.label}
              // sx={{ color: "yellow" }}
            />
          ))}
        </TabList>

        {/* <TabPanel value={"1"}>
          <Tables />
        </TabPanel>
        <TabPanel value={"2"}>
          <Powers />
        </TabPanel>
        <TabPanel value={"3"}>
          <PrimeNumbers />
        </TabPanel>
        <TabPanel value={"4"}>
          <Tables />
        </TabPanel> */}

        {tabsData.map((tab: any, tabIndex: number) => (
          <TabPanel key={tabIndex} value={tab.value}>
            {tab.component}
          </TabPanel>
        ))}
      </TabContext>
    </Stack>
  );
};
