import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "Konnektr - The Intelligent Digital Twin Platform",
  description:
    "Build, deploy, and scale digital twin solutions with Konnektr's open-source platform. Graph database, AI builder, real-time processing, and analytics.",

  bodyAttributes: { class: "dark" },

  // Performance optimizations
  prerender: true,

  extends: vikeReact,
} satisfies Config;
