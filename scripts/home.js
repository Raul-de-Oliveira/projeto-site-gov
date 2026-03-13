if(localStorage.getItem("logado") !== "true"){
window.location.href = "index.html";
}

const sidebar = document.getElementById("sidebar");
const sidebarPerfil = document.getElementById("sidebar-perfil");

// abrir / fechar sidebar navegação
function toggleMenu(){
sidebar.classList.toggle("active");
// fecha a outra sidebar se aberta
if(sidebarPerfil.classList.contains("active")){
sidebarPerfil.classList.remove("active");
}
}

// fechar sidebar navegação
function fecharMenu(){
sidebar.classList.remove("active");
}

// abrir / fechar sidebar perfil
function togglePerfil(){
sidebarPerfil.classList.toggle("active");
// fecha a outra sidebar se aberta
if(sidebar.classList.contains("active")){
sidebar.classList.remove("active");
}
}

// fechar sidebar perfil
function fecharPerfil(){
sidebarPerfil.classList.remove("active");
}

// logout
function logout(){
localStorage.removeItem("logado");
window.location.href = "index.html";
}
