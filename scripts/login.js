const form = document.getElementById("login-form");

const email = document.getElementById("email");
const senha = document.getElementById("senha");

const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");

let login_Admin = "admin@123";
let senha_admin = "123";


// remover erro quando começar a digitar
email.addEventListener("input", function(){
    erroEmail.textContent = "";
});

senha.addEventListener("input", function(){
    erroSenha.textContent = "";
});


form.addEventListener("submit", function(e){

    e.preventDefault();

    let valido = true;

    erroEmail.textContent = "";
    erroSenha.textContent = "";

    if(email.value === ""){
        erroEmail.textContent = "Digite seu email";
        valido = false;
    }

    if(senha.value === ""){
        erroSenha.textContent = "Digite sua senha";
        valido = false;
    }

    if(!valido){
        return;
    }

    if(email.value === login_Admin && senha.value === senha_admin){

        localStorage.setItem("logado","true");
        window.location.href = "home.html";

    } else {

        erroSenha.textContent = "Email ou senha incorretos";
        
    }

});