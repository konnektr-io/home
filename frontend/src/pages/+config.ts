import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  bodyAttributes: { class: "dark" },

  // Performance optimizations
  prerender: true,

  extends: vikeReact,
} satisfies Config;
