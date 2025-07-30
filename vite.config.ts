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
			"@/": `${__dirname}/src/`,
			// "@": path.resolve(__dirname, 'src'),
			// "#/": `${__dirname}/src/`,
		},
	},

  css: {
		preprocessorOptions: {
			scss: {
				// SCSSファイル内でパスを自動的に読み込む設定
				additionalData: `@use "@/styles/variables.scss" as *;`,
			}
			// scss: {
				// includePaths: [path.join(__dirname, "src/styles")],
				// プロジェクト内のすべてのSass（SCSS）ファイルの先頭に、指定された @use ルールを自動的に挿入する
				// additionalData: `@use "#/src/styles/variables.scss" as *;`,			
			// },
		},
	},
});

// css: {
// 		preprocessorOptions: {
// 			scss: {
// 				includePaths: [path.join(__dirname, "src/styles")],
// 				additionalData: `@use "#/styles/variables.scss" as *;`,
// 			},
// 		},
// 	},
