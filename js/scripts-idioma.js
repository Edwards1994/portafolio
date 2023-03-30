//Lenguaje cambio de idioma
const buttons = document.getElementById('buttons');
const textsToChange = document.querySelectorAll('[data-section]');

//Lenguaje cambio de idioma
const flagsElement = document.getElementById("flags");
const textToChange = document.querySelectorAll("[data-section]");
const changeLanguage = async language => {
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.textContent = texts[section][value];
  }
};
buttons.addEventListener('click', e => {
  const language = e.target.dataset.language;
  if (language) {
    changeLanguage(language);
  }
});




//Descargar CV
function downloadCv() {
  window.open("files/CV-Edwards-Flores-esp.pdf","_blank");
}

function downloadResume() {
window.open("files/CV-Edwards-Flores-ing.pdf","_blank");     
}
