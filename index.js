console.log("Bem-vindo ao jogo! Digite o seu número de vitórias e derrotas para calcular seu nível.");
// Primeiro o Herói vai digitiar o valor de vitórias e derrotas que ele teve no jogo.
let vitorias = 200;
let derrotas = 80;
// Após isso, a funçao saldoVitorias deve calcular o saldo de vitórias do jogador.
function saldoVitorias(vitorias, derrotas) {
    return vitorias - derrotas;
}
let saldo = saldoVitorias(vitorias, derrotas)
// Após calcular o saldo de vitórias, o sistema precisa pegar esse valor e comparar-lo com os níveis pré-definidos no jogo.
do {
    if (saldo < 10) {
        console.log("Ferro");
        break;
    } else if (saldo >= 11 && saldo <= 20) {
        console.log("Bronze");
        break;
    } else if (saldo >= 21 && saldo <= 50) {
        console.log("Prata");
        break;
    } else if (saldo >= 51 && saldo <= 80) {
        console.log("Ouro");
        break;
    } else if (saldo >= 81 && saldo <= 90) {
        console.log("Diamante");
        break;
    } else if (saldo >= 91 && saldo <= 100) {
        console.log("Lendário");
        break;
    } else {
        console.log("Imortal");
        break;
    }
} while (true);
// Após isso, o sistema deve mostrar ao jogador o seu nível atual no jogo.