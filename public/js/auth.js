document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const spanLogin = document.getElementById("span-login");
    const spanRegister = document.getElementById("span-register");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault(); 

        const username = document.getElementById("username-login").value;
        const password = document.getElementById("password-login").value;

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ NombreUsuario: username, Contrasenia: password }),
                credentials: 'include'
            });

            const data = await response.json();

            if (response.ok) {
                spanLogin.textContent = "Inicio de sesión exitoso! Ingresando..."
                spanLogin.style.color = 'green';
                setTimeout(() => {
                    window.location.href = "../index2.html"
                }, 2000)
            } else {
        
                spanLogin.textContent = data.message || "Error en el inicio de sesión";
                spanLogin.style.color = 'red';
            }
        } catch (error) {
            spanLogin.textContent = "Error de red. Por favor intenta más tarde.";
            spanLogin.style.color = 'red';

        }
    });

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault(); 

        const username = document.getElementById("username-register").value;
        const name = document.getElementById("name-register").value;
        const email = document.getElementById("email-register").value;
        const password = document.getElementById("password-register").value;
        const confirmPassword = document.getElementById("confirmpassword-register").value;

        if (password !== confirmPassword) {
            spanRegister.textContent = "Las contraseñas no coinciden.";
            spanRegister.style.color = 'red'
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ NombreUsuario: username, Nombre: name, Email: email, Contrasenia: password }),
            });

            const data = await response.json();

            if (response.ok) {
                spanRegister.textContent = "Registro exitoso! Puedes iniciar sesión ahora.";
                spanRegister.style.color = 'green'
            } else {
                spanRegister.textContent = data.message || "Error en el registro";
                spanRegister.style.color = 'red'
            }
        } catch (error) {
            spanRegister.textContent = "Error de red. Por favor intenta más tarde.";
            spanRegister.style.color = 'red'
        }
    });
});