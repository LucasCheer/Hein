// Variables
const cards = document.querySelectorAll('.card-diary');

cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Elimina la clase 'selected' de todas las tarjetas
        cards.forEach((c) => c.classList.remove('selected'));
        // Añade la clase 'selected' solo a la tarjeta clickeada
        card.classList.add('selected');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById('textarea');
    
    fetch("http://localhost:3000/registros/8")
    .then(response => response.json())
    .then(data => {
        // Asigna la descripción al textarea
        textArea.value = data.Descripcion;

        // Obtén el valor del IdEmocion y conviértelo a string
        const IdEmocionValue = data.IdEmocion.toString();
        console.log(IdEmocionValue)

        // Compara el valor de IdEmocion con el value de cada tarjeta
        cards.forEach(card => {
            const cardValue = card.getAttribute('data-value'); // Obtén el valor de 'data-value'
            console.log(cardValue); // Debería mostrar el valor correcto
            if (cardValue === IdEmocionValue) {
                card.classList.add('selected'); // Añade la clase 'selected' si coinciden
            }
        });
    })
    .catch(error => {
        console.error(error);
    });
});
