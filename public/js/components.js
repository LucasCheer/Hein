// Componentes con Javascript Vanilla

//Componente CARD ACCCORDION

export function cardAccordion(title, info){
    return(
        `
        <div class="accordion">
                    <div class="accordion-header">
                        <h3>${title}</h3>
                        <button class="accordion-btn">
                            <img src="./assets/icons/arrow-icon.svg" alt="flecha">
                        </button>
                    </div>
                    <hr>
                    <div class="accordion-info">
                    ${info}
                    </div>
                </div>
        `
    )
}
