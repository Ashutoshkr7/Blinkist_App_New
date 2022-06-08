import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import baseTheme from "../../../theme/ButtonTheme/buttonTheme";
const ButtonComponent = (props: any) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Button {...props} data-testid="button">
        {props.label}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonComponent;
