var login = 'admin';
var pass = 'admin';

function logar() {
    var loginInput = document.getElementById('loginInput').value;
    var passwordInput = document.getElementById('passwordInput').value;

    var nlogado = document.getElementById('n_logado');

    if (loginInput == "" || passwordInput == "") {
    } else if (loginInput == login && passwordInput == pass) {
        alert("Acesso Garantido!\nRedirecionando.\n\nAinda sem pagina de usuario.")
        setTimeout(function () {
            window.location.replace("../index.html");
        }, 1000);
    }
    else {
        nlogado.innerHTML = "Senha incorreta, tente novamente!"
    }
    console.log(passwordInput)
}