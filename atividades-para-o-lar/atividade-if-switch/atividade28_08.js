// Receba uma letra pelo prompt e verifique se é uma vogal ou consoante. Se for vogal, imprime SIM,
// se for consoante imprima Não

const promptTestando = prompt("Digite uma letra :");

if (
  promptTestando.toLowerCase() === "a" ||
  promptTestando.toLowerCase() === "e" ||
  promptTestando.toLowerCase() === "i" ||
  promptTestando.toLowerCase() === "o" ||
  promptTestando.toLowerCase() === "u"
) {
  alert(promptTestando + " é uma vogal.");
} else {
  alert(promptTestando + " é uma consoante");
}

// TENTE EM CASA
// Altere os exercicios para SWITCH
// NOTA: Tentei colocar para receber letras maiusculas, porém não rodou com promptSwitch.toLowerCase em nenhum local, nem com criação de outra variavel.

const promptSwitch = prompt("Digite uma letra  :");

switch (promptSwitch) {
  case "a":
    alert(promptSwitch + " é uma vogal");
    break;
  case "e":
    alert(promptSwitch + " é uma vogal");
    break;
  case "i":
    alert(promptSwitch + " é uma vogal");
  case "o":
    alert(promptSwitch + " é uma vogal");
    break;
  case "u":
    alert(promptSwitch + " é uma vogal");
  default:
    alert(promptSwitch + "é uma Consoante");
}

// Exercicio criado com switch usando break
var a = "23 . 04 . 1992";
var b = "28 . 08 . 2021";
var c = "25.12.2021";

var pergunta = prompt(
  "qual informação você deseja ?\n [a] meu aniversario \n [b] data de hoje\n [c] data do natal"
);

switch (pergunta) {
  case "a":
    alert(a);
    break;
  case "b":
    alert(b);
    break;
  case "c":
    alert(c);
}
