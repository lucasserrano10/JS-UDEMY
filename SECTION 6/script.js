mediaAlunos = [[9],[5],[7],[8],[2]]

let somaReprovados = 0
mediaAlunos.forEach((notas,indice) => {
    notas.forEach((alunoNota,indiceNota) => {
        if(alunoNota <= 6.9){
            somaReprovados++
            console.log(`ALUNO ${indice+1} - NOTA ${alunoNota} - REPROVADO`)
        }
    })
});

let alunosAprovados = somaReprovados - mediaAlunos.length

console.table(mediaAlunos)
console.log(`NÚMERO DE ALUNOS APROVADOS ${alunosAprovados}`)
console.log(`NÚMERO DE ALUNOS REPROVADOS ${somaReprovados}`)