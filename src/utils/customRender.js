/* 
----------------------------------------------------------------------
custom render function for testing components with routing and state
----------------------------------------------------------------------
*/

import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const Wrapper = ({ children }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};

const customRender = (ui, options) => {
  render(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";

export { customRender as render };
