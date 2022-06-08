import { createTheme } from "@mui/material/styles";
const tabTheme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
    // secondary: {
    //   // main: "#2CE080",
    //   main: "#22C870",
    // },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        // root: {
        //   alignItems: "flex-start !important",
        //   "&.Mui-selected": {
        //     color: "#03314B",
        //     fontSize: "16px",
        //     lineHeight: "20.11px",
        //     weight: "400",
        //     borderBottom: "2px solid #2CE080",
        //     padding: "0px",
        //   },
        // },
        root: {
          textTransform: "capitalize",
          placeItems: "flex-start",
          fontFamily: "Cera Pro",
          fontSize: "18px",
          lineHeight: "23px",
          // color: "#22C870"
        },
      },
    },
  },
});

export default tabTheme;

// const tabTheme = createTheme({
//   components: {
//     MuiTab: {
//       styleOverrides: {
//         root: {
//           textTransform: "capitalize",
//           placeItems: "flex-start",
//           fontFamily: "Cera Pro",
//           fontSize: "18px",
//           lineHeight: "23px",
//         },
//       },
//     },
//   },
//   palette: {
//     primary: {
//       main: "#22C870",
//     },
//   },
// });
