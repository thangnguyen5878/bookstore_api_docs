import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  basePath: "/bookstore_api_docs/",
  topNavigation: [
    { id: "docs", label: "Documentation" },
    { id: "api", label: "API Reference" },
  ],
  sidebar: {
    docs: [
      {
        "type": "doc",
        "label": "Introduction",
        "id": "docs/introduction"
      }
    ],
  },
  redirects: [{ from: "/", to: "docs/introduction" }],
  apis: {
    type: "file",
    input: "./apis/openapi.yaml",
    navigationId: "api",
  },
  docs: {
    files: "/pages/**/*.{md,mdx}",
  },
};

export default config;
