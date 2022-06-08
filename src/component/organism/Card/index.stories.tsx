import Card from ".";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";
const CardComponent = {
  title: "organism/Card",
  component: Card,
  parameters: {
    actions: {
      handles: ["mouseover"],
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: any) => {
  return (
    <Router>
      <Card {...args} />
    </Router>
  );
};

export const PresentInLibrary = Template.bind({});

PresentInLibrary.args = {
  imgHeight: 300,
  url: "/assets/Image/Book_Image/book.png",
  bookName: "Being Boss",
  writerName: "Kathleen Shannon and Emily...",
  timeRead: "13-minute read",
  progress: 60,
  width: 350,
};

export const AddToLibrary = Template.bind({});

AddToLibrary.args = {
  imgHeight: 300,
  url: "/assets/Image/Book_Image/book.png",
  bookName: "Being Boss",
  writerName: "Kathleen Shannon and Emily...",
  timeRead: "13-minute read",
  progress: 0,
  width: 350,
};

export default CardComponent;
