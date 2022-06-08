import { Container, Box } from "@mui/material";
import HomePageAdvertisement from "../../molecule/HomePageAdvertisement";
import Input from "../../atom/Input";
import { Search } from "@mui/icons-material";
import Typography from "../../atom/Typography";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../../assets/Image/homePageImage/homePageImage.png";
import Card from "../../organism/Card";
import theme from "../../../theme/MainTheme/mainTheme";

const useStyles = makeStyles((themes) => ({
  input: {
    margin: `${theme.spacing(5)} 0px`,
    height: theme.spacing(6),
    width: "100%",
    maxWidth: "658px",
    fontWeight: "bold",
    fontSize: "20px",
  },
  heading: {
    fontWeight: "bold",
    fontSize: theme.spacing(4),
    marginTop: "75px",
  },
  main: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  [themes.breakpoints.down("sm")]: {},
}));

const SearchComponent = ({
  trendingBlinks,
  setTrendingBlinks,
  justAdded,
  setJustAdded,
  featuredAudioBlinks,
  setFeaturedAudioBlinks,
  library,
  setLibrary,
  ...props
}: any) => {
  const classes = useStyles();

  return (
    <Container>
      <HomePageAdvertisement
        heading="Explore Books on entrepreneurship"
        description="Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start."
        img={image}
      />
      <Input
        className={classes.input}
        startIcon={
          <Search
            sx={{
              color: "#3A4649",
            }}
          />
        }
        placeholder="Search by title or author"
        sx={{ width: "658px", fontFamily: "Cera Pro", color: "#6D787E" }}
      />
      <Typography
        className={classes.heading}
        sx={{ color: "#03314B", fontFamily: "Cera Pro" }}
      >
        Trending blinks
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {trendingBlinks.map((curr: any) => {
          return (
            <Box data-testid="container">
              <Box className={classes.main}>
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
              </Box>
            </Box>
          );
        })}
      </Box>

      <Typography
        className={classes.heading}
        sx={{ color: "#03314B", fontFamily: "Cera Pro" }}
      >
        Just added
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {justAdded.map((curr: any) => {
          return (
            <Box data-testid="container">
              <Box className={classes.main}>
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
              </Box>
            </Box>
          );
        })}
      </Box>

      <Typography
        className={classes.heading}
        sx={{ color: "#03314B", fontFamily: "Cera Pro" }}
      >
        Featured audio blinks
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {featuredAudioBlinks.map((curr: any) => {
          return (
            <Box data-testid="container">
              <Box className={classes.main}>
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
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default SearchComponent;
