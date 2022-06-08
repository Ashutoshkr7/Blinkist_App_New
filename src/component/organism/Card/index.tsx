import { Paper, Box } from "@mui/material";
import Image from "../../atom/Image";
import { AccessAlarm, MoreHoriz } from "@mui/icons-material";
import Typography from "../../atom/Typography";
import ProgressBar from "../../atom/ProgressBar";
import Icon from "../../atom/Icon";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import theme from "../../../theme/MainTheme/mainTheme";
import { useState } from "react";

const styles = {
  parent: {
    borderRadius: theme.spacing(1),
    margin: `${theme.spacing(3)} ${theme.spacing(3)} ${theme.spacing(3)}`,
  },
  image: {
    borderRadius: `${theme.spacing(1)} ${theme.spacing(1)} 0 0`,
  },
  content: {
    padding: theme.spacing(2),
  },
  rightIcon: {
    fontSize: theme.spacing(5),
  },
  timeIcon: {
    fontSize: theme.spacing(4),
    color: theme.palette.textcolor.light,
    marginTop: theme.spacing(0),
  },
  progress: {
    borderRadius: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`,
  },
  flex: {
    display: "flex",
    alignItems: "center",
  },
  bookName: {
    fontWeight: "bold",
    fontSize: "18px",
  },
  libraryButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: theme.spacing(6),
    borderTop: "1px solid lightGrey",
    borderRadius: `0 0 ${theme.spacing(1)} ${theme.spacing(1)}`,
    width: "100%",
  },
};

const CardComponent = ({
  imgHeight,
  url,
  bookName,
  writerName,
  timeRead = "0-minute read",
  progress,
  width,

  ...props
}: any) => {
  const [hoverState, setHoverState] = useState(false);
  const hoverStateHandler = () => {
    setHoverState(!hoverState);
  };

  return (
    <>
      <Paper
        data-testid="card-body"
        elevation={1}
        sx={{
          width: `${width}px`,
          backgroundColor: `${
            parseInt(progress) === 0 && hoverState
              ? theme.palette.primary.light
              : "white"
          }`,
        }}
        onMouseEnter={hoverStateHandler}
        onMouseLeave={hoverStateHandler}
        style={styles.parent}
      >
        <Link to={`/bookInfo/${props.cardId}`}>
          <Image
            height={imgHeight}
            width={width}
            alt="blinkist"
            component="img"
            src={url}
            style={styles.image}
          />
        </Link>
        <Box
          sx={{
            backgroundColor: `${
              parseInt(progress) === 0 && hoverState
                ? theme.palette.primary.light
                : "white"
            }`,
          }}
          style={styles.content}
          data-testid="card-box"
        >
          <Typography
            variant="subtitle1"
            style={styles.bookName}
            sx={{ color: "#03314B", fontFamily: "Cera Pro" }}
          >
            {bookName}
          </Typography>
          <Typography
            variant="body1"
            color={theme.palette.textcolor.light}
            sx={{ color: "#6D787E", fontFamily: "Cera Pro" }}
          >
            {writerName}
          </Typography>
          <Box style={styles.flex}>
            <Icon
              icon={
                <AccessAlarm
                  style={styles.timeIcon}
                  sx={{ color: "#6D787E" }}
                />
              }
            />
            <Typography
              variant="caption2"
              color={theme.palette.textcolor.light}
              sx={{ color: "#6D787E", fontFamily: "Cera Pro" }}
            >
              {timeRead}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            {parseInt(progress) !== 0 ? (
              <Icon
                icon={
                  <MoreHoriz
                    sx={{ padding: theme.spacing(0), color: "#042330" }}
                    style={styles.rightIcon}
                  />
                }
              />
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          {parseInt(progress) !== 0 ? (
            <ProgressBar
              width={100}
              value={progress}
              color="primary"
              data-testid="progress"
            />
          ) : (
            <Box
              data-testid="card-library-handler"
              sx={{
                color: `${!hoverState ? "#0365F2" : "white"}`,
                backgroundColor: `${hoverState ? "#0365F2" : "white"}`,
              }}
              style={styles.libraryButton}
            >
              <Icon variant="body1" icon={<AddIcon />} />
              <Typography variant="body1" sx={{ fontFamily: "Cera Pro" }}>
                Add to library
              </Typography>
            </Box>
          )}
        </Box>
      </Paper>
    </>
  );
};

export default CardComponent;
