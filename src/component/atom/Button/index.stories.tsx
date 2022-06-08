import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import baseTheme from "../../../theme/ButtonTheme/buttonTheme";
import Button from ".";

const ButtonComponent = {
  title: "atom/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => (
  <ThemeProvider theme={baseTheme}>
    <Button
      {...args}
      sx={{
        textTransform: "capitalize",
        borderColor: "#042330",
      }}
    />
  </ThemeProvider>
);
Template.args = {
  label: "Button",
  size: "medium",
};

export const Outline = Template.bind({});

Outline.args = {
  ...Template.args,
  variant: "outlined",
  label: "Read now",
  color: "primary",
};

export const Contained = Template.bind({});

Contained.args = {
  ...Template.args,
  variant: "contained",
  color: "success",
  label: "Finished Reading",
};

export default ButtonComponent;
