module.exports = {
  description: "Creates a new component",
  prompts: [
    {
      type: "list",
      name: "componentType",
      message: "what component do you want to create ?",
      choices: ["View", "Common", "Layout"],
    },
    {
      type: "input",
      name: "name",
      message: "what is the name of the component",
    },
  ],
  actions: [
    {
      index: "add",
      path: "../src/components/{{componentType}}/{{pascalCase name}}.js",
      templateFile: "templates/component/index.js.hbs",
    },
  ],
};
