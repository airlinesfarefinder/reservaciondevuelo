let currentLanguage = 'en';

function setLanguage(lang) {
  currentLanguage = lang;
  fetch(`/locales/${lang}.json`)
    .then(response => response.json())
    .then(translations => {
      document.querySelectorAll("[data-translate]").forEach(el => {
        const key = el.getAttribute("data-translate");
        if (translations[key]) {
          el.textContent = translations[key];
        }
      });
    });
}

// Load default language on page load
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLanguage);
});