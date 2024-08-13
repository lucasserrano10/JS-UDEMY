/*
const listaPosts = document.getElementById('listaPosts')
const httpRequest = new XMLHttpRequest()
httpRequest.open("GET","https://jsonplaceholder.typicode.com/posts")
httpRequest.send();
console.log(httpRequest)

let posts;

httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState === 4 && httpRequest.status === 200){
        posts = JSON.parse(httpRequest.response)
        exibePosts()
    }
}

const listaPosts = document.getElementById('listaPosts')
let posts;

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
        posts = json
    })
    .then(() => {
        exibePosts()
    })

function exibePosts(){
    setTimeout(()=>{
        let saida = ''
        posts.forEach((post) => {
            saida += `<li>${post.title}</li>
                    <li>${post.body}</li> <hr></hr>`
        });
    listaPosts.innerHTML = saida
    },3000)
}


const listaPosts = document.querySelector('#listaPosts')
let posts;

fetch('https://jsonplaceholder.typicode.com/posts', {
        method:"POST",
        body: JSON.stringify({
            title: "new post",
            body: "corpo do novo post",
            userId: 5,
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => {
    posts = json
})
.then(() => {
    console.log(posts)
})



const listaPosts = document.querySelector('#listaPosts')
let posts;
// SE FOSSE O PATCH PODERIAMOS COLOCAR SÓ O TITULO FOR EXAMPLE;
fetch('https://jsonplaceholder.typicode.com/posts/2', {
        method:"PUT",
        body: JSON.stringify({
            title: "new post",
            body: "corpo do novo post - UPDATE",
            userId: 5,
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => {
    posts = json
})
.then(() => {
    console.log(posts)
})


const listaPosts = document.querySelector('#listaPosts')
let posts;
// SE FOSSE O PATCH PODERIAMOS COLOCAR SÓ O TITULO FOR EXAMPLE;
fetch('https://jsonplaceholder.typicode.com/posts/2', {
        method:"PATCH",
        body: JSON.stringify({
            title: "NOVO TÍTULO, PATCH",
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => {
    posts = json
})
.then(() => {
    console.log(posts)
})
*/

const listaPosts = document.querySelector('#listaPosts')
let posts;

fetch('https://jsonplaceholder.typicode.com/posts/2', {
        method:"DELETE",
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    },
})
.then((response) => response.json())
.then((json) => {
    posts = json
})
.then(() => {
    console.log(posts)
})