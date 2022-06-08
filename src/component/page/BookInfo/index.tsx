import { Container, Box } from "@mui/material";
import Typography from "../../atom/Typography";
import Icon from "../../atom/Icon";
import { AccessAlarm, ArrowForward } from "@mui/icons-material";
import Button from "../../atom/Button";
import Image from "../../atom/Image";
import Tab from "../../molecule/tabs";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import theme from "../../../theme/MainTheme/mainTheme";
import { makeStyles as makeStyle } from "@mui/styles";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@mui/material/styles";
import buttonTheme from "../../../theme/ButtonTheme/buttonTheme";

const useStyle = makeStyle((themes: any) => ({
  topHeading: {
    margin: `${theme.spacing(3)} 0`,
  },
  mainParent: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5),
  },
  parent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
  },
  aim: {
    marginBottom: theme.spacing(4),
  },
  writerName: {
    color: "gray",
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
  },
  timeInfo: {
    display: "flex",
    alignItems: "center",
  },
  alarmIcon: {
    paddingRight: theme.spacing(0),
    marginTop: theme.spacing(0),
  },
  time: {
    color: theme.palette.textcolor.light,
    fontSize: theme.spacing(3),
  },
  clickables: {
    fontWeight: "700",
    display: "flex",
  },
  statusBox: {
    margin: `0 ${theme.spacing(4)} 0 0`,
  },
  status: {
    margin: `0 ${theme.spacing(4)} 0 0`,
  },
  forward: {
    color: "gray",
    margin: `0 ${theme.spacing(4)} 0 0`,
  },
  footer: {
    marginBottom: "260px",
    borderBottom: "1px solid lightGrey",
    padding: `${theme.spacing(4)} 0px`,
  },
}));

const useStyles = makeStyles((themes) => ({
  [themes.breakpoints.down("sm")]: {
    image: {
      display: "none",
    },
  },
}));

const BookInfoComponent = ({ library, setLibrary }: any) => {
  const classes = useStyle();
  const allClass = useStyles();
  let { bookId } = useParams();
  const tabData = [
    {
      value: "synopsis",
      label: "Synopsis",
    },
    {
      value: "audience",
      label: "Who is it for?",
    },
    {
      value: "author",
      label: "About the author",
    },
  ];
  let image = "";
  let bookDataSynopics = "";
  let bookDatafor = "";
  let bookDataAboutAuthor = "";

  const [currState, setCurrState] = useState(tabData[0].value);

  const handleState = (state: any) => {
    setCurrState(state);
    setLibrary(library);
  };

  const moreInfo = () => {
    if (currState === tabData[0].value) {
      return (
        <Typography sx={{ fontFamily: "Cera Pro", color: "#03314B" }}>
          {bookDataSynopics}
        </Typography>
      );
    } else if (currState === tabData[1].value) {
      return (
        <Typography sx={{ fontFamily: "Cera Pro", color: "#03314B" }}>
          {bookDatafor}
        </Typography>
      );
    } else if (currState === tabData[2].value) {
      return (
        <Typography sx={{ fontFamily: "Cera Pro", color: "#03314B" }}>
          {bookDataAboutAuthor}
        </Typography>
      );
    }
  };
  return !library ? (
    <CircularProgress data-testid="circular-progress" />
  ) : (
    <>
      <Container>
        <Typography
          className={classes.topHeading}
          sx={{
            color: "#03314B",
            fontFamily: "Cera Pro",
          }}
        >
          Get the key ideas from
        </Typography>
        <Box className={classes.mainParent}>
          <Box className={classes.parent}>
            <Box>
              {library.map((curr: any) => {
                if (curr.id == bookId) {
                  bookDataSynopics = curr.synopics;
                  bookDatafor = curr.for;
                  bookDataAboutAuthor = curr.about_author;
                  image = curr.imageURL;

                  return (
                    <>
                      <Typography
                        className={classes.name}
                        variant="h4"
                        sx={{
                          color: "#03314B",
                          fontFamily: "Cera Pro",
                        }}
                      >
                        {curr.name}
                      </Typography>
                      <Typography
                        className={classes.aim}
                        sx={{
                          color: "#03314B",
                          fontFamily: "Cera Pro",
                        }}
                      >
                        {curr.aim}
                      </Typography>
                      <Typography
                        className={classes.writerName}
                        sx={{
                          color: "#6D787E",
                          fontFamily: "Cera Pro",
                        }}
                      >
                        {curr.writerName}
                      </Typography>
                      <Box className={classes.timeInfo} sx={{}}>
                        <Icon
                          icon={
                            <AccessAlarm
                              className={classes.alarmIcon}
                              sx={{
                                color: "#6D787E",
                                fontFamily: "Cera Pro",
                              }}
                            />
                          }
                        />
                        <Typography
                          className={classes.time}
                          variant="body"
                          sx={{
                            color: "#6D787E",
                            fontFamily: "Cera Pro",
                          }}
                        >
                          {curr.timeRead}
                        </Typography>
                      </Box>
                    </>
                  );
                }
              })}
            </Box>

            <Box className={classes.clickables}>
              <ThemeProvider theme={buttonTheme}>
                <Button
                  label="Read now"
                  size="medium"
                  variant="outlined"
                  color="success"
                  className={classes.statusBox}
                  sx={{
                    border: "1px solid #042330",
                    borderRadius: "4px",
                    fontFamily: "Cera Pro",
                    color: "#22C870",
                    textTransform: "capitalize",
                  }}
                />
                <Button
                  data-testid="status-handler"
                  label="Finished Reading"
                  size="medium"
                  variant="contained"
                  color="success"
                  classesName={classes.status}
                  sx={{
                    background: "#2CE080",
                    color: "#03314B",
                    borderRadius: "4px",
                    fontFamily: "Cera Pro",
                    textTransform: "capitalize",
                  }}
                />
                <Button
                  sx={{
                    borderRadius: "4px",
                    fontFamily: "Cera Pro",
                    color: "#6D787E",
                    textTransform: "capitalize",
                  }}
                  label="Send to Kindle"
                  size="medium"
                  className={classes.forward}
                  endIcon={
                    <ArrowForward
                      sx={{
                        borderRadius: "4px",
                        color: "#6D787E",
                      }}
                    />
                  }
                />
              </ThemeProvider>
            </Box>
          </Box>
          <Box>
            <Image
              className={allClass.image}
              height="300"
              width="280"
              src={image}
            />
          </Box>
        </Box>
        <Box className={classes.footer}>
          <Tab stateHandler={handleState} tabData={tabData} />
          <Box sx={{ height: "140px" }}>{moreInfo()}</Box>
        </Box>
      </Container>
    </>
  );
};

export default BookInfoComponent;
