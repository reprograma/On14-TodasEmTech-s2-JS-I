//Desafio semana 2
//Alerta de boas vindas
alert("Seja bem-vindo ao meu site");

//Aciona alertas de soma ou multiplicação
var primeiroNumero = document.querySelector('#primeiro-numero');
var segundoNumero = document.querySelector('#segundo-numero');


function somar() {
    let resultado = primeiroNumero.valueAsNumber + segundoNumero.valueAsNumber;
    alert(resultado);
}

function multiplicar() {
    let resultado = primeiroNumero.valueAsNumber * segundoNumero.valueAsNumber;
    alert(resultado);
}



//Lista de compra atualizada após revisão

var demonstraLista = document.querySelector('#lista-completa');
var itemNovo = document.querySelector('#item-novo');
var listaCompras = [];

function adicionarItem() {
    listaCompras.push(itemNovo.value);
    demonstraLista.textContent = listaCompras;
    alert("Foi adicionado " + itemNovo.value + " a sua lista de compras");
}

function removerItem() {
    listaCompras.pop();
    demonstraLista.textContent = listaCompras;
}

function removerPorNome() {
    var itemDesejado = prompt("Escreva o nome do item conforme está na lista:");
    var indexDoItem = listaCompras.indexOf(itemDesejado);
    listaCompras.splice(indexDoItem,1);
    demonstraLista.textContent = listaCompras;
}
