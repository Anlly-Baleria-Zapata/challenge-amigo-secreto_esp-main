// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value.trim();
    let inputAmigo = document.getElementById("amigo");

    if(amigo === ""){
        alert("no puedes agregar un amigo vacio");
        return;
    }

    if(/\d/.test(amigo)){
        alert("no puedes agregar un amigo que contenga numeros");
        inputAmigo.value = "";
        return;
    }

    if(amigos.includes(amigo)){
        alert("amigo ya agregado anteriormente");
        inputAmigo.value = "";
    } else {
        amigos.push(amigo);
        listaAmigos();
        inputAmigo.value = "";
    }
}

function listaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    amigos.forEach((amigos) => {
        elementoLista = document.createElement("li");
        elementoLista.textContent = amigos;
        listaAmigos.appendChild(elementoLista);

    });
}

function sortearAmigo(){

    if (amigos.length === 0){
        alert("no hay amiogos en la lista para sortear");
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let amigoSorteadoIndex = [amigoSorteado];

    alert(`El amigo sorteado es: ${amigoSorteadoIndex}`);
}




