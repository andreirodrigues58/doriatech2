const sidebar = document.getElementById("menu-sidebar");
const btnMenu = document.getElementById("menu-btn");
const navbar = document.getElementById("navegacao");
const navUl = document.getElementById("menu-ul");
const btnFechar = document.getElementById("fechar-btn");

function abrirMenu() {
  navUl.style.display = "flex";
  sidebar.style.display = "flex";
}
btnFechar.addEventListener("click", () => {
  sidebar.style.display = "none";
});

function ajustarLayout() {
  //caso o tamanho da tela seja menor que 768
  if (window.innerWidth <= 768) {
    navUl.style.display = "flex";
    sidebar.appendChild(navUl); // adiciona a lista dentro da sidebar
    btnMenu.addEventListener("click", abrirMenu);
  } else {
    btnMenu.removeEventListener("click", abrirMenu);
    sidebar.style.display = "none";
    navbar.appendChild(navUl);
  }
}

window.addEventListener("resize", ajustarLayout);
// chama a funcao caso o usuario de reload
ajustarLayout();
