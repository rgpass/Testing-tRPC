/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Add10 } from "./Add10";
import { withTRPC } from "~/tests/decorator";

describe("<Add10 />", () => {
  describe("HOC withTRPC", () => {
    it("shows the correct text", async () => {
      render(<Add10 />, { wrapper: withTRPC });

      expect(screen.getByText(/Loading/)).toBeInTheDocument();
      expect(await screen.findByText(/52/)).toBeInTheDocument();
    });
  });
});
