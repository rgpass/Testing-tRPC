import { createTRPCReact } from "@trpc/react-query";
import { type PropsWithChildren } from "react";
import { type AppRouter } from "~/server/api/root";
import superjson from "superjson";
import { httpBatchLink } from "@trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCMsw } from "msw-trpc";

export const trpcReact = createTRPCReact<AppRouter>({});

const url = `http://localhost:${process.env.PORT ?? 3000}/api/trpc`;

const trpcClient = trpcReact.createClient({
  links: [httpBatchLink({ url })],
  transformer: superjson,
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity } },
});

export const withTRPC = ({ children }: PropsWithChildren) => (
  <trpcReact.Provider client={trpcClient} queryClient={queryClient}>
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  </trpcReact.Provider>
);

export const trpcMsw = createTRPCMsw<AppRouter>({
  transformer: { input: superjson, output: superjson },
});
