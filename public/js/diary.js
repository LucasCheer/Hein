// Variables
const cards = document.querySelectorAll('.card-diary');
const buttonAddResgister = document.getElementById('button-send')

cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Elimina la clase 'selected' de todas las tarjetas
        cards.forEach((c) => c.classList.remove('selected'));
        // Añade la clase 'selected' solo a la tarjeta clickeada
        card.classList.add('selected');
    });
});

//Cargar el contenido de un dia en especifico 
// document.addEventListener("DOMContentLoaded", () => {
//     const textArea = document.getElementById('textarea');
    
//     fetch("http://localhost:3000/registros")
//     .then(response => response.json())
//     .then(data => {
//         // Asigna la descripción al textarea
//         textArea.value = data.Descripcion;

//         // Obtén el valor del IdEmocion y conviértelo a string
//         const IdEmocionValue = data.IdEmocion.toString();
//         console.log(IdEmocionValue)

//         // Compara el valor de IdEmocion con el value de cada tarjeta
//         cards.forEach(card => {
//             const cardValue = card.getAttribute('data-value'); // Obtén el valor de 'data-value'
//             console.log(cardValue); // Debería mostrar el valor correcto
//             if (cardValue === IdEmocionValue) {
//                 card.classList.add('selected'); // Añade la clase 'selected' si coinciden
//             }
//         });
//     })
//     .catch(error => {
//         console.error(error);
//     });
// });

//Enviar un nuevo registro de emocion

buttonAddResgister.addEventListener('click', () => {
    const textArea = document.getElementById('textarea').value; // Obtiene el texto del textarea
    let cardSelected = null; // Variable para almacenar la carta seleccionada
    let fechaDeIngreso = new Date();
    console.log(fechaDeIngreso)

    // Iteramos sobre cada carta para encontrar la que está seleccionada
    cards.forEach(card => {
        // Si la carta tiene la clase 'selected' o un atributo específico (puedes manejarlo como prefieras)
        if (card.classList.contains('selected')) {
            // Obtenemos el valor de 'data-value' de la carta seleccionada
            cardSelected = card.getAttribute('data-value');
        }
    });

    // Verificamos si hay una carta seleccionada antes de proceder
    if (cardSelected) {
        fetch('http://localhost:3000/registros', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                Descripcion: textArea, // Texto del textarea
                IdEmocion: cardSelected, // ID de la carta
                IdUsuario: 5,
                FechaIngreso: fechaDeIngreso,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Registro exitoso:', data);
        })
        .catch(error => {
            console.error('Error al registrar:', error);
        });
    } else {
        console.error('No hay ninguna carta seleccionada');
    }
});
