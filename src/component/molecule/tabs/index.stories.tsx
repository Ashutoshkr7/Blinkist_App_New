import Tabs from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import tabTheme from "../../../theme/TabTheme/tabTheme";
import { ThemeProvider } from "@mui/material/styles";
const TabsComponent = {
  title: "molecule/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Template: ComponentStory<typeof Tabs> = (args: any) => (
  <ThemeProvider theme={tabTheme}>
    <Tabs {...args} />
  </ThemeProvider>
);

const tabData = [
  {
    value: "currently_Reading",
    label: "Currently reading",
  },
  {
    value: "finished",
    label: "Finished",
  },
];

Template.args = {
  textColor: "primary",
  indicatorColor: "primary",
  tabData: tabData,
};

export default TabsComponent;
