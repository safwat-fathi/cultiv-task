import React from "react";
import { render, screen, fireEvent } from "../../utils/customRender";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import Navigation from "./index";

describe("<Navigation/>", () => {
  it("Renders <Navigation/> component", () => {
    render(<Navigation />);
    // nav element rendered
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    // test routing
    const history = createMemoryHistory();

    history.push = jest.fn();

    const home = screen.getByTestId("homeLink");
    fireEvent.click(home);

    expect(history.push).toHaveBeenCalledWith("/");
  });
});
