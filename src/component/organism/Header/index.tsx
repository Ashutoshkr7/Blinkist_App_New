import Logo from "../../molecule/Logo";
import { Box, Container, Tooltip } from "@mui/material";
import {
  Search,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "../../atom/Button";
import { NavLink } from "react-router-dom";

const HeaderComponent = (props: any) => {
  return (
    <AppBar
      position="fixed"
      sx={{ color: "black", backgroundColor: "white", boxShadow: "none" }}
      data-testid="box"
    >
      <Container data-testid="box-a">
        <Toolbar
          sx={{
            height: "86px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <Logo {...props} />
          </NavLink>

          <Box sx={{ flexGrow: 1 }} data-testid="nav">
            <Button
              data-testid="search-state-button"
              size="large"
              label="search"
              key={0}
              startIcon={
                <Search
                  fontSize="large"
                  style={{ textDecoration: "none", fontSize: "30px" }}
                />
              }
              sx={{
                color: "black",
                margin: "0px 5px 0px 40px",
                display: { md: "none" },
              }}
            />
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                size="large"
                key={0}
                startIcon={
                  <Search
                    fontSize="large"
                    style={{ textDecoration: "none", fontSize: "30px" }}
                  />
                }
                sx={{
                  color: "#042330",
                  margin: "0px 5px 0px 40px",
                }}
              />

              <Button
                data-testid="handle-explore"
                onClick={props.handleExploreMenu}
                size="medium"
                key={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#03314B",
                  fontFamily: "Cera Pro",
                  margin: "5px 10px",
                  textTransform: "capitalize",
                }}
                label="Explore"
                endIcon={
                  (!props.exploreOption && (
                    <KeyboardArrowUp
                      sx={{
                        color: "#042330",
                      }}
                    />
                  )) ||
                  (props.exploreOption && (
                    <KeyboardArrowDown
                      sx={{
                        color: "#042330",
                      }}
                    />
                  ))
                }
              />

              <NavLink to="/library" style={{ textDecoration: "none" }}>
                <Button
                  size="medium"
                  key={2}
                  label="My Library"
                  sx={{
                    color: "#03314B",
                    margin: "5px 10px",
                    fontFamily: "Cera Pro",
                    textTransform: "capitalize",
                  }}
                />
              </NavLink>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Button
                size="medium"
                key={1}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#03314B",
                  margin: "5px 10px",
                  fontFamily: "Cera Pro",
                  textTransform: "capitalize",
                }}
                label="Account"
                endIcon={
                  <KeyboardArrowDown
                    sx={{
                      color: "#042330",
                    }}
                  />
                }
              />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default HeaderComponent;
