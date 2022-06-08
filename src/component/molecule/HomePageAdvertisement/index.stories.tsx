import HomePageAdvertisement from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
const HomePageAdvertisementComponent = {
  title: "molecule/HomePageAdvertisement",
  component: HomePageAdvertisement,
} as ComponentMeta<typeof HomePageAdvertisement>;

export const Template: ComponentStory<typeof HomePageAdvertisement> = (
  args: any
) => <HomePageAdvertisement {...args} />;

Template.args = {
  heading: "Explore Books on entrepreneurship",
  description:
    "Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.",
  img: "/assets/Image/homePageImage/homePageImage.png",
};

export default HomePageAdvertisementComponent;
