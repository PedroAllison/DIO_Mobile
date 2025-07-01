const player1 = {
    NOME: "Mario",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function rollDice(){
    return Math.floor( Math.random() * 6) + 1;
};

async function getRandomBlock(){
    let random = Math.random()
    let result

    switch(true){
        case random < 0.33:
            result = "RETA"
            break;
        case random < 0.66:
            result = "CURVA"
            break;
        default:
            result = "CONFRONTO"
    }
    return result
};

async function logRollResult (characterName,block, diceResult, attribute){
    console.log(`${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute} ` )
};

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}🏁`)

        //SORTEAR BLOCO
        let block = await getRandomBlock()
        console.log(`Bloco: ${block}`)

        //RODAR OS DADOS
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //TESTE DE HABILIDADE
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if(block === "RETA"){
        totalTestSkill1 = diceResult1 + character1.VELOCIDADE
        totalTestSkill2 = diceResult2 + character2.VELOCIDADE

        await logRollResult(character1.NOME, "VELOCIDADE",diceResult1, character1.VELOCIDADE)
        await logRollResult(character2.NOME, "VELOCIDADE",diceResult2, character2.VELOCIDADE)

        if(totalTestSkill1 > totalTestSkill2){
            character1.PONTOS++
        }else if(totalTestSkill2 > totalTestSkill1){
            character2.PONTOS++
        }
        
        console.log(`-- PLAYER ${character1.NOME} ESTÁ COM ${character1.PONTOS} PONTOS`)
        console.log(`-- PLAYER ${character2.NOME} ESTÁ COM ${character2.PONTOS} PONTOS`)
    };

    if(block === "CURVA"){
        totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE
        totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE

        await logRollResult(character1.NOME, "MANOBRABILIDADE",diceResult1, character1.MANOBRABILIDADE)
        await logRollResult(character2.NOME, "MANOBRABILIDADE",diceResult2, character2.MANOBRABILIDADE)
        
        if(totalTestSkill1 > totalTestSkill2){
            character1.PONTOS++
        }else if(totalTestSkill2 > totalTestSkill1){
            character2.PONTOS++
        }

        console.log(`-- PLAYER ${character1.NOME} ESTÁ COM ${character1.PONTOS} PONTOS`)
        console.log(`-- PLAYER ${character2.NOME} ESTÁ COM ${character2.PONTOS} PONTOS`)
    };

    if(block === "CONFRONTO"){
        let powerResult1 = diceResult1 + character1.PODER
        let powerResult2 = diceResult2 + character2.PODER

        console.log(`${character1.NOME} confrontou com ${character2.NOME} ! 🥊`);

        await logRollResult(character1.NOME, "PODER",diceResult1, character1.PODER)
        await logRollResult(character2.NOME, "PODER",diceResult1, character2.PODER)
        

        //DIFERENTES FORMAS DE SE REALIZAR UMA CONDIÇÃO COM IF 
        
        if(powerResult1 > powerResult2 && character2.PONTOS > 0){
            console.log(`${character1.NOME} VENCEU O CONFRONTO! E ${character2.NOME} PERDEU 1 PONTO 🐢`)
            console.log(`${character1.NOME} GANHOU UM TURBO`)
            character1.PONTOS++
            character2.PONTOS--
        }

        if(powerResult2 > powerResult1 && character1.PONTOS > 0){
            console.log(`${character2.NOME} VENCEU O CONFRONTO! E ${character1.NOME} PERDEU 1 PONTO 🐢`)
            console.log(`${character2.NOME} GANHOU UM TURBO`)
            character2.PONTOS++
            character1.PONTOS--
        }
        //1 ☝️


       //character2.PONTOS -= powerResult1 > powerResult2 && character2.PONTOS > 0 ? 1: 0
       //character1.PONTOS -= powerResult2 > powerResult1 && character1.PONTOS > 0 ? 1: 0
        //2 ☝️


        // if (powerResult2 > powerResult1){
        //     if(character1.PONTOS > 0){
        //         character1.PONTOS--
        //     }
        // }
        //3 ☝️

        console.log(powerResult2 === powerResult1 ? "CONFRONTO EMPATADO! NENHUM PONTO FOI PERDIDO! " : "")

        // if (powerResult1 === powerResult2){
        //     console.log("CONFRONTO EMPATADO! NENHUM PONTO FOI PERDIDO!")
        // }

        console.log(`-- PLAYER ${character1.NOME} ESTÁ COM ${character1.PONTOS} PONTOS`)
        console.log(`-- PLAYER ${character2.NOME} ESTÁ COM ${character2.PONTOS} PONTOS`)

    };

    //VERIFICANDO O VENCEDOR
    if( totalTestSkill1 > totalTestSkill2){
        console.log(`${character1.NOME} marcou um ponto! `)
        character1.PONTOS++;
    }else if(totalTestSkill2 > totalTestSkill1){
        console.log(`${character2.NOME} marcou um ponto!`)
        character2.PONTOS++;
    }
    console.log("----------------------------------------------------")

    };
    
}

async function declareWinner(character1,character2){
    console.log("Resultado Final: ")
    console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`)
    console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`)

    if(character1.PONTOS > character2.PONTOS){
        console.log(`\n${character1.NOME} VENCEU A CORRIDA, PARABENS!! 🏆`)
    }else if(character2.PONTOS > character1.PONTOS){
        console.log(`\n${character2.NOME} VENCEU A CORRIDA, PARABENS!! 🏆`)
    }else{
        console.log("A CORRIDA TERMINOU EMPATADA!")
    }
}

//FUNÇÃO INVOKE - Não precisa colocar por exemplo o main() para executar a função pois ela se auto invoca
//ABRA PARANTESES NO COMEÇO DA FUNÇÃO E FECHA NO FINAL DA FUNÇÃO E ALEM DISSO E ADICIONE MAIS UM ABRE E FECHA PARETENSES
(async function main(){
    console.log( `🏁🚨CORRIDA ENTRE ${player1.NOME} e ${player2.NOME} COMEÇANDO...🏁🚨\n`)

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
}
)();



