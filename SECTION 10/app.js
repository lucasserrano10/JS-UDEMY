const nomeBusca = document.querySelector(".input")
const mensagemErro = document.querySelector("#mensagemErro")
const botaoBuscar = document.querySelector("#botao_buscar")
const titulo = document.querySelector("#titulo")
const ano = document.querySelector("#ano")
const duracao = document.querySelector("#duracao")
const genero = document.querySelector("#genero")
const diretor = document.querySelector("#diretor")
const atores = document.querySelector("#atores")
const sinopse = document.querySelector("#sinopse")
const poster = document.querySelector(".poster")


const apiKey = "147e2b9e";
const imgDefault = "./default_image.png";

async function buscaFilme(nomeBusca){
     const resposta = await fetch(`http://www.omdbapi.com/?t=${nomeBusca}&apikey=${'147e2b9e'}`);
     return resposta.json();
}

botaoBuscar.addEventListener("click", () => {
     limparCampos()
     core();
}) 

nomeBusca.addEventListener("keypress", (e) => {
     if(e.key === "Enter"){
          limparCampos();
          core(); 
     }
})

async function core(){
     try{
          const filme = await buscaFilme(nomeBusca.value)
          validaDados(filme)
          defineValores(filme)
     }catch(erro){
          console.log(erro)
          mensagemErro.textContent = `${erro}`
     }
}

function defineValores(filme){
     titulo.textContent = filme.Title;
     sinopse.textContent = filme.Plot;
     ano.textContent = `Year: ${filme.Year}`;
     diretor.textContent = `director: ${filme.Director}`;
     atores.textContent = `Actors : ${filme.Actors}`
     genero.textContent = `Genre: ${filme.Genre}`
     duracao.textContent = `Run Time: ${filme.Runtime}`
     poster.setAttribute("src", filme.Poster)
}

function limparCampos(){
     titulo.textContent = "";
     sinopse.textContent = "";
     ano.textContent = '';
     diretor.textContent = '';
     atores.textContent = '';
     genero.textContent = '';
     duracao.textContent = '';
     poster.setAttribute("src", imgDefault)
}

function validaDados(filme){
     if(filme.Plot === undefined || filme.Year === undefined || filme.Actors === undefined){
          throw new Error("Filme Não Encontrado !!")
     }
}