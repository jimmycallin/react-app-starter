import { render, screen } from "@testing-library/react";
import App from "../App";

describe("initialization", () => {
  it("loads landing page", async () => {
    render(<App />);
    expect(screen.getByText("React App Template")).toHaveTextContent("React App Template");
  });
});
