// Importaciones

import { cardAccordion } from './components.js';

// Variables

const accordionContainer = document.getElementById('accordion-container');

//Objeto con las preguntas frecuentes

const questionsFreq = {
    "question1" : {
        "title": "¿Que es HEIN?",
        "info":"HEIN fue fundada en 2024 por un grupo de amigos, nuestra misión es ayudar a las personas a tomar conciencia de la importancia de la gestión emocional, brindándoles las herramientas necesarias para lograrlo."
    }
    ,
    "question2" : {
        "title": "¿Cómo me suscribo a HEIN?",
        "info":"Visita nuestro sitio web: Navega a Hein.com y busca la opción \"Suscribirse\" en la parte superior derecha o en el menú principal.<br><br>Crea una cuenta: Si aún no tienes una cuenta, selecciona \"Crear cuenta\" y completa el formulario con tus datos personales. Asegúrate de usar un correo electrónico válido."
    }
    ,
    "question3" : {
        "title": "¿Cuál es el precio de la suscripción?",
        "info":"Elige un plan de suscripción: Explora nuestras opciones de suscripción y selecciona el plan que mejor se ajuste a tus necesidades.<br><br>Introduce los detalles de pago: Completa el proceso ingresando los detalles de tu tarjeta de crédito, débito, o cualquier otro método de pago disponible.<br><br>Confirma tu suscripción: Revisa los detalles de tu suscripción y haz clic en \"Confirmar\" para finalizar el proceso."
    }
    ,
    "question4" : {
        "title": "¿Cómo me contacto con Soporte?",
        "info":"Correo electrónico: Envía un correo a soporte@hein.com con una descripción detallada de tu problema o pregunta. Nuestro equipo te responderá en un plazo de 24 a 48 horas.<br><br>Formulario de contacto: Visita nuestra página de Contacto y completa el formulario con tus datos y el motivo de tu consulta. Nos pondremos en contacto contigo lo antes posible.<br><br>Teléfono: Llama al número de soporte [15-4658-1254] para hablar directamente con un representante. El horario de atención es de lunes a viernes, de 9:00 a.m. a 6:00 p.m. (GTM-2)."
    }
    ,
    "question5" : {
        "title": "¿Mis datos están protegidos?",
        "info":"Sí, en \"Hein\" tomamos muy en serio la seguridad y protección de tus datos. Implementamos varias medidas para garantizar que tu información personal esté segura.<br><br>Cifrado de datos: Todos los datos sensibles se cifran utilizando tecnología avanzada de cifrado SSL (Secure Socket Layer) para protegerlos durante la transmisión.<br><br>Política de privacidad: Cumplimos con todas las leyes y regulaciones aplicables en materia de protección de datos, como el GDPR (Reglamento General de Protección de Datos) y otras normativas locales. Puedes consultar nuestra Política de Privacidad para obtener más detalles.<br><br>Acceso restringido: Solo el personal autorizado tiene acceso a tu información personal, y se les exige que mantengan la confidencialidad y seguridad de tus datos.<br><br>Monitoreo y actualizaciones: Regularmente revisamos y actualizamos nuestras medidas de seguridad para protegerte contra amenazas emergentes y asegurar que tus datos estén siempre seguros.<br><br>Tu privacidad y seguridad son nuestras prioridades. Si tienes alguna pregunta adicional sobre cómo protegemos tu información, no dudes en contactar con nuestro equipo de soporte."
    }
    
}

//Render

accordionContainer.insertAdjacentHTML('beforeend', cardAccordion(questionsFreq.question1.title, questionsFreq.question1.info));
accordionContainer.insertAdjacentHTML('beforeend', cardAccordion(questionsFreq.question2.title, questionsFreq.question2.info));
accordionContainer.insertAdjacentHTML('beforeend', cardAccordion(questionsFreq.question3.title, questionsFreq.question3.info));
accordionContainer.insertAdjacentHTML('beforeend', cardAccordion(questionsFreq.question4.title, questionsFreq.question4.info));
accordionContainer.insertAdjacentHTML('beforeend', cardAccordion(questionsFreq.question5.title, questionsFreq.question5.info));


// Funcion para el acordeon de "Preguntas Frecuentes"

const activarInfo = () => {
    
    const accordionBtn = document.querySelectorAll(".accordion-btn");
    const accordion = document.querySelectorAll(".accordion");

    accordionBtn.forEach((btn, i) => {
        
        btn.addEventListener('click', () => {

            const acc = accordion[i];

            // Si está activado, lo cerramos
            if (acc.classList.contains('activate')) {
                acc.style.maxHeight = null;
            } else {
                acc.style.maxHeight = acc.scrollHeight + 'px'; 
            }
            acc.classList.toggle('activate');

        });
    });
};

activarInfo();