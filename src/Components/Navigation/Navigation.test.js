import React from "react";
import { render, screen } from "../../utils/customRender";
import "@testing-library/jest-dom";
import Navigation from "./index";

describe("<Navigation/>", () => {
  it("Renders <Navigation/> component", () => {
    render(<Navigation />);
    // nav element rendered
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });
});
