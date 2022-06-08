import { Container, Box } from "@mui/material";
import Logo from "../../molecule/Logo";
import Typography from "../../atom/Typography";
import image from "../../../assets/Image/Logo/Blinkist_Logo.png";
const FooterComponent = (props: any) => {
  const data = [
    {
      category: "Editorial",
      list: [
        "Book lists",
        "What is Notfication?",
        "What to read next?",
        "Benefits of reading",
      ],
    },
    {
      category: "Useful links",
      list: ["Pricing", "Blinkist business", "Gift cards", "Blinkist magaine"],
    },
    {
      category: "Company",
      list: ["About", "Careers", "Partners", "Code of Conduct"],
    },
  ];
  return (
    <>
      <Box {...props}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Logo
              height={24}
              width={99.1}
              url={image}
              // url="../../../assets/Image/Logo/Blinkist_Logo.png" --> this doesn't works don't know why
              name="Blinkist"
              data-testid="logo"
            />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#0365F2",
                fontFamily: "Cera Pro",
              }}
              data-testid="slogan"
            >
              Big ideas in small packages <br />
              Start learning now
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyItems: "center" }}>
            {data.map((curr, i) => {
              return (
                <Box
                  key={`footer-${i}`}
                  sx={{
                    margin: "0px 20px",
                  }}
                  data-testid="list"
                >
                  <Typography
                    pb={2}
                    sx={{
                      fontWeight: "bold",
                      color: "#03314B",
                      fontFamily: "Cera Pro",
                    }}
                  >
                    {curr.category}
                  </Typography>
                  {curr.list.map((currList) => {
                    return (
                      <Typography
                        pb={1}
                        sx={{ color: "#6D787E", fontFamily: "Cera Pro" }}
                      >
                        {currList}
                      </Typography>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default FooterComponent;
