(function () {
  var STORAGE_KEY = "textlayer-lang";
  var DEFAULT_LANGUAGE = "ru";
  var SUPPORTED_LANGUAGES = ["ru", "en"];

  var translations = {
    ru: {
      meta: {
        title: "TextLayer \u2014 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 OCR \u0434\u043b\u044f Windows",
        description: "TextLayer \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u044f\u0442\u044c \u0438 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0435\u043a\u0441\u0442 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435. OCR \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u043d\u0430 Windows."
      },
      common: {
        skip: "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u043c\u0443",
        languageSwitcher: "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u0435\u043b\u044c \u044f\u0437\u044b\u043a\u0430",
        switchToRu: "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u044f\u0437\u044b\u043a \u043d\u0430 \u0440\u0443\u0441\u0441\u043a\u0438\u0439",
        switchToEn: "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u044f\u0437\u044b\u043a \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",
        download: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u0434\u043b\u044f Windows",
        downloadAria: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c TextLayer \u0434\u043b\u044f Windows"
      },
      lang: {
        ru: "RU",
        en: "EN"
      },
      brand: {
        text: "TextLayer"
      },
      hero: {
        title: "\u041a\u043e\u043f\u0438\u0440\u0443\u0439 \u0442\u0435\u043a\u0441\u0442 \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u044d\u043a\u0440\u0430\u043d\u0435",
        subtitle: "\u041d\u0430\u0436\u043c\u0438 Ctrl + Shift + O, \u0432\u044b\u0434\u0435\u043b\u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u0438 \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0439 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0438\u0437 \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u043e\u0432\u0435\u0440\u043b\u0435\u044f.",
        trust: "\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 OCR \u00b7 \u0411\u0435\u0437 \u043e\u0431\u043b\u0430\u043a\u0430 \u00b7 Windows"
      },
      panel: {
        title: "\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0439",
        step1: "Ctrl + Shift + O",
        step2: "\u0412\u044b\u0434\u0435\u043b\u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u044c",
        step3: "\u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439 \u0442\u0435\u043a\u0441\u0442"
      },
      features: {
        title: "\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438",
        items: {
          hotkey: {
            title: "\u0413\u043e\u0440\u044f\u0447\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0448\u0430",
            text: "\u0417\u0430\u043f\u0443\u0441\u043a \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u044f \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0435\u0439 \u043a\u043b\u0430\u0432\u0438\u0448."
          },
          region: {
            title: "\u0412\u044b\u0431\u043e\u0440 \u043e\u0431\u043b\u0430\u0441\u0442\u0438",
            text: "\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0451\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u044d\u043a\u0440\u0430\u043d\u0430."
          },
          copy: {
            title: "\u041e\u0431\u044b\u0447\u043d\u043e\u0435 \u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",
            text: "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043c\u043e\u0436\u043d\u043e \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0438 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0442\u0435\u043a\u0441\u0442."
          }
        }
      },
      privacy: {
        title: "\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u044c",
        text: "TextLayer \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0451\u0442 \u0442\u0435\u043a\u0441\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0435. \u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440, \u043e\u0431\u043b\u0430\u0447\u043d\u0430\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438 \u0442\u0435\u043b\u0435\u043c\u0435\u0442\u0440\u0438\u044f \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f."
      },
      download: {
        title: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c TextLayer",
        note: "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0449\u0438\u043a \u0434\u043b\u044f Windows \u00b7 v0.1.1"
      },
      footer: {
        text: "TextLayer \u00b7 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u0431\u0435\u0437 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440."
      }
    },
    en: {
      meta: {
        title: "TextLayer \u2014 local OCR for Windows",
        description: "TextLayer helps you select and copy text from images on your screen. OCR runs locally on Windows."
      },
      common: {
        skip: "Skip to content",
        languageSwitcher: "Language switcher",
        switchToRu: "Switch language to Russian",
        switchToEn: "Switch language to English",
        download: "Download for Windows",
        downloadAria: "Download TextLayer for Windows"
      },
      lang: {
        ru: "RU",
        en: "EN"
      },
      brand: {
        text: "TextLayer"
      },
      hero: {
        title: "Copy text from images on your screen",
        subtitle: "Press Ctrl + Shift + O, select an area, and copy recognized text from a clean overlay.",
        trust: "Local OCR \u00b7 No cloud \u00b7 Windows"
      },
      panel: {
        title: "Quick workflow",
        step1: "Ctrl + Shift + O",
        step2: "Select an area",
        step3: "Copy text"
      },
      features: {
        title: "Features",
        items: {
          hotkey: {
            title: "Hotkey",
            text: "Start recognition with one keyboard shortcut."
          },
          region: {
            title: "Region capture",
            text: "Recognize only the part of the screen you need."
          },
          copy: {
            title: "Normal copying",
            text: "Select and copy the result like regular text."
          }
        }
      },
      privacy: {
        title: "Privacy",
        text: "TextLayer recognizes text locally on your computer. Images are not uploaded to a server, and there is no cloud processing or telemetry."
      },
      download: {
        title: "Download TextLayer",
        note: "Windows installer \u00b7 v0.1.1"
      },
      footer: {
        text: "TextLayer \u00b7 local recognition without uploading images to a server."
      }
    }
  };

  var textNodes = document.querySelectorAll("[data-i18n]");
  var titleNodes = document.querySelectorAll("[data-i18n-title]");
  var ariaLabelNodes = document.querySelectorAll("[data-i18n-aria-label]");
  var metaDescription = document.querySelector('meta[name="description"]');
  var languageButtons = document.querySelectorAll(".lang-button");

  function getStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function setStoredLanguage(language) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      return;
    }
  }

  function resolveKey(source, key) {
    var parts = key.split(".");
    var value = source;
    var index = 0;

    while (index < parts.length) {
      if (!value || !Object.prototype.hasOwnProperty.call(value, parts[index])) {
        return "";
      }

      value = value[parts[index]];
      index += 1;
    }

    return value;
  }

  function getInitialLanguage() {
    var storedLanguage = getStoredLanguage();

    if (SUPPORTED_LANGUAGES.indexOf(storedLanguage) !== -1) {
      return storedLanguage;
    }

    return DEFAULT_LANGUAGE;
  }

  function applyLanguage(language) {
    var activeLanguage = SUPPORTED_LANGUAGES.indexOf(language) !== -1 ? language : DEFAULT_LANGUAGE;
    var dictionary = translations[activeLanguage];

    document.documentElement.lang = activeLanguage;
    document.title = dictionary.meta.title;

    if (metaDescription) {
      metaDescription.setAttribute("content", dictionary.meta.description);
    }

    textNodes.forEach(function (node) {
      node.textContent = resolveKey(dictionary, node.getAttribute("data-i18n"));
    });

    titleNodes.forEach(function (node) {
      node.setAttribute("title", resolveKey(dictionary, node.getAttribute("data-i18n-title")));
    });

    ariaLabelNodes.forEach(function (node) {
      node.setAttribute("aria-label", resolveKey(dictionary, node.getAttribute("data-i18n-aria-label")));
    });

    languageButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-lang") === activeLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    setStoredLanguage(activeLanguage);
  }

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang"));
    });
  });

  applyLanguage(getInitialLanguage());
})();
