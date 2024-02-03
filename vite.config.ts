import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import babel from "vite-plugin-babel";
import { extname } from "path";
import { run } from "vite-plugin-run";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        presets: ["@babel/preset-flow"],
        plugins: ["babel-plugin-syntax-hermes-parser"],
      },
      // uses the jsx loader for .jsx files
      loader: (path) => {
        if (extname(path) === ".jsx") {
          return "jsx";
        }
      },
    }),
    react(),
    run({
      input: [
        {
          name: "Flow Typecheck",
          run: ["flow"],
          pattern: ["**/*.js", "**/*.jsx"],
        },
      ],
      silent: false,
    }),
  ],
});
