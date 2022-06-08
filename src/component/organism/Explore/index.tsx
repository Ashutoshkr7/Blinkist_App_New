import { Container, Box } from "@mui/material";
import Typography from "../../atom/Typography";
import { Link } from "react-router-dom";
import NavIcon from "../../molecule/NavIcon";
import theme from "../../../theme/MainTheme/mainTheme";
import { makeStyles as makeStyle } from "@mui/styles";
import {
  RocketLaunchOutlined,
  AccountBalanceOutlined,
  DesktopWindowsOutlined,
  ScienceOutlined,
  StairsOutlined,
  HistoryToggleOffOutlined,
  AttachMoneyOutlined,
  SpaOutlined,
  ConnectWithoutContactOutlined,
  ApartmentOutlined,
  AccessibleForwardOutlined,
  LibraryBooksOutlined,
  LocalAtmOutlined,
  ParkOutlined,
  PsychologyOutlined,
  SchoolOutlined,
  TimerOutlined,
  WcOutlined,
} from "@mui/icons-material";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((themes) => ({
  [themes.breakpoints.down("sm")]: {
    topic: {
      fontSize: "14px",
      width: "100vw",
    },
  },
}));

const useStyle = makeStyle({
  root: {
    backgroundColor: theme.palette.backgroundcolor.main,
    height: "auto",
    width: "100vw",
    position: "absolute",
    top: "-10px",
    // top: "70px",
    left: "0px",
    right: "0px",
    zIndex: "1000",
    paddingLeft: theme.spacing(2),
  },
  container: {
    display: "flex",
    justifyItems: "space-between",
    alignItems: "center",
    height: "80px",
    borderBottom: "1px solid lightGrey",
    padding: "0px",
  },
  topicText: {
    color: theme.palette.textcolor.light,
    fontWeight: 700,
  },
  navs: {
    display: "flex",
    flexWrap: "wrap",
  },
  nav: {
    width: "33.3%",
    minWidth: "240px",
    color: theme.palette.textcolor.light,
  },
});

const ExploreComponent = () => {
  const classes = useStyle();
  const allClass = useStyles();

  const data = [
    {
      leftIcon: <RocketLaunchOutlined />,
      label: "Entrepreneurship",
    },
    {
      leftIcon: <AccountBalanceOutlined />,
      label: "Politics",
    },
    {
      leftIcon: <DesktopWindowsOutlined />,
      label: "Marketing & Sales",
    },
    {
      leftIcon: <ScienceOutlined />,
      label: "Science",
    },
    {
      leftIcon: <SpaOutlined />,
      label: "Health & Nutrition",
    },
    {
      leftIcon: <StairsOutlined />,
      label: "Personal Development",
    },
    {
      leftIcon: <AttachMoneyOutlined />,
      label: "Economics",
    },
    {
      leftIcon: <HistoryToggleOffOutlined />,
      label: "History",
    },
    {
      leftIcon: <ConnectWithoutContactOutlined />,
      label: "Communication Skills",
    },
    {
      leftIcon: <ApartmentOutlined />,
      label: "Corporate Culture",
    },
    {
      leftIcon: <AccessibleForwardOutlined />,
      label: "Motivation & Inspiration",
    },

    {
      leftIcon: <LocalAtmOutlined />,
      label: "Money & Investments",
    },
    {
      leftIcon: <PsychologyOutlined />,
      label: "Psychology",
    },
    {
      leftIcon: <TimerOutlined />,
      label: "Productivity",
    },
    {
      leftIcon: <WcOutlined />,
      label: "Sex & Relationship",
    },

    {
      leftIcon: <ParkOutlined />,
      label: "Nature & the Environment",
    },

    {
      leftIcon: <SchoolOutlined />,
      label: "Carrer & Success",
    },
    {
      leftIcon: <LibraryBooksOutlined />,
      label: "Education",
    },
  ];

  return (
    <Box className={classes.root}>
      <Container className={`${classes.container} ${allClass.container}`}>
        <Typography
          variant="subtitle3"
          sx={{ color: "#116BE9", fontWeight: "bold", fontFamily: "Cera Pro" }}
          mr={12}
        >
          Explore by category
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{ color: "#6D787E", fontFamily: "Cera Pro" }}
            variant="subtitle3"
            mr={12}
            className={`${classes.topicText} ${allClass.topic}`}
          >
            See recently added titles
          </Typography>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{ color: "#6D787E", fontFamily: "Cera Pro" }}
            className={`${classes.topicText} ${allClass.topic}`}
            variant="subtitle3"
            mr={12}
          >
            See popular titles
          </Typography>
        </Link>
      </Container>
      <Container className={classes.navs}>
        {data.map((currData, i) => {
          return (
            <Box key={i} className={classes.nav}>
              <NavIcon {...currData} data-testid="nav-icon" />
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default ExploreComponent;
