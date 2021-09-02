// Exercicios Extra COM funcção
// Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor

function analisarIdadeDia(idadeDia) {
  const data = new Date();
  const dia = data.getDate().toString().padStart(2, "0");
  if (idadeDia <= dia) {
    return 0;
  } else {
    return 1;
  }
}

function analisarIdadeMes(idadeMes) {
  const data = new Date();
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  if (idadeMes <= mes) {
    return 0;
  } else {
    return 1;
  }
}

function analisarSeCompletouAno(idadeDia, idadeMes) {
  const fezAniversario =
    analisarIdadeMes(idadeMes) + analisarIdadeDia(idadeDia);
  if (fezAniversario === 0) {
    return 1;
  } else {
    return 0;
  }
}

function analisarIdade(idadeDia, idadeMes, idadeAno) {
  const data = new Date();
  const ano = data.getFullYear();
  const idade = ano - idadeAno;

  if (idade >= 18) {
    if (analisarSeCompletouAno(idadeDia, idadeMes) == 1) {
      return alert("Você é maior de idade!");
    }
    return alert("Você é menor de idade");
  } else {
    return alert("Você é menor de idade.");
  }
}

function inicio() {
  const idadeDia = Number(
    prompt("Digite o dia do nascimento :\n obs: somente o dia  ")
  );
  const idadeMes = Number(
    prompt(
      "Digite o mes do nascimento :\n obs: somente o mês em numero com 2 digitos "
    )
  );
  const idadeAno = Number(
    prompt("Digite o ano do nascimento :\n obs: somente o ano com 4 digitos  ")
  );
  analisarIdade(idadeDia, idadeMes, idadeAno);
}
