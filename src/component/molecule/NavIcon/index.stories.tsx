import NavIcon from ".";
import { RocketLaunchOutlined } from "@mui/icons-material";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const NavIconComponent = {
  title: "molecule/NavIcon",
  component: NavIcon,
} as ComponentMeta<typeof NavIcon>;

export const Template: ComponentStory<typeof NavIcon> = (args: any) => (
  <NavIcon {...args} />
);

Template.args = {
  leftIcon: <RocketLaunchOutlined />,
  label: "Entrepreneurship",
  rightIcon: <RocketLaunchOutlined />,
};

export default NavIconComponent;
