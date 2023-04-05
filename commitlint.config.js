const path = require("path");
const package = require(path.join(__dirname, "/package.json"));

const allowedTypes = package?.config?.["cz-emoji"]?.types?.map((value) => {
  return value.name;
});

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [0, "always", 100],
    "type-enum": [2, "always", allowedTypes],
  },
};
