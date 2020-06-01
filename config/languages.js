global.defaultLanguage = 'el';
global.languagesObj = [
    {
        id: "el",
        flag: `https://www.countryflags.io/gr/flat/64.png`,
        name: "Ελληνικά"
    },
    {
        id: "en",
        flag: `https://www.countryflags.io/gb/flat/64.png`,
        name: "English"
    },
    {
        id: "fr",
        flag: `https://www.countryflags.io/fr/flat/64.png`,
        name: "Francais"
    },
    {
        id: "it",
        flag: `https://www.countryflags.io/it/flat/64.png`,
        name: "Italiano"
    }
];
global.languages = global.languagesObj.map(l => l.id);
