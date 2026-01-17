import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Stack, Tab } from "@mui/material";
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
    label: "Prime Numbers - 2",
    component: <PrimeNumbers />,
  },
];

export const MathsBasics1Main = () => {
  const [mainTabValue, setMainTabValue] = useState<string>("1");

  const handleMainTabsChange = (
    event: React.SyntheticEvent,
    newValue: string,
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
          {tabsData.map((tab: any, tabIndex: number) => (
            <Tab key={tabIndex} value={tab.value} label={tab.label} />
          ))}
        </TabList>

        {tabsData.map((tab: any, tabIndex: number) => (
          <TabPanel key={tabIndex} value={tab.value}>
            {tab.component}
          </TabPanel>
        ))}
      </TabContext>
    </Stack>
  );
};
