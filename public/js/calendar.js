// Selecciona el contenedor de los días, la fecha actual y los íconos de navegación (anterior y siguiente)
const daysTag = document.querySelector(".days"),
      currentDate = document.querySelector(".current-date"),
      prevNextIcon = document.querySelectorAll(".icons span");

// Obtiene la fecha actual, el año y el mes
let date = new Date(),
    currYear = date.getFullYear(), // Año actual
    currMonth = date.getMonth();   // Mes actual (de 0 a 11)

// Almacena los nombres completos de todos los meses en un array
const months = ["January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December"];

// Función para renderizar (dibujar) el calendario
// Modifica la función renderCalendar para agregar clases condicionales
const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    
    let liTag = "";

    // Días del mes anterior
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Días del mes actual
    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && currMonth === new Date().getMonth() && currYear === new Date().getFullYear() ? "active" : "";
        
        // Condicional para aplicar colores a días específicos (ejemplo: días 5, 10 y 15)
        let isSpecialDay = (i === 5 || i === 10 || i === 15) ? "pastel" : "";

        liTag += `<li class="${isToday} ${isSpecialDay}">${i}</li>`;
    }

    // Días del próximo mes
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    daysTag.innerHTML = liTag;
}
// Llama a la función para renderizar el calendario por primera vez
renderCalendar();

// Agrega un evento de clic a los íconos de navegación (anterior y siguiente)
prevNextIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
        if (icon.id === "prev") {
            // Retrocede un mes
            currMonth--;
            if (currMonth < 0) {
                // Si el mes es menor que 0, retrocede al año anterior y ajusta el mes a diciembre
                currMonth = 11;
                currYear--;
            }
        } else if (icon.id === "next") {
            // Avanza un mes
            currMonth++;
            if (currMonth > 11) {
                // Si el mes es mayor que 11, avanza al año siguiente y ajusta el mes a enero
                currMonth = 0;
                currYear++;
            }
        }

        // Actualiza la fecha actual con el nuevo mes y año
        date = new Date(currYear, currMonth, date.getDate());
        // Llama nuevamente a la función para redibujar el calendario con el mes actualizado
        renderCalendar();
    });
});