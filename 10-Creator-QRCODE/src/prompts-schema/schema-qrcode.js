import chalk from "chalk";


const promptQRCode = [
    {
        name: "link",
        description: chalk.magenta("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.magenta("Escolha entre o tipo QRCODE: 1- Normal ou 2-Terminal"),

        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha apenas entre 1 e 2"),
        required: true
    },
    

]

export default promptQRCode