const listaFilmes = document.querySelector("#listaFilmes")

const filmes = [
    {nome: "Toy Story", genero: "Infantil"},
    {nome: "Até que a sorte nos separe", genero: "Comédia"},
    {nome: "US", genero: "Terror"},
    {nome: "Corra !", genero: "Suspense"},
    {nome: "Arremessando alto", genero: "Suspense"}
]

function criaElementosUi(){
    let aux = ""
    filmes.forEach((filme) => {
        aux += `<li> Nome: ${filme.nome} Gênero: ${filme.genero}`
    })
    listaFilmes.innerHTML = aux;
}

async function funcaoAsync(){
    try{
        const laland =  await adicionaFilme({nome: 'laland', genero: 'Ação'})
        console.log(laland)
        await adicionaFilme({nome: 'Velozes e Furiosos 1', genero: 'Ação'})
        await adicionaFilme({nome: 'Velozes e Furiosos 2', genero: 'Ação'})
        await adicionaFilme({nome: 'Velozes e Furiosos 3', genero: 'Ação'})
        exibeFilmes()
    }catch(erro){
        console.error(erro)
    }

}

funcaoAsync()

function adicionaFilme(filme){
    const promise = (resolve,reject) => {
        setTimeout(() => {
            if(filme.nome === ""){
                reject(new Error("Nome Inválido!!"))
            }
            filmes.push(filme)
            resolve(filme)
        }, 1000)
        console.log(filmes)
    }
    return new Promise(promise)
}

function exibeFilmes(){
    setTimeout(criaElementosUi, 2000);
}
