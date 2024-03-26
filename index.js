function nivelHeroina (vitorias, derrotas){
    let saldo = vitorias - derrotas
    let nivel

    if (vitorias < 10){
        nivel= "ferro"
    } else if (vitorias >= 10 && vitorias <= 20){
        nivel= "bronze"
    } else if (vitorias >= 21 && vitorias <= 50){
        nivel= "prata"
    } else if (vitorias >= 51 && vitorias <= 80){
        nivel= "ouro"
    } else if (vitorias >= 81 && vitorias <= 90){
        nivel= "diamante"
    } else if (vitorias >= 91 && vitorias <= 100){
        nivel= "lendário"
    } else if (vitorias >= 101){
        nivel= "imortal"
    }
    console.log("a heroína tem saldo de " + vitorias + " e está no nivel de " + nivel )
}

nivelHeroina(100, 10)