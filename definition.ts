import { defineComponentFramework } from "cypress";

const dep: Cypress.CypressComponentDependency = {
  // Unique, semantic identifier.
  type: "octane-js",

  // Human readable name.
  name: "Octane",

  // Package name install from `npm`.
  package: "octane",

  /**
   * Similar to package, but can include a version or tag.
   * Used during setup to generate an install command for users.
   * Eg: `octane@next`
   */
  installer: "octane@latest",

  // Human readable description.
  description: "Octane is a fast, JavaScript UI framework, and the successor to Inferno",

  // Minimum supported version.
  minVersion: "^0.1.28",
};

/**
 * Similar to above. Create an smooth, seamless setup experience
 * by ensuring the user has all the necessary dependencies.
 */
const octaneVitePlugin: Cypress.CypressComponentDependency = {
  type: "octane-vite-plugin",
  name: "Vite Plugin Octane",
  package: "@octanejs/vite-plugin",
  installer: "@octanejs/vite-plugin",
  description: "Vite integration for Octane",
  minVersion: "^0.1.28",
};

/**
 * The definition.
 */
export default defineComponentFramework({
  /**
   * This should match the `npm` package name.
   * The convention required to ensure your Definition is processed
   * by Cypress is `cypress-ct-*` for global packages, or
   * `@org/cypress-ct-*` for organization level packages.
   */
  type: "cypress-ct-octane-js",

  /**
   * The label that shows up when configuring Component Testing
   * for the first time.
   */
  name: "Octane",

  /**
   * Supported bundlers. Can be "webpack" and/or "vite".
   */
  supportedBundlers: ["vite"],

  /**
   * Used by Cypress to automatically detect the correct Framework Definition
   * based on the user's project.
   * In this example, if a module matching `dep`
   * is found in the user's project,
   * Octane will automatically be selected when configuring Component Testing.
   */
  detectors: [dep],

  /**
   * Supply a set of dependencies a project should have to use this Framework Definition. The user will be prompted to install them if they are not found.
   * Optionally, supply different dependencies based on the chosen bundler.
   */
  dependencies: (bundler) => {
    return [dep, octaneVitePlugin];
  },

  /**
   * An SVG icon. Shown when configuring Component Testing for the first time.
   * Optional, but good for branding your Framework Definition.
   */
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 155.3"><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" fill="#76b3e1"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="27.5" y1="3" x2="152" y2="63.5"><stop offset=".1" stop-color="#76b3e1"/><stop offset=".3" stop-color="#dcf2fd"/><stop offset="1" stop-color="#76b3e1"/></linearGradient><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" opacity=".3" fill="url(#a)"/><path d="M52 35l-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" fill="#518ac8"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="95.8" y1="32.6" x2="74" y2="105.2"><stop offset="0" stop-color="#76b3e1"/><stop offset=".5" stop-color="#4377bb"/><stop offset="1" stop-color="#1f3b77"/></linearGradient><path d="M52 35l-4 1c-17 5-22 21npm install https://cdn.cypress.io/beta/npm/12.6.0/darwin-arm64/feature/ct-public-api-ab820f062d313fbef51665bdd1d883c69d89b3be/cypress.tgz-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" opacity=".3" fill="url(#b)"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="18.4" y1="64.2" x2="144.3" y2="149.8"><stop offset="0" stop-color="#315aa9"/><stop offset=".5" stop-color="#518ac8"/><stop offset="1" stop-color="#315aa9"/></linearGradient><path d="M134 80a45 45 0 00-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z" fill="url(#c)"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="75.2" y1="74.5" x2="24.4" y2="260.8"><stop offset="0" stop-color="#4377bb"/><stop offset=".5" stop-color="#1a336b"/><stop offset="1" stop-color="#1a336b"/></linearGradient><path d="M114 115a45 45 0 00-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z" fill="url(#d)"/></svg>
  `,
});
