(function () {
  var STORAGE_KEY = "textlayer-language";
  var DEFAULT_LANGUAGE = "ru";
  var SUPPORTED_LANGUAGES = ["ru", "en"];

  var translations = {
    ru: {
      meta: {
        title: "TextLayer — локальное OCR для Windows",
        description: "TextLayer помогает выделять и копировать текст с изображений на экране. OCR работает локально на Windows."
      },
      accessibility: {
        skip: "Перейти к содержимому",
        languageSwitcher: "Переключатель языка",
        switchToRu: "Переключить язык на русский",
        switchToEn: "Переключить язык на английский",
        download: "Скачать TextLayer для Windows"
      },
      brand: {
        wordmark: "TextLayer"
      },
      lang: {
        ru: "RU",
        en: "EN"
      },
      hero: {
        title: "Копируй текст с изображений на экране.",
        subtitle: "Нажми Ctrl + Shift + O, выдели область и скопируй распознанный текст из удобного оверлея.",
        download: "Скачать для Windows",
        trust: "Локальное OCR · Без облака · Windows"
      },
      features: {
        heading: "Основные возможности",
        hotkey: {
          title: "Горячая клавиша",
          text: "Быстрый запуск через Ctrl + Shift + O"
        },
        capture: {
          title: "Выделение области",
          text: "Распознавание только выбранной части экрана"
        },
        copy: {
          title: "Копирование текста",
          text: "Выделяй и копируй результат как обычный текст"
        }
      },
      how: {
        title: "Как это работает",
        step1: "Нажми Ctrl + Shift + O",
        step2: "Выдели область на экране",
        step3: "Скопируй распознанный текст"
      },
      privacy: {
        title: "Приватность",
        text: "TextLayer распознаёт текст локально на компьютере. Изображения не отправляются на сервер, облачная обработка и телеметрия не используются."
      },
      download: {
        title: "Скачать TextLayer",
        button: "Скачать для Windows",
        note: "Установщик для Windows · v0.1.1"
      },
      footer: {
        line: "Локальное распознавание без отправки изображений на сервер."
      }
    },
    en: {
      meta: {
        title: "TextLayer — local OCR for Windows",
        description: "TextLayer helps you select and copy text from images on your screen. OCR runs locally on Windows."
      },
      accessibility: {
        skip: "Skip to content",
        languageSwitcher: "Language switcher",
        switchToRu: "Switch language to Russian",
        switchToEn: "Switch language to English",
        download: "Download TextLayer for Windows"
      },
      brand: {
        wordmark: "TextLayer"
      },
      lang: {
        ru: "RU",
        en: "EN"
      },
      hero: {
        title: "Copy text from images on your screen.",
        subtitle: "Press Ctrl + Shift + O, select an area, and copy recognized text from a clean overlay.",
        download: "Download for Windows",
        trust: "Local OCR · No cloud · Windows"
      },
      features: {
        heading: "Key features",
        hotkey: {
          title: "Hotkey",
          text: "Start quickly with Ctrl + Shift + O"
        },
        capture: {
          title: "Region capture",
          text: "Recognize only the selected screen area"
        },
        copy: {
          title: "Copy text",
          text: "Select and copy the result like normal text"
        }
      },
      how: {
        title: "How it works",
        step1: "Press Ctrl + Shift + O",
        step2: "Select an area on the screen",
        step3: "Copy the recognized text"
      },
      privacy: {
        title: "Privacy",
        text: "TextLayer recognizes text locally on your computer. Images are not uploaded to a server, and there is no cloud processing or telemetry."
      },
      download: {
        title: "Download TextLayer",
        button: "Download for Windows",
        note: "Windows installer · v0.1.1"
      },
      footer: {
        line: "Local recognition without uploading images to a server."
      }
    }
  };

  var textNodes = document.querySelectorAll("[data-i18n]");
  var ariaLabelNodes = document.querySelectorAll("[data-i18n-aria-label]");
  var metaDescription = document.querySelector('meta[name="description"]');
  var langButtons = document.querySelectorAll(".lang-button");

  function readStoredLanguage() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function writeStoredLanguage(language) {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {
      return;
    }
  }

  function getInitialLanguage() {
    var storedLanguage = readStoredLanguage();

    if (SUPPORTED_LANGUAGES.indexOf(storedLanguage) !== -1) {
      return storedLanguage;
    }

    return DEFAULT_LANGUAGE;
  }

  function getValue(source, key) {
    var parts = key.split(".");
    var current = source;
    var index = 0;

    while (index < parts.length) {
      if (!current || !Object.prototype.hasOwnProperty.call(current, parts[index])) {
        return "";
      }

      current = current[parts[index]];
      index += 1;
    }

    return current;
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
      node.textContent = getValue(dictionary, node.getAttribute("data-i18n"));
    });

    ariaLabelNodes.forEach(function (node) {
      node.setAttribute("aria-label", getValue(dictionary, node.getAttribute("data-i18n-aria-label")));
    });

    langButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-lang") === activeLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    writeStoredLanguage(activeLanguage);
  }

  langButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang"));
    });
  });

  applyLanguage(getInitialLanguage());
})();
