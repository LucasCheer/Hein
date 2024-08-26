// Variables

const accordionBtn = document.querySelectorAll(".accordion-btn");
const accordion = document.querySelectorAll(".accordion");

// Funcion para el acordeon de "Preguntas Frecuentes"
const activarInfo = () => {
    accordionBtn.forEach((btn,i) => {
        btn.addEventListener('click', () =>{
            accordion[i].classList.toggle('activate');
        })
    })
}

activarInfo();