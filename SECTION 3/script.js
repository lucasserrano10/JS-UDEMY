let corredor1 = 22;  // tempo em segundos
let corredor2 = 12;
let corredor3 = 4;

if(corredor1 < corredor2 && corredor1 < corredor3){
    console.log(`O CORREDOR 1 É O VENCEDOR COM O TEMPO DE ${corredor1} segundos !`)
    if(corredor2 < corredor3){
        console.log('O CORREDOR 2 FICOU EM SEGUNDO LUGAR')
    }else if(corredor3 < corredor2){
        console.log('O CORREDOR 3 FICOU EM SEGUNDO LUGAR')
    }
}else if(corredor2 < corredor3 && corredor2 < corredor1){
    console.log(`O CORREDOR 2 É O VENCEDOR COM O TEMPO DE ${corredor2} segundos !`)
    if(corredor1 < corredor3){
        console.log('O CORREDOR 1 FICOU EM SEGUNDO LUGAR')
    }else if(corredor3 < corredor1){
        console.log('O CORREDOR 3 FICOU EM SEGUNDO LUGAR')
    }
}else{
    console.log(`O CORREDOR 3 É O VENCEDOR COM O TEMPO DE ${corredor3} segundos !`)
    if(corredor1 < corredor2){
        console.log('O CORREDOR 1 FICOU EM SEGUNDO LUGAR')
    }else if(corredor2 < corredor1){
        console.log('O CORREDOR 2 FICOU EM SEGUNDO LUGAR')
    }
}