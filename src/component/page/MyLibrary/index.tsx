import { useState } from "react";
import { Container, Box } from "@mui/material";
import Typography from "../../atom/Typography";
import baseTheme from "../../../theme/ButtonTheme/buttonTheme";
import Tab from "../../molecule/tabs";
import Card from "../../organism/Card";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  cards: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

const MyLibrary = ({
  currentlyReadingBooks,
  finishedReadingBooks,
  library,
}: any) => {
  const classes = useStyle();

  let currentlyReadingBooksData = currentlyReadingBooks;
  let finishedReadingBooksData = finishedReadingBooks;
  const tabData = [
    {
      value: "reading",
      label: "Currently reading",
    },
    {
      value: "finished",
      label: "Finished",
    },
  ];
  const [currState, setCurrState] = useState(tabData[0].value);
  const handleState = (state: string) => {
    setCurrState(state);
  };

  const cards = () => {
    if (currentlyReadingBooks.length === 0) {
      return <CircularProgress data-testid="circular-progress" />;
    } else if (currState === "reading") {
      return currentlyReadingBooksData.map((curr: any) => {
        return (
          <Card
            cardId={curr.id}
            key={curr.id}
            imgHeight={300}
            url={curr.url}
            bookName={curr.name}
            writerName={curr.writerName}
            timeRead={curr.timeRead}
            width={350}
            progress={curr.progress}
          />
        );
      });
    } else if (currState === "finished") {
      return finishedReadingBooksData.map((curr: any) => {
        return (
          <Card
            cardId={curr.id}
            key={curr.id}
            imgHeight={300}
            url={curr.url}
            bookName={curr.name}
            writerName={curr.writerName}
            timeRead={curr.timeRead}
            width={350}
            progress={curr.progress}
          />
        );
      });
    }
  };

  return (
    <Container sx={{ paddingTop: "50px" }}>
      <Typography
        variant="h5"
        theme={baseTheme}
        mb={4}
        sx={{ color: "#03314B", fontFamily: "Cera Pro" }}
      >
        My Library
      </Typography>
      <Tab
        stateHandler={handleState}
        tabData={tabData}
        sx={{ color: "#042330", fontFamily: "Cera Pro" }}
      />
      <Box className={classes.cards} mt={4}>
        {cards()}
      </Box>
    </Container>
  );
};

export default MyLibrary;
