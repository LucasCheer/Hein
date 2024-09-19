// Selecciona el contenedor de los días, la fecha actual y los íconos de navegación (anterior y siguiente)
const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// Obtiene la fecha actual, el año y el mes
let date = new Date(),
    currYear = date.getFullYear(), // Año actual
    currMonth = date.getMonth(); // Mes actual (de 0 a 11)

// Almacena los nombres completos de todos los meses en un array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

// Función para renderizar (dibujar) el calendario
const renderCalendar = () => {
    // Obtiene el primer día del mes actual (domingo = 0, lunes = 1, etc.)
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
        // Obtiene el último día del mes actual
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
        // Obtiene el día de la semana del último día del mes actual
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
        // Obtiene el último día del mes anterior
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag = ""; // Variable para almacenar los elementos de la lista (días)

    // Crea los días del mes anterior que se muestran como "inactivos"
    for (let i = firstDayofMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    // Crea los días del mes actual
    for (let i = 1; i <= lastDateofMonth; i++) {
        // Agrega la clase "active" al día actual si coincide con la fecha de hoy
        let isToday =
            i === date.getDate() &&
                currMonth === new Date().getMonth() &&
                currYear === new Date().getFullYear()
                ? "active"
                : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    // Crea los días del próximo mes que se muestran como "inactivos"
    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    // Muestra el mes y el año actual en el elemento de la fecha
    currentDate.innerText = `${months[currMonth]} ${currYear}`;
    // Inserta todos los elementos li en el contenedor de días
    daysTag.innerHTML = liTag;
};

// Llama a la función para renderizar el calendario por primera vez
renderCalendar();

// Agrega un evento de clic a los íconos de navegación (anterior y siguiente)
prevNextIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
        // Si se hace clic en el ícono "anterior", disminuye el mes, de lo contrario lo aumenta
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        // Si el mes es menor que 0 (diciembre del año anterior) o mayor que 11 (enero del siguiente año)
        if (currMonth < 0 || currMonth > 11) {
            // Crea una nueva fecha con el año y mes ajustado
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // Actualiza el año con el nuevo año
            currMonth = date.getMonth(); // Actualiza el mes con el nuevo mes
        } else {
            date = new Date(); // Usa la fecha actual
        }

        // Llama nuevamente a la función para redibujar el calendario con el mes actualizado
        renderCalendar();
    });
});
