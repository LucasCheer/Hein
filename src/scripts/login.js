const btnSignIn = document.getElementById("sign-in"),
    btnSignUp = document.getElementById("sign-up"),
    formRegister = document.querySelector(".register"),
    formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formLogin.classList.add("heide");
    formRegister.classList.remove("heide");
});

btnSignUp.addEventListener("click", e => {
    formRegister.classList.add("heide");
    formLogin.classList.remove("heide");
});