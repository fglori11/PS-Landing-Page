document.getElementById("language-selector").addEventListener("change", function () {
    const selectedLanguage = this.value;
    console.log("Selected language:", selectedLanguage); // Debugging
    translatePage(selectedLanguage);
});

function translatePage(language) {
    const translations = {
        english: {
            home: "Home",
            services: "Services",
            portfolio: "Portfolio",
            contact: "Contact Us",
            heroHeading: "Bringing Vision to Life",
            heroParagraph: "At Pueblo Studio, we’re a passionate team dedicated to creating thoughtful, community-focused designs.",
            ctaButton: "Get In Touch",
        },
        espanol: {
            home: "Inicio",
            services: "Servicios",
            portfolio: "Portafolio",
            contact: "Contáctenos",
            heroHeading: "Dando vida a la visión",
            heroParagraph: "En Pueblo Studio, somos un equipo apasionado dedicado a crear diseños considerados y centrados en la comunidad.",
            ctaButton: "Contáctenos",
        },
    };

    if (!translations[language]) {
        console.error(`Translations for language "${language}" not found.`);
        return;
    }

    document.querySelector("a[href='#home']").textContent = translations[language].home;
    document.querySelector("a[href='#services']").textContent = translations[language].services;
    document.querySelector("a[href='#portfolio']").textContent = translations[language].portfolio;
    document.querySelector("a[href='#contact']").textContent = translations[language].contact;
    document.querySelector(".hero-text h2").textContent = translations[language].heroHeading;
    document.querySelector(".hero-text p").textContent = translations[language].heroParagraph;
    document.querySelector(".cta-btn").textContent = translations[language].ctaButton;
}
