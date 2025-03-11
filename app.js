// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//Creación de variables globales

let amigos = []

//Funcion para agregar amigos, invocada al pulsar el boton Añadir en la pagina
//con el valor introducido en la casilla de texto de la pagina
//para despues ser introducidos como una lista en la pagina
function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    //Alertar al introducir un valor vacio
    if (nombre == ''){
        alert('Por favor, inserte un nombre.');
    }
    //Agregar un elemento a la lista, limpiar el input y agregar el elemento a la lista de la pagina
    else{
        amigos.push(nombre);
        document.getElementById('amigo').value = '';
        actualizarLista();
    }
    //Imprimir los elementos de la lista en la consola usando la funcion ...
    console.log(...amigos)
}

//Funcion para crear y agregar elementos <li> en la lista del index con id listaAmigos utilizando los
//elementos de la lista amigos
function actualizarLista(){
    //Obtener la lista del index
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    //Recorrer el array amigos y agregar cada elemento como elemento <li> a la lista del index
    for (let i=0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//Funcion para sortear el amigo secreto
//escogiendo un elemento de forma pseudo-aleatoria de la lista
function sortearAmigo() {
    //Error en caso de lista vacia, se elimina el texto anterior en caso de que ya se haya sorteado 
    //anteriormente y se utiliza un timeout para que la alerta llegue despues que se vacie el texto
    if (amigos.length === 0 ) {
        let vaciarLista = document.getElementById('resultado');
        vaciarLista.innerHTML = "";
        setTimeout(() => {
        alert ('Error, Ṽ͇͔͕̻Ơ̷̦̗̻̪͕͕I̸̙͖̤͊͐́͝D͎̹̖͕̲̐̈́̓͘͝ no puede ser su amigo secreto, introduzca al menos un nombre.');
    }, 100);
    }
    //Crear un indice aleatorio para escoger el amigo secreto
    //y mostrarlo como texto en la pagina
    //ademas de limpiar la lista anterior de amigos
    else{
        let randy = Math.floor(Math.random()*amigos.length);
        let amigoSecreto = document.getElementById('resultado');
        let lista = document.getElementById('listaAmigos');
        lista.innerHTML = "";
        amigoSecreto.innerHTML = `El amigo secreto sorteado es: ${amigos[randy]}`;
        amigos = [];
    }
}