import { defineComponentFramework } from "cypress";
import icon from "./logo";

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
  icon,
});
