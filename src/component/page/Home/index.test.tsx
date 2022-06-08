import { render, screen } from "@testing-library/react";
import Home from ".";
import { BrowserRouter } from "react-router-dom";

const setTrendingBlinks = jest.fn();
const setJustAdded = jest.fn();
const setFeaturedAudioBlinks = jest.fn();
const setLibrary = jest.fn();

const router = (
  trendingBlinks: any,
  justAdded: any,
  featuredAudioBlinks: any,
  library: any
) => {
  return (
    <BrowserRouter>
      <Home
        trendingBlinks={trendingBlinks}
        setTrendingBlinks={setTrendingBlinks}
        justAdded={justAdded}
        setJustAdded={setJustAdded}
        featuredAudioBlinks={featuredAudioBlinks}
        setFeaturedAudioBlinks={setFeaturedAudioBlinks}
        library={library}
        setLibrary={setLibrary}
      />
    </BrowserRouter>
  );
};

describe("Home", () => {
  let response: any,
    trendingBlinks: any,
    library: any,
    justAdded: any,
    featuredAudioBlinks: any;
  beforeAll(async () => {
    let response = await fetch("http://localhost:3333/trendingBlinks");

    trendingBlinks = await response.json();
    response = await fetch("http://localhost:3333/library");

    library = await response.json();
    response = await fetch("http://localhost:3333/justAdded");

    justAdded = await response.json();
    response = await fetch("http://localhost:3333/featuredAudioBlinks");

    featuredAudioBlinks = await response.json();
  });
  test("should render input", () => {
    render(router(trendingBlinks, justAdded, featuredAudioBlinks, library));
    const HomePageAdvertisementElement = screen.getByPlaceholderText(
      "Search by title or author"
    );
    expect(HomePageAdvertisementElement).toBeInTheDocument();
  });
  test("should render containers matching to no. of books present in the trendingBlinks, justAdded, featuredAudioBlinks section", async () => {
    render(router(trendingBlinks, justAdded, featuredAudioBlinks, library));
    const extraElement = await screen.findAllByTestId("container");
    expect(extraElement.length).toBe(
      trendingBlinks.length + justAdded.length + featuredAudioBlinks.length
    );
  });
});
