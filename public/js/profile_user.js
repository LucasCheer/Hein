
const overlay = document.getElementById('overlay');
const fileInput = document.getElementById('file-input');
const profileImage = document.getElementById('profileImage');

// Al hacer clic en la superposición, activar el input de archivo
overlay.addEventListener('click', () => {
    fileInput.click();
});

// Al seleccionar un archivo, actualizar la imagen de perfil
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Reemplazar el contenido del contenedor de perfil con la nueva imagen
            profileImage.innerHTML = '';
            const img = document.createElement('img');
            img.src = e.target.result;
            profileImage.appendChild(img);
        }
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecciona un archivo de imagen válido.');
    }
});

const editButton = document.getElementById('editButton');
const cancelButton = document.getElementById('cancelButton');
const inputs = document.querySelectorAll('.form-group input');
const displayUsername = document.getElementById('displayUsername');
const displayEmail = document.getElementById('displayEmail');
const inputUsername = document.getElementById('username');
const inputEmail = document.getElementById('email');

// Guardar valores originales
let originalValues = {};

editButton.addEventListener('click', () => {
    if (editButton.textContent === 'Editar perfil') {
        // Almacenar valores originales y habilitar inputs
        inputs.forEach(input => {
            originalValues[input.id] = input.value;
            input.disabled = false;
        });

        // Cambiar el texto del botón
        editButton.textContent = 'Guardar cambios';
        editButton.classList.add('save');
        
        // Mostrar el botón Cancelar
        cancelButton.style.display = 'inline-block';
        
    } else {
        // Validar campos antes de guardar
        if (validateFields()) {
            // Guardar cambios y actualizar los elementos <p>
            inputs.forEach(input => {
                input.disabled = true;
            });
            displayUsername.textContent = inputUsername.value;
            displayEmail.textContent = inputEmail.value;

            // Cambiar el texto del botón
            editButton.textContent = 'Editar perfil';
            editButton.classList.remove('save');

            // Ocultar el botón Cancelar
            cancelButton.style.display = 'none';
        }
    }
});

cancelButton.addEventListener('click', () => {
    // Restaurar los valores originales
    inputs.forEach(input => {
        input.value = originalValues[input.id];
        input.disabled = true;
    });

    // Cambiar el texto del botón
    editButton.textContent = 'Editar perfil';
    editButton.classList.remove('save');

    // Ocultar el botón Cancelar
    cancelButton.style.display = 'none';
});

// Función de validación de campos
function validateFields() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');

    let isValid = true;
    let message = '';

    // Validar nombre de usuario
    if (username.value.trim() === '' || username.value.length < 1 || username.value.length > 20) {
        isValid = false;
        message += '• Campo nombre de usuario no es válido. Debe tener entre 1 y 20 caracteres.\n';
    }

    // Validar contraseña
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password.value)) {
        isValid = false;
        message += '• Campo contraseña no es válido. Debe tener al menos 8 caracteres, con al menos una letra y un número.\n';
    }

    // Validar nombre y apellido
    const fullnamePattern = /^[A-Za-zÀ-ÿ\s]+$/;
    if (!fullnamePattern.test(fullname.value) || fullname.value.trim() === '') {
        isValid = false;
        message += '• Campo nombre y apellido no es válido. Solo se permiten letras y espacios.\n';
    }

    // Validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value) || email.value.trim() === '') {
        isValid = false;
        message += '• Campo email no es válido. Debe ser un correo electrónico correcto.\n';
    }

    // Validar número de teléfono
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
    if (!phonePattern.test(phone.value)) {
        isValid = false;
        message += '• Campo número de teléfono no es válido. Debe estar en el formato 123-456-7890.\n';
    }

    // Alertas y mensaje de éxito
    if (isValid) {
        alert('Los cambios se hicieron con éxito.');
    } else {
        alert(message.trim()); // Usar .trim() para eliminar espacios innecesarios
    }

    return isValid; // Retornar si es válido o no
}
