import { createTheme } from "@mui/material/styles";

const buttonTheme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
  palette: {
    success: {
      main: "#2CE080",
    },
    primary: {
      main: "#22C870",
      contrastText: "#11cb5f",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
    h1: {
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
      fontSize: "33px",
    },
  },
});

export default buttonTheme;
