// `next lint` was removed as a lint runner: with no ESLint config present it becomes an interactive
// wizard ("How would you like to configure ESLint?") and exits 1 in CI for want of a TTY. That is
// what was failing every pull request here — a missing terminal that reads in the log as a lint error.
//
// The config below is the documented Next-15 + ESLint-9 pairing, and the indirection is not optional:
// eslint-config-next@15 ships `core-web-vitals` as a LEGACY eslintrc object, while ESLint 9 expects a
// flat-config ARRAY. Importing it directly yields `TypeError: nextCoreWebVitals is not iterable`.
// FlatCompat is the adapter between the two formats. (The extensionless subpath used by repos on
// eslint-config-next@16 is a v16 exports-map entry and does not resolve here.)
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: dirname(fileURLToPath(import.meta.url)) });

export default [
  ...compat.extends("next/core-web-vitals"),
  { ignores: [".next/**", "node_modules/**", "out/**"] },
];
