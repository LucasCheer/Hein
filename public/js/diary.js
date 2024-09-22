// Variables
const cards = document.querySelectorAll('.card-diary');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        cards.forEach((c) => c.classList.remove('selected')
        )
        card.classList.toggle('selected');
    })
})