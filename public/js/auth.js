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
            });

            const data = await response.json();

            if (response.ok) {
                spanLogin.textContent = "Inicio de sesión exitoso!";
                window.location.href = "diary.html"; 
            } else {
        
                spanLogin.textContent = data.message || "Error en el inicio de sesión";
            }
        } catch (error) {
            spanLogin.textContent = "Error de red. Por favor intenta más tarde.";
        }
    });

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault(); 

        const username = document.getElementById("username-register").value;
        const email = document.getElementById("email-register").value;
        const password = document.getElementById("password-register").value;
        const confirmPassword = document.getElementById("password-register").value;

        if (password !== confirmPassword) {
            spanRegister.textContent = "Las contraseñas no coinciden.";
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ NombreUsuario: username, Email: email, Contrasenia: password }),
            });

            const data = await response.json();

            if (response.ok) {
                spanRegister.textContent = "Registro exitoso! Puedes iniciar sesión ahora.";
            } else {
                spanRegister.textContent = data.message || "Error en el registro";
            }
        } catch (error) {
            spanRegister.textContent = "Error de red. Por favor intenta más tarde.";
        }
    });
});