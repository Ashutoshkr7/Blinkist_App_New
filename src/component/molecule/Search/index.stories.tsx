import Search from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";

const SearchComponent = {
  title: "molecule/Search",
  component: Search,
} as ComponentMeta<typeof Search>;

export const Template: ComponentStory<typeof Search> = (args: any) => (
  <Search {...args} />
);

export default SearchComponent;
