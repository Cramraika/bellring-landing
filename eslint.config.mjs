// `next lint` was removed as a lint runner and now behaves as a CONFIGURATION WIZARD when it finds
// no ESLint config: it prints "How would you like to configure ESLint?" and waits on a selection.
// CI has no TTY, so it exits 1 — a missing terminal that reads in the log as a lint failure, and
// that is what has been failing every pull request in this repo rather than any code problem.
//
// Running eslint directly, against a config that exists, removes the wizard from the path entirely.
import nextCoreWebVitals from "eslint-config-next/core-web-vitals.js";

export default [
  ...nextCoreWebVitals,
  { ignores: [".next/**", "node_modules/**", "out/**"] },
];
