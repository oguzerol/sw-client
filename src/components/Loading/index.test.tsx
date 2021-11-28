import React from "react";
import { render } from "@testing-library/react";
import Loading from ".";

test("Should  rendered", () => {
  const { container } = render(<Loading />);

  expect(container.firstChild).toBeTruthy();
});
