import { render, screen } from "@testing-library/react";
import Icon from ".";
import AddIcon from "@mui/icons-material/Add";
test("should render passed icon", () => {
  render(<Icon icon={<AddIcon data-testid="addIcon" />} />);
  const iconElement = screen.getByTestId("addIcon");
  expect(iconElement).toBeInTheDocument();
});
