import { ComponentMeta, ComponentStory } from "@storybook/react";
import Library from ".";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "../../../theme/MainTheme/mainTheme";

const LibraryComponent = {
  title: "Page/Library",
  component: Library,
} as ComponentMeta<typeof Library>;

const currentlyReadingBooks = [
  {
    id: 0,
    name: "Employee to Entrepreneur",
    url: "./assets/Image/Book_Image/employeeToEntrepreneur.png",
    timeRead: "15-minute read",
    writerName: "Steve Glaveski",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "10",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 1,
    name: "Doesn’t Hurt to Ask",
    url: "./assets/Image/Book_Image/doesn’tHurtToAsk.png",
    timeRead: "13-minute read",
    writerName: "Trey Gowdy",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "20",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 2,
    name: "The Fate of Food",
    url: "./assets/Image/Book_Image/theFateOfFood.png",
    timeRead: "13-minute read",
    writerName: "Amanda Little",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "30",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 3,
    name: "Lives of the Stoics",
    url: "./assets/Image/Book_Image/livesOfTheStoics.png",
    timeRead: "13-minute read",
    writerName: "Ryan Holiday, Stephen Hansel",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "40",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 4,
    name: "Loving Your Business",
    url: "./assets/Image/Book_Image/lovingYourBusiness.png",
    timeRead: "13-minute read",
    writerName: "Debbie King",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "50",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 5,
    name: "The Lonely Century",
    url: "./assets/Image/Book_Image/theLonelyCentury.png",
    timeRead: "15-minute read",
    writerName: "Noreena Hertz",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "60",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 6,
    name: "Eat Better, Feel Better",
    url: "./assets/Image/Book_Image/eatBetter,FeelBetter.png",
    timeRead: "13-minute read",
    writerName: "Giada De Laurentiis",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "70",
    aim: "Turning Your Business into an Enduring Great Company",
  },
  {
    id: 7,
    name: "Dropshipping",
    url: "./assets/Image/Book_Image/dropshipping.png",
    timeRead: "15-minute read",
    writerName: "James Moore",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "80",
    aim: "Turning Your Business into an Enduring Great Company",
  },
];

let setCurrentlyReadingBooks = () => {};

const finishedReadingBooks = [
  {
    id: 0,
    name: "Beyond Entrepreneurship",
    url: "./assets/Image/Book_Image/beyondEntrepreneurship.png",
    timeRead: "13-minute read",
    writerName: "Jim Collins & Bill Lazier",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "100",
    aim: "Turning Your Business into an Enduring Great Company",
  },

  {
    id: 1,
    name: "Bring Your Human to Work",
    url: "./assets/Image/Book_Image/bringYourHumanToWork.png",
    timeRead: "13-minute read",
    writerName: "Erica Keswin",
    synopics:
      "Beyond Entrepreneurship 2.0 (2020) updates Jim Collins and Bill Lazier’s essential 1992 business handbook, Beyond Entrepreneurship for the entrepreneurs, visionaries, and innovators of today. This new edition combines the timeless business advice and strategy of the original text, supplemented with cutting-edge insights and case studies pertinent to today’s business world.",
    for: "One of the key learnings for entrepreneurs is the understanding of the reality about success and how extraordinary opportunities, instead of talent, pave the way to excellence.",
    about_author:
      "From Jim Collins, the most influential business thinker of our era, comes an ambitious upgrade of his classic, Beyond Entrepreneurship, that includes all-new findings and world-changing insights.",
    progress: "100",
    aim: "Turning Your Business into an Enduring Great Company",
  },
];

let setFinishedReadingBooks = () => {};

export const Template: ComponentStory<typeof Library> = (args: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Library {...args} />
      </Router>
    </ThemeProvider>
  );
};

Template.args = {
  currentlyReadingBooks: currentlyReadingBooks,
  setCurrentlyReadingBooks: setCurrentlyReadingBooks,
  finishedReadingBooks: finishedReadingBooks,
  setFinishedReadingBooks: setFinishedReadingBooks,
};

export default LibraryComponent;
