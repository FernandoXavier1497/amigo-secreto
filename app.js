let listaAmigos = [];

function adicionarAmigo() {
    let campoInput = document.getElementById("amigo");
    let nomeDoAmigo = campoInput.value.trim();

    if (nomeDoAmigo === "") {
        alert("Por favor, digite um nome válido");
        return;
    }

    if (listaAmigos.includes(nomeDoAmigo)) {
        alert("Esse nome já foi incluso");
        return;
    }

    listaAmigos.push(nomeDoAmigo);
    campoInput.value = "";
    mostraLista();
}

function mostraLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let nomeDoAmigo = listaAmigos[i];
        let itemDaLista = document.createElement("li");

        itemDaLista.textContent = nomeDoAmigo;

        lista.appendChild(itemDaLista);
    }
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortearAmigo() {
    if (listaAmigos.length < 3) {
        alert("Adicione pelo menos 3 amigos para sortear!");
        return;
    }

    let listaEmbaralhada = [...listaAmigos];

    embaralhar(listaEmbaralhada);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let amigoSecreto = listaEmbaralhada[(i + 1) % listaEmbaralhada.length];
        resultado.innerHTML += `<li>${listaAmigos[i]} -> ${amigoSecreto}</li>`;
    }
}