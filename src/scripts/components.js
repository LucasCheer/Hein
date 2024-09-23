// Componentes JavaScript sin JSX

var Nav = function() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "container"
    }, /*#__PURE__*/ React.createElement("a", {
        className: "navbar-brand logo",
        href: "../index.html"
    }, /*#__PURE__*/ React.createElement("img", {
        src: "/src/assets/icons/hein-logo2.png",
        alt: "logo Hein"
    }), "Hein"), /*#__PURE__*/ React.createElement("button", {
        className: "navbar-toggler",
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbar-toggler",
        "aria-controls": "navbarTogglerDemo01",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
    }, /*#__PURE__*/ React.createElement("span", {
        className: "navbar-toggler-icon"
    })), /*#__PURE__*/ React.createElement("div", {
        className: "collapse navbar-collapse d-lg-flex justify-content-lg-end align-content-lg-center",
        id: "navbar-toggler"
    }, /*#__PURE__*/ React.createElement("ul", {
        className: "navbar-nav  d-md-flex justify-content-md-center align-items-md-center"
    }, /*#__PURE__*/ React.createElement("li", {
        className: "nav-item"
    }, /*#__PURE__*/ React.createElement("a", {
        className: "nav-item-inicio",
        "aria-current": "page",
        href: "../index.html"
    }, "Inicio")), /*#__PURE__*/ React.createElement("li", {
        className: "nav-item"
    }, /*#__PURE__*/ React.createElement("a", {
        className: "nav-item-a",
        "aria-current": "page",
        href: "diary.html"
    }, "Mi diario")), /*#__PURE__*/ React.createElement("li", {
        className: "nav-item dropdown"
    }, /*#__PURE__*/ React.createElement("a", {
        type: "button",
        className: "dropdown-toggle navbarDropdown nav-item-a d-flex justify-content-end align-items-center",
        href: "#",
        id: "navbarDropdown",
        role: "button",
        "data-bs-toggle": "dropdown",
        "aria-expanded": "false"
    }, "Recursos"), /*#__PURE__*/ React.createElement("ul", {
        id: "dropdown-menu",
        className: "dropdown-menu",
        "aria-labelledby": "navbarDropdown"
    }, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        id: "dropdown-item",
        className: "dropdown-item",
        href: "blog.html"
    }, "Blog", /*#__PURE__*/ React.createElement("i", {
        className: "bi bi-caret-right-fill"
    }))), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        id: "dropdown-item",
        className: "dropdown-item",
        href: "emotions.html"
    }, "Emociones", /*#__PURE__*/ React.createElement("i", {
        className: "bi bi-caret-right-fill"
    }))), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        id: "dropdown-item",
        className: "dropdown-item",
        href: "#"
    }, "Comunidad", /*#__PURE__*/ React.createElement("i", {
        className: "bi bi-caret-right-fill"
    }))))), /*#__PURE__*/ React.createElement("li", {
        className: "nav-item"
    }, /*#__PURE__*/ React.createElement("a", {
        className: "nav-item-a",
        "aria-current": "page",
        href: "about.html"
    }, "Sobre nosotros")), /*#__PURE__*/ React.createElement("li", {
        className: "nav-item"
    }, /*#__PURE__*/ React.createElement("a", {
        className: "nav-item-a",
        href: "login.html"
    }, /*#__PURE__*/ React.createElement("button", {
        type: "button",
        className: "btn btn-primary"
    }, "\xa1S\xfamate!"))))));
};

var Footer = function() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "footer-container"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "footer-sup"
    }, /*#__PURE__*/ React.createElement("figure", null, /*#__PURE__*/ React.createElement("img", {
        src: "../../src/assets/icons/hein-logo.png",
        alt: "Logo Hein"
    }), /*#__PURE__*/ React.createElement("figcaption", null, "Hein")), /*#__PURE__*/ React.createElement("p", null, "\xa9 Powered by grupo Hein 2024"), /*#__PURE__*/ React.createElement("div", {
        className: "socials-container"
    }, /*#__PURE__*/ React.createElement("a", {
        href: "https://facebook.com/",
        rel: "noopener",
        target: "_blank"
    }, /*#__PURE__*/ React.createElement("img", {
        className: "logo",
        src: "../../src/assets/icons/facebook-logo.svg",
        alt: "Facebook Logo"
    })), /*#__PURE__*/ React.createElement("a", {
        href: "https://instagram.com/",
        rel: "noopener",
        target: "_blank"
    }, /*#__PURE__*/ React.createElement("img", {
        className: "logo",
        src: "../../src/assets/icons/ig-logo.svg",
        alt: "Instagram Logo"
    })), /*#__PURE__*/ React.createElement("a", {
        href: "https://x.com/",
        rel: "noopener",
        target: "_blank"
    }, /*#__PURE__*/ React.createElement("img", {
        className: "logo",
        src: "../../src/assets/icons/twitter-logo.svg",
        alt: "Twitter Logo"
    })))), /*#__PURE__*/ React.createElement("hr", null), /*#__PURE__*/ React.createElement("div", {
        className: "footer-inf"
    }, /*#__PURE__*/ React.createElement("ul", null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "../index.html"
    }, "Inicio")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "./diary.html"
    }, "Diario")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "./features.html"
    }, "Recursos"))), /*#__PURE__*/ React.createElement("ul", null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "./about.html"
    }, "Sobre Nosotros")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "./blog.html"
    }, "Blog")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "./emotions.html"
    }, "Emociones"))), /*#__PURE__*/ React.createElement("ul", null, /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "../index.html"
    }, "Terminos")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "../index.html"
    }, "Preguntas Frecuentes")), /*#__PURE__*/ React.createElement("li", null, /*#__PURE__*/ React.createElement("a", {
        href: "../index.html"
    }, "Pol\xedticas de privacidad")))));
};

ReactDOM.render(React.createElement(Footer), document.getElementById('root-footer'));