import { ComponentStory, ComponentMeta } from "@storybook/react";
import Typography from ".";
const TypographyComponent = {
  title: "atom/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Template: ComponentStory<typeof Typography> = (args: any) => (
  <Typography {...args}>Blinklist</Typography>
);

export default TypographyComponent;
