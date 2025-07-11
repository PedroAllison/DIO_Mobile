import chalk from "chalk";
import qr from "qrcode-terminal"


async function handle(err, result) {
    
    if(err){
        console.log("erro on application")
        return;     //ESSE RETURN É PARA PARAR A APLICAÇÃO
    }
    const isSmall= result.type == 2;
    qr.generate(result.link, {small: isSmall}, (qrcode)=>{
        console.log(chalk.green("QRCode Gerado Com Sucesso: \n"));
        console.log(qrcode); 
    })
}
//setInterval(handle,10000)
//CASO PRECISE DE ALGUM TEMPO UTILIZE O CODIGO ACIMA

export default handle;

