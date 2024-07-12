function classificacaoPena(){
    let somaRespostasPositivas = 0
    let pergunta1 = prompt('TELEFONOU PARA A VÍTIMA ? [S/N]').trim().toLowerCase()
    let pergunta2 = prompt('ESTEVE NO LOCAL DO CRIME ? [S/N]').trim().toLowerCase()
    let pergunta3 = prompt('MORA PERTO DA VÍTIMA ? [S/N]').trim().toLowerCase()
    let pergunta4 = prompt('DEVIA PARA A VÍTIMA ? [S/N]').trim().toLowerCase()
    let pergunta5 = prompt('JA TRABALHOU COM A VÍTIMA ? [S/N]').trim().toLowerCase()

    if (pergunta1 === 's') {
        somaRespostasPositivas++;
    }
    if (pergunta2 === 's') {
        somaRespostasPositivas++;
    }
    if (pergunta3 === 's') {
        somaRespostasPositivas++;
    }
    if (pergunta4 === 's') {
        somaRespostasPositivas++;
    }
    if (pergunta5 === 's') {
        somaRespostasPositivas++;
    }

    if (somaRespostasPositivas <= 1){
        console.log('INOCENTE');
    }else if(somaRespostasPositivas == 2){
        console.log('SUSPEITA')
    }else if(somaRespostasPositivas >= 3 && somaRespostasPositivas <= 4){
        console.log('CÚMPLICE')
    }else{
        console.log('ASSASINO')
    }
}


classificacaoPena()
