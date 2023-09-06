import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ num: z.number() }))
    .query(({ input }) => {
      return {
        add10: input.num + 10,
        random: getRandomInt(input.num),
      };
    }),
});

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}
