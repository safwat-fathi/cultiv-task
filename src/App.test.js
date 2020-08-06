import React from "react";
import axios from "axios";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "./utils/customRender";
import "@testing-library/jest-dom";
import App from "./App";

describe("<App />", () => {
  it("Renders <App /> component", /* async */ () => {
    render(<App />);
    // loading element rendered
    expect(screen.getByText(/loading posts/i)).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.getByText(/loading posts/i));

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
