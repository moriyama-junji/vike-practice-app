import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import path from "node:path";

export default defineConfig({
  plugins: [vike(), react()],
  build: {
    target: "es2022",
  },

  resolve: {
		alias: {
			"#/": `${__dirname}/src/`,
		},
	},

  css: {
		preprocessorOptions: {
			scss: {
				includePaths: [path.join(__dirname, "src/styles")],
				additionalData: `@use "#/styles/variables.scss" as *;`,
			},
		},
	},
});
