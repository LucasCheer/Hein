const btnMethod1 = document.getElementById("method-1"),
    btnMethod2 = document.getElementById("method-2"),
    btnMethod3 = document.getElementById("method-3"),
    btnPay = document.getElementById("pay"),
    formMethod = document.querySelector(".pay-method"),
    formPay = document.querySelector(".pay-login");

btnMethod1.addEventListener("click", e => {
    formMethod.classList.add("heidden");
    formPay.classList.remove("heidden");
});

btnMethod2.addEventListener("click", e => {
    formMethod.classList.add("heidden");
    formPay.classList.remove("heidden");
});

btnMethod3.addEventListener("click", e => {
    formMethod.classList.add("heidden");
    formPay.classList.remove("heidden");
});

btnPay.addEventListener("click", e => {
    formMethod.classList.remove("heidden");
    formPay.classList.add("heidden");
});