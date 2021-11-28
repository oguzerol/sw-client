import React from "react";
import { render, screen } from "@testing-library/react";
import TabRow from ".";

test("Should return null with rows givin null", () => {
  const { container } = render(<TabRow titles={["name", "test"]} row={null} />);

  expect(container.firstChild).toEqual(null);
});

test("Should render givin titles and rows", () => {
  const { getAllByTestId } = render(
    <table>
      <tbody>
        <TabRow titles={["name", "test"]} row={{ name: "test" }} />
      </tbody>
    </table>
  );

  const row = getAllByTestId("table-row");
  expect(row).toBeTruthy();
});

test("Should render with givin rows rows text", () => {
  render(
    <table>
      <tbody>
        <TabRow titles={["name", "test"]} row={{ name: "oguz" }} />
      </tbody>
    </table>
  );

  expect(screen.getByText("oguz"));
});
