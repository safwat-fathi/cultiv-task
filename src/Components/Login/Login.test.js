import React from "react";
import { render, screen, fireEvent } from "../../utils/customRender";
import "@testing-library/jest-dom";
import Login from "./index";

describe("<Login/>", () => {
  it("Renders <Login/> component and test inputs", () => {
    render(<Login />);
    // test email input
    const email = screen.getByTestId("email");
    fireEvent.change(email, { target: { value: "me@example.org" } });
    expect(email.value).toBe("me@example.org");
    // test password input
    const password = screen.getByTestId("password");
    fireEvent.change(password, { target: { value: "123456" } });
    expect(password.value).toBe("123456");
  });
});
