

const config = {
  theme: {
    // overwrite light theme properties
    light: {
      colors: {
        primary100: '#eafbe7', // bg color
        primary200: '#e0c1f4',
        primary500: '#206c43',
        primary600: '#206c43',
        buttonPrimary500: '#318e4c',
        buttonPrimary600: '#206c43',
        primary700: '#318e4c',
        danger700: '#ff6464'
      },
    },

    // overwrite dark theme properties
    dark: {
       // ...
    }
  },
  
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "RentalHub",

      "app.components.LeftMenu.navbrand.workplace": "rentalhub.com",

      "Auth.form.welcome.title": "Welcom to RentalHub",

      "Auth.form.welcome.subtitle": "Login to your account",

      "Settings.profile.form.section.experience.interfaceLanguageHelp":
        "Preference changes will apply only to you.",
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { releases: false },

  
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
