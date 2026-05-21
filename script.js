const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const passoword = document.getElementById("password");
const passowordConfirmation = document.getElementById("passwordConfirmation");

// Evitar o envio do formulário e permitir a validação personalizada
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
})
