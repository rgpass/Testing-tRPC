import path from "path";
import react from "@vitejs/plugin-react";

const config = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
};

export default config;
