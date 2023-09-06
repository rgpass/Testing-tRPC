/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Random } from "./Random";
import { trpcMsw, withTRPC } from "~/tests/decorator";
import { setupServer } from "msw/node";

const EXPECTED_RANDOM = 8_675_309;

const server = setupServer(
  trpcMsw.example.hello.query(async (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.data({ add10: 52, random: EXPECTED_RANDOM }),
    );
  }),
);

beforeAll(() => {
  server.listen();
});

afterAll(() => {
  server.close();
});

describe("<Random />", () => {
  describe("via MSW", () => {
    it("shows the correct text", async () => {
      render(<Random />, { wrapper: withTRPC });

      expect(screen.getByText(/Loading Random/)).toBeInTheDocument();

      const asRegExp = new RegExp(EXPECTED_RANDOM.toString());
      expect(await screen.findByText(asRegExp)).toBeInTheDocument();
    });
  });
});
