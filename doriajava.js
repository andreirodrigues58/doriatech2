const form = document.querySelector('.form-menu');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome-form").value.trim();
    const email = document.getElementById("email-form").value.trim();
    const telefone = document.getElementById("tel-form").value.trim();
    const servico = document.getElementById("servico-form").value;
    const mensagem = document.getElementById("mensagem-form").value.trim();

    if (nome === "" || email === "" || telefone === "" || servico === "" || mensagem === "") {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const textoMensagem = `Olá, gostaria de solicitar um orçamento.\n\nNome: ${nome}\nE-mail: ${email}\nTelefone: ${telefone}\nServiço: ${servico}\nMensagem: ${mensagem}`;

    const mensagemComUrl = encodeURIComponent(textoMensagem);

    // Número de WhatsApp para onde será enviada a mensagem
    const numeroWhatsApp = "+5571992958233"; // Certifique-se de que o número está no formato correto

    // Monta o link completo para o WhatsApp
    const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemComUrl}`;

    // Abre o WhatsApp com a mensagem pré-preenchida
    window.open(linkWhatsApp, "_blank");
});

function formatarTelefone(event) {
    var input = event.target;
    var valor = input.value.replace(/\D/g, ''); // Remove tudo o que não é número

    // Aplica a máscara para número de telefone (10 ou 11 dígitos)
    if (valor.length <= 10) {
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3'); // Máscara para 10 dígitos
    } else {
        valor = valor.replace(/^(\d{2})(\d{6})(\d{4})$/, '($1) $2-$3'); // Máscara para 11 dígitos
    }

    input.value = valor; // Atualiza o valor do campo com a máscara
}

// Adiciona o evento para o campo de telefone
document.getElementById('tel-form').addEventListener('input', formatarTelefone);









let botao = document.getElementById('botao')
let body = document.querySelector('body')
let divisoria = document.querySelector('.celular-div')
let header = document.querySelector('header')


botao.addEventListener('click', ()=>{

    botao.classList.toggle('dark')
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    divisoria.classList.toggle('dark')
    nav.classList.toggle('dark')
})

