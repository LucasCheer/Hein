// Variables
const cards = document.querySelectorAll('.card-diary');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        cards.forEach((c) => c.classList.remove('selected')
        )
        card.classList.toggle('selected');
    })
})

document.addEventListener("DOMContentLoaded", (getInfo) => {

    const textArea = document.getElementById('textarea');
    const emotionNum = document.getElementById('password');
    
    fetch("http://localhost:3000/registros/3")
    .then(response => response.json())
    .then(data => {
        textArea.value = `${data.Descripcion}`
    })
    .catch(error => {
        console.error(error);
    });
  });