// JavaScript to handle button clicks, display information, change language, and perform translation
const evaporationBtn = document.getElementById('evaporationBtn');
const condensationBtn = document.getElementById('condensationBtn');
const precipitationBtn = document.getElementById('precipitationBtn');
const runoffBtn = document.getElementById('runoffBtn');
const infoDiv = document.getElementById('infoDiv');
const languageSelect = document.getElementById('language');
const languageLabel = document.getElementById('languageLabel');
const enOption = document.getElementById('enOption');
const frOption = document.getElementById('frOption');
const aboutTitle = document.getElementById('aboutTitle');
const aboutText = document.getElementById('aboutText');

// Define the content in English and French
const content = {
    en: {
        title: "WaterCycleKids.com",
        aboutTitle: "About the Water Cycle",
        aboutText: "The water cycle is an amazing process that keeps water moving around our planet. It's like a big adventure ride for water!",
        evaporationBtnText: "What's Evaporation?",
        evaporationInfo: "Evaporation is when water turns into vapor and rises into the air. It happens when the sun heats up water in rivers, lakes, and the ocean. This vapor eventually forms clouds.",
        condensationBtnText: "Tell Me About Condensation!",
        condensationInfo: "Condensation is the process where water vapor cools down and changes back into tiny water droplets. These tiny droplets come together to form clouds in the sky.",
        precipitationBtnText: "Let's Talk Precipitation!",
        precipitationInfo: "Precipitation occurs when these tiny water droplets in the clouds join together and fall from the sky as rain, snow, sleet, or hail. It's how we get different types of weather!",
        runoffBtnText: "What's Runoff, Anyway?",
        runoffInfo: "Runoff is when extra rainwater flows over the ground and into rivers and streams. It eventually makes its way back to the ocean or a lake, completing the water cycle.",
        languageLabel: "Select Language:",
        enOptionText: "English",
        frOptionText: "French",
    },
    fr: {
        title: "WaterCycleKids.com",
        aboutTitle: "À propos du cycle de l'eau",
        aboutText: "Le cycle de l'eau est un processus étonnant qui permet à l'eau de circuler autour de notre planète. C'est comme une grande aventure pour l'eau !",
        evaporationBtnText: "Qu'est-ce que l'évaporation ?",
        evaporationInfo: "L'évaporation est lorsque l'eau se transforme en vapeur et s'élève dans l'air. Cela se produit lorsque le soleil chauffe l'eau dans les rivières, les lacs et l'océan. Cette vapeur finit par former des nuages.",
        condensationBtnText: "Parlez-moi de la condensation !",
        condensationInfo: "La condensation est le processus par lequel la vapeur d'eau se refroidit et redevient de minuscules gouttelettes d'eau. Ces petites gouttelettes se rejoignent pour former des nuages dans le ciel.",
        precipitationBtnText: "Parlons des précipitations !",
        precipitationInfo: "Les précipitations surviennent lorsque ces minuscules gouttelettes d'eau dans les nuages se rassemblent et tombent du ciel sous forme de pluie, de neige, de grésil ou de grêle. C'est ainsi que nous obtenons différents types de temps !",
        runoffBtnText: "Qu'est-ce que le ruissellement ?",
        runoffInfo: "Le ruissellement se produit lorsque l'eau de pluie supplémentaire s'écoule sur le sol et dans les rivières et les ruisseaux. Elle finit par retourner à l'océan ou à un lac, ce qui complète le cycle de l'eau.",
        languageLabel: "Sélectionner la langue :",
        enOptionText: "Anglais",
        frOptionText: "Français",
    },
};

function setLanguageContent(language) {
    // Set the content based on the selected language
    siteTitle.innerText = content[language].title;
    aboutTitle.innerText = content[language].aboutTitle;
    aboutText.innerText = content[language].aboutText;
    evaporationBtn.innerText = content[language].evaporationBtnText;
    condensationBtn.innerText = content[language].condensationBtnText;
    precipitationBtn.innerText = content[language].precipitationBtnText;
    runoffBtn.innerText = content[language].runoffBtnText;
    languageLabel.innerText = content[language].languageLabel;
    enOption.innerText = content[language].enOptionText;
    frOption.innerText = content[language].frOptionText;
}

function displayAndSpeak(text) {
    infoDiv.innerHTML = `<p>${text}</p>`;
    infoDiv.classList.remove('hidden');

    // Speak the text with ResponsiveVoice TTS API
    responsiveVoice.speak(text);
}

evaporationBtn.addEventListener('click', () => {
    const text = content[languageSelect.value].evaporationInfo;
    displayAndSpeak(text);
});

condensationBtn.addEventListener('click', () => {
    const text = content[languageSelect.value].condensationInfo;
    displayAndSpeak(text);
});

precipitationBtn.addEventListener('click', () => {
    const text = content[languageSelect.value].precipitationInfo;
    displayAndSpeak(text);
});

runoffBtn.addEventListener('click', () => {
    const text = content[languageSelect.value].runoffInfo;
    displayAndSpeak(text);
});

languageSelect.addEventListener('change', () => {
    const selectedLanguage = languageSelect.value;
    
    switch (selectedLanguage) {
        case 'en':
            // Set language to English
            responsiveVoice.setDefaultVoice("UK English Female");
            break;
        case 'fr':
            // Set language to French
            responsiveVoice.setDefaultVoice("French Female");
            break;
        default:
            // Default to English
            responsiveVoice.setDefaultVoice("UK English Female");
            break;
    }

    // Update content based on the selected language
    setLanguageContent(selectedLanguage);
});

// Initial content setup
const initialLanguage = languageSelect.value;
setLanguageContent(initialLanguage);
