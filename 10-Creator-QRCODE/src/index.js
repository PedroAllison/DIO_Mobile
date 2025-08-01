import prompt from 'prompt';
import promptSchemaMain from "./prompts-schema/schema-main.js";
import chalk from 'chalk';
import createQRCode from './service/qr-code/create.js';
import createPassword from './service/password/create.js';


async function main() {
    prompt.get(promptSchemaMain, async (err, choose) => {

        if(err)console.log(err)

        if (choose.select == 1) await createQRCode()
        if (choose.select == 2) await createPassword()
    })
    prompt.start()
}

main()