const form = document.querySelector(".form-menu");

form.addEventListener("submit", function (event) {
  // EVITAR QUE A PAGINA RECARREGUE
  event.preventDefault();

  // VALUE TRIM REMOVER OS ESPAÇOS DOS TEXTOS
  const nome = document.getElementById("nome-form").value.trim();
  const email = document.getElementById("email-form").value.trim();
  const telefone = document.getElementById("tel-form").value.trim();
  const servico = document.getElementById("servico-form").value;
  const mensagem = document.getElementById("mensagem-form").value.trim();

  if (
    nome === "" ||
    email === "" ||
    telefone === "" ||
    servico === "" ||
    mensagem === ""
  ) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  //VARIAVEIS ENTRE ${}"TEMPLATE STRING", JUNTA O TEXTO COM VALORES QUE O USUARIO DIGITOU NO FORMULARIO
  // N= QUEBRA DE LINHA
  const textoMensagem = `Olá, gostaria de solicitar um orçamento.\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nServiço: ${servico}\nMensagem: ${mensagem}`;

  // TRANFORMA OS ESPAÇOS E AS QUEBRAS DE LINHAS EM "CODIGOS" URL
  // "NOME: ANDREI" → "NOME%3A%20ANDREI"
  const mensagemComUrl = encodeURIComponent(textoMensagem);

  // NUMERO QUE O LEAD VAI SER DIRECIONADO
  const numeroWhatsApp = "+5571992958233";

  // LINK PARA O WPP
  const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemComUrl}`;

  // WPP COM MENSAGENS JÁ PREENCHIDAS DO FORMULARIO
  window.open(linkWhatsApp, "_blank");
});

// EVENTO DO TELEFONE
let telefone = document.getElementById("tel-form");
telefone.value = "";

telefone.addEventListener("input", (event) => {
  var valorAtual = event.target.value;
  valorAtual = valorAtual.replace(/\D/g, ""); // apaga se oque foi digitado nao foi um numero
  valorAtual = valorAtual.replace(/^(\d{2})(\d)/, "($1) $2"); // pega os 2 primeiros digitos do DDD e o que vem depois
  valorAtual = valorAtual.replace(/(\d{5})(\d)/, "$1-$2"); // pega os 5 primeiros numeros depois do DDD e coloca um "-" entre os 5 e o primeiro numero que vem depois

  event.target.value = valorAtual; // Atualiza o valor do campo com a máscara */
});

// MODO DARK CLASSES E ID ALTERADAS
let botao = document.getElementById("botao");
let body = document.querySelector("body");
let divisoria = document.querySelector(".celular-div");
let header = document.querySelector("header");

// UM CLIQUE VAI MUDA-LAS
botao.addEventListener("click", () => {
  botao.classList.toggle("dark");
  body.classList.toggle("dark");
  header.classList.toggle("dark");
  divisoria.classList.toggle("dark");
});
