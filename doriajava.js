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

  // Verificar se todos os campos foram preenchidos
  if (nome === "" || email === "" || telefone === "" || servico === "" || mensagem === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Verificar se o nome tem pelo menos 4 caracteres
  if (nome.length < 4) {
    alert("O nome precisa ter pelo menos 4 caracteres!");
    return;
  }

  // Verificar se o telefone tem pelo menos 11 caracteres (padrão brasileiro)
  if (telefone.length < 11) {
    alert("O número de telefone precisa ter pelo menos 11 caracteres!");
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

function formatarTelefone(event) {
  let input = event.target;
  let valor = input.value.replace(/\D/g, ""); // Remove tudo que não for número

  if (valor.length > 11) valor = valor.slice(0, 11); // Limita a 11 dígitos

  // Aplica o formato aos poucos conforme o número é digitado
  if (valor.length <= 10) {
    // Formato: (99) 9999-9999
    valor = valor.replace(/^(\d{0,2})(\d{0,4})(\d{0,4})/, function (_, ddd, parte1, parte2) {
      let result = "";
      if (ddd) {
        result += "(" + ddd;
        if (ddd.length === 2 && (parte1 || parte2)) {
          result += ") ";
        }
      }
      if (parte1) result += parte1;
      if (parte2) result += "-" + parte2;
      return result;
    });
  } else {
    // Formato: (99) 99999-9999
    valor = valor.replace(/^(\d{0,2})(\d{0,5})(\d{0,4})/, function (_, ddd, parte1, parte2) {
      let result = "";
      if (ddd) {
        result += "(" + ddd;
        if (ddd.length === 2 && (parte1 || parte2)) {
          result += ") ";
        }
      }
      if (parte1) result += parte1;
      if (parte2) result += "-" + parte2;
      return result;
    });
  }

  input.value = valor;
}

// EVENTO DO TELEFONE
document.getElementById("tel-form").addEventListener("input", formatarTelefone);

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
