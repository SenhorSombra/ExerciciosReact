let nome = window.document.getElementById("nome");
//chame o nome pelo documento e puxe o elemento Id: nome
let email = document.querySelector("#email");
//chame o nome pelo documento e puxe o elemento Id: email
let assunto = document.querySelector("#assunto");
//chame o nome pelo documento e puxe o elemento Id: assunto
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa= document.querySelector("#mapa")


nome.style.width = "100%";
email.style.width = "100%";

function validaNome() {
    let txtNome = document.querySelector("#txtNome");
    if(nome.value.length < 3) {
        txtNome.innerHTML =  "nome invalido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Valido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail");
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML =  "Email invalido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML =  "Email Valido"
        txtEmail.style.color = "green"
        emailOk = true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto");
    
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML =  "Texto é muito grande, digite no maximo 100 caracteres"
        txtAssunto.style.color = "red"
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
        alert("Preencha o formulario corretamente antes de enviar")
    }
}

function mapaZoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"

}

function mapaNormal() {
    
    mapa.style.width = "400px"
    mapa.style.height = "200px"

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

//location

let espaco = document.getElementById("espaco");

function getSpace () {
    let url = location.href
    espaco.innerHTML = `URL: ${url}`
}

function darkTheme() {
    document.body.classList.toggle('dark-theme')
}








