import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.magenta("Escolha a ferramenta (1- QRCode ou 2- Password)"),
    pattern: /^[1-2]+$/,
    message: chalk.red("Escolha apenas entre 1 ou 2"),
    required: "true",
  },
];

export default promptSchemaMain