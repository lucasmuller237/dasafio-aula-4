function obterNotas() {
    let nota1 = parseFloat(prompt("Digite a primeira nota de 1 a 10:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota 1 a 10:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota 1 a 10:"));
    
    return [nota1, nota2, nota3];
  }
  
  function calcularMedia(notas) {
    let soma = notas[0] + notas[1] + notas[2];
    let media = soma / 3;
    return media;
  }
  
  function verificarAprovacao(media) {
    if (media >= 6) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  
  function principal() {
    let notas = obterNotas();
    let media = calcularMedia(notas);
    let resultado = verificarAprovacao(media);
    
    console.log("Notas: " + notas);
    console.log("Média: " + media.toFixed(2));
    console.log("Resultado: " + resultado);
    
    alert("Média: " + media.toFixed(2) + "\nResultado: " + resultado);
  }
  
  principal();
