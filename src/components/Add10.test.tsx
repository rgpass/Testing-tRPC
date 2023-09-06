import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Add10 } from "./Add10";

describe("<Add10 />", () => {
  it.skip("shows the correct text", () => {
    render(<Add10 />);

    screen.debug();
  });
});
