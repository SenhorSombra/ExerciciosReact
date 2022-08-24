let nome = window.document.getElementById("nome");
//chame o nome pelo documento e puxe o elemento Id: nome
let email = document.querySelector("#email");
//chame o nome pelo documento e puxe o elemento Id: email
let assunto = document.querySelector("assunto");
//chame o nome pelo documento e puxe o elemento Id: assunto

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if(nome.value.length < 3) {
        txt.innerHTML =  "nome invalido"
        txt.style.color = "red"
    } else {
        txt.innerHTML = "Nome Valido"
        txt.style.color = "green"
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if(email.value.indexOf("@") == -1 || email.Value.indexOf(".") == -1) {
        txtEmail.innerHTML =  "Email invalido"
        txt.style.color = "red"
    } else {
        txtEmail.innerHTML =  "Email Valido"
        txt.style.color = "green"
        emailOk = true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML =  "Texto é muito grande, digite no maximo 100 caracteres"
        txt.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
        txtAssunto.style.display = "none"
        assuntoOk = true
    }

}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true)
    {
        alert("Formulario enviado com sucesso!")
    } else {
        alert("Preencha o formulario corretamente")
    }
}

/*
 * Case Sensitive = reconhece letras maiusculas e minusculas
 * 
 * por tag: getElementBytagname()
 * por ID: getElementById()
 * por nome: getElementByName()
 * por Classe: getElementByClassName()
 * por Selector: querySelector()
 */