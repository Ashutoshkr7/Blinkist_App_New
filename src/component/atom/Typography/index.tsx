import { Typography } from "@mui/material";

const TypographyComponent = ({ theme, ...props }: any) => {
  return (
    <Typography mb={1} mt={1} {...props}>
      {props.children}
    </Typography>
  );
};

export default TypographyComponent;
