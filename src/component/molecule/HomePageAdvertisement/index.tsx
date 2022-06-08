import Image from "../../atom/Image";
import Typography from "../../atom/Typography";
import { Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((themes) => ({
  parent: {
    backgroundColor: "#F1F6F4",
    display: "flex",
    padding: "100px",
    boxSizing: "border-box",
    justifyContent: "center",
    margin: "auto",
    height: "350px",
    width: "1150px",
  },
  [themes.breakpoints.down("sm")]: {
    heading: {
      fontSize: "20px",
    },
    para: {
      fontSize: "13px",
      fontWeight: "400",
    },
    image: {
      width: 249,
      height: 600,
    },
  },
}));

const HomePageAdvertisement = ({ heading, description, img }: any) => {
  const classes = useStyles();
  return (
    <Box className={classes.parent}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#03314B",
            fontFamily: "Cera Pro",
          }}
          className={classes.heading}
          data-testid="heading"
        >
          {heading}
        </Typography>
        <Typography
          sx={{ color: "#6D787E", fontFamily: "Cera Pro" }}
          className={classes.para}
          data-testid="description"
        >
          {description}
        </Typography>
      </Box>
      <Image
        src={img}
        className={classes.image}
        sx={{ width: "249px", height: "230px" }}
      />
    </Box>
  );
};

export default HomePageAdvertisement;
