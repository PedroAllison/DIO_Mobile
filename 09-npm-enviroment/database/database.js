


async function connectToDatabase(user,password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log("Conexão com o banco de dados estabelecida")
    }else{
        console.log("Falha de Login!")
    }
};



export default connectToDatabase