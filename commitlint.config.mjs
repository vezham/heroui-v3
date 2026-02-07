import conventional from "@commitlint/config-conventional";

/**
 * Commitlint config
 */
const commitLintConfig = {
  extends: ["@commitlint/config-conventional"],
  helpUrl:
    "https://storybook.vezham.com/?path=/docs/guidelines-contribution--overview#commit-convention",
  rules: {
    ...conventional.rules,
    "body-max-length": [2, "always", 500],
    "body-max-line-length": [2, "always", 1000],
    "header-max-length": [0],
    "subject-case": [2, "always", ["sentence-case", "lower-case"]],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "refactor",
        "style",
        "mocks",
        "test",
        "docs",
        "i18n",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
  },
};

export default commitLintConfig;
