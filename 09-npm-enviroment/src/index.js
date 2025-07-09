import connectToDatabase from "../database/database.js";
//import "dotenv/config" <- EXEMPLO DE COMO ERA PARA IMPORTAR ANTES DO NODE 20

async function main(){
    //console.log(process.env.USERDATABASE);
   //console.log(process.env.PASSWORDDATABASE);
    await connectToDatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE)
}
main()