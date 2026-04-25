(function () {
  var STORAGE_KEY = "textlayer-lang";
  var DEFAULT_LANGUAGE = "ru";
  var SUPPORTED_LANGUAGES = ["ru", "en"];

  var translations = {
    ru: {
      meta: {
        title: "TextLayer — локальное OCR для Windows",
        description: "TextLayer помогает выделять область экрана, распознавать текст локально и копировать результат как обычный текст."
      },
      common: {
        skip: "Перейти к содержимому",
        homeAria: "Перейти к началу страницы TextLayer",
        navAria: "Основная навигация",
        languageSwitcher: "Переключатель языка",
        switchToRu: "Переключить язык на русский",
        switchToEn: "Переключить язык на английский",
        github: "GitHub",
        githubAria: "Открыть репозиторий TextLayer на GitHub",
        sourceAria: "Открыть исходный код TextLayer на GitHub",
        downloadAria: "Скачать TextLayer для Windows"
      },
      lang: {
        ru: "RU",
        en: "EN"
      },
      brand: {
        name: "TextLayer",
        subtitle: "Локальное OCR для Windows"
      },
      nav: {
        overview: "Обзор",
        features: "Возможности",
        privacy: "Приватность",
        download: "Скачать"
      },
      hero: {
        label: "OCR-утилита для Windows",
        title: "Копируй текст с изображений на экране",
        text: "TextLayer помогает выделять область экрана, распознавать текст локально и копировать результат как обычный текст.",
        download: "Скачать для Windows",
        github: "Посмотреть исходный код",
        meta: "Windows · Локальное OCR · Без загрузки в облако"
      },
      mockup: {
        aria: "Макет приложения TextLayer",
        menu: {
          capture: "Захват",
          ocr: "OCR",
          settings: "Настройки"
        },
        heading: "Захват текста с экрана",
        previewNote: "Выбранная область",
        textLabel: "Распознанный текст",
        sampleText: "Пример текста готов к копированию",
        copyButton: "Копировать текст"
      },
      workflow: {
        step1: "Открой изображение или скриншот",
        step2: "Выдели область экрана",
        step3: "TextLayer выполнит локальное OCR",
        step4: "Скопируй распознанный текст"
      },
      features: {
        title: "Для повседневного захвата текста с экрана",
        items: {
          region: {
            title: "Выделение области",
            text: "Распознаётся только нужная часть экрана."
          },
          overlay: {
            title: "Выделяемый оверлей",
            text: "TextLayer размещает распознанный текст поверх захваченной области, чтобы его можно было копировать как обычно."
          },
          local: {
            title: "Локальное OCR",
            text: "OCR работает на вашем компьютере с использованием локальных OCR-движков Windows."
          },
          language: {
            title: "Английский и русский",
            text: "Интерфейс приложения поддерживает английский и русский языки."
          },
          desktop: {
            title: "Настольная утилита Windows",
            text: "Работает как обычная Windows-утилита и может оставаться доступной из системного трея."
          },
          extension: {
            title: "Без расширения браузера",
            text: "Работает с изображениями в Discord, Telegram, браузерах, просмотрщиках изображений и других приложениях."
          }
        }
      },
      privacy: {
        title: "Приватность по умолчанию",
        text: "TextLayer не требует облачного OCR. Захваченные области экрана обрабатываются локально на вашем компьютере.",
        items: {
          upload: "Без загрузки изображений",
          cloud: "Без облачного OCR",
          telemetry: "Без телеметрии",
          scanning: "Без постоянного фонового сканирования экрана"
        },
        diagramAria: "Схема локальной обработки",
        diagram: {
          screen: "Область экрана",
          ocr: "Локальное OCR",
          text: "Выделяемый текст"
        }
      },
      technical: {
        title: "Технические детали",
        items: {
          platform: {
            label: "Платформа",
            value: "Windows"
          },
          runtime: {
            label: "Среда выполнения",
            value: ".NET 9"
          },
          ui: {
            label: "Интерфейс",
            value: "WPF"
          },
          ocr: {
            label: "OCR",
            value: "Windows OCR и локальный Tesseract OCR"
          },
          languages: {
            label: "Языки",
            value: "Английский и русский"
          },
          distribution: {
            label: "Распространение",
            value: "Установщик Windows из GitHub Releases"
          }
        }
      },
      download: {
        title: "Скачать TextLayer для Windows",
        text: "Установите TextLayer и используйте локальное OCR прямо на рабочем столе.",
        button: "Скачать TextLayer v0.1.1",
        buttonAria: "Скачать TextLayer версии 0.1.1",
        links: {
          releases: "Релизы GitHub",
          source: "Исходный код"
        },
        note: "Установщик для Windows. OCR-ресурсы уже включены в приложение."
      },
      limitations: {
        title: "Текущие ограничения",
        items: {
          one: "Качество OCR зависит от чёткости изображения и размера текста.",
          two: "Очень плотные интерфейсные скриншоты могут распознаваться хуже.",
          three: "Автоопределение языка OCR пока экспериментальное.",
          four: "Захват выполняется для выбранной области экрана за один раз."
        }
      },
      footer: {
        text: "Локальная OCR-утилита для Windows.",
        github: "GitHub",
        download: "Скачать"
      }
    },
    en: {
      meta: {
        title: "TextLayer — local OCR for Windows",
        description: "TextLayer helps you select a screen area, recognize text locally, and copy the result as normal text."
      },
      common: {
        skip: "Skip to content",
        homeAria: "Go to the top of the TextLayer page",
        navAria: "Primary navigation",
        languageSwitcher: "Language switcher",
        switchToRu: "Switch language to Russian",
        switchToEn: "Switch language to English",
        github: "GitHub",
        githubAria: "Open the TextLayer repository on GitHub",
        sourceAria: "Open the TextLayer source code on GitHub",
        downloadAria: "Download TextLayer for Windows"
      },
      lang: {
        ru: "RU",
        en: "EN"
      },
      brand: {
        name: "TextLayer",
        subtitle: "Local OCR for Windows"
      },
      nav: {
        overview: "Overview",
        features: "Features",
        privacy: "Privacy",
        download: "Download"
      },
      hero: {
        label: "Windows OCR Utility",
        title: "Copy text from images on your screen",
        text: "TextLayer helps you select a screen area, recognize text locally, and copy the result as normal text.",
        download: "Download for Windows",
        github: "View source on GitHub",
        meta: "Windows · Local OCR · No cloud upload"
      },
      mockup: {
        aria: "TextLayer application mockup",
        menu: {
          capture: "Capture",
          ocr: "OCR",
          settings: "Settings"
        },
        heading: "Screen text capture",
        previewNote: "Selected region",
        textLabel: "Recognized text",
        sampleText: "Example text ready to copy",
        copyButton: "Copy text"
      },
      workflow: {
        step1: "Open an image or screenshot",
        step2: "Select a screen area",
        step3: "TextLayer runs local OCR",
        step4: "Copy the recognized text"
      },
      features: {
        title: "Built for everyday screen text capture",
        items: {
          region: {
            title: "Region capture",
            text: "Recognize only the part of the screen you need."
          },
          overlay: {
            title: "Selectable overlay",
            text: "TextLayer places recognized text over the captured area so you can copy it normally."
          },
          local: {
            title: "Local OCR",
            text: "OCR runs on your Windows machine using local OCR engines."
          },
          language: {
            title: "English and Russian",
            text: "The app UI supports English and Russian."
          },
          desktop: {
            title: "Windows desktop app",
            text: "Runs as a normal Windows utility and can stay available from the tray."
          },
          extension: {
            title: "No browser extension",
            text: "Works with images shown in Discord, Telegram, browsers, image viewers, and other apps."
          }
        }
      },
      privacy: {
        title: "Private by design",
        text: "TextLayer does not need cloud OCR. Captured screen regions are processed locally on your computer.",
        items: {
          upload: "No image upload",
          cloud: "No cloud OCR",
          telemetry: "No telemetry",
          scanning: "No continuous screen scanning"
        },
        diagramAria: "Local processing diagram",
        diagram: {
          screen: "Screen region",
          ocr: "Local OCR",
          text: "Selectable text"
        }
      },
      technical: {
        title: "Technical details",
        items: {
          platform: {
            label: "Platform",
            value: "Windows"
          },
          runtime: {
            label: "Runtime",
            value: ".NET 9"
          },
          ui: {
            label: "UI",
            value: "WPF"
          },
          ocr: {
            label: "OCR",
            value: "Windows OCR and local Tesseract OCR"
          },
          languages: {
            label: "Languages",
            value: "English and Russian"
          },
          distribution: {
            label: "Distribution",
            value: "Windows installer from GitHub Releases"
          }
        }
      },
      download: {
        title: "Download TextLayer for Windows",
        text: "Install TextLayer and use local OCR directly from your desktop.",
        button: "Download TextLayer v0.1.1",
        buttonAria: "Download TextLayer version 0.1.1",
        links: {
          releases: "GitHub Releases",
          source: "Source code"
        },
        note: "Installer for Windows. OCR assets are bundled with the app."
      },
      limitations: {
        title: "Current limitations",
        items: {
          one: "OCR quality depends on image clarity and text size.",
          two: "Very dense UI screenshots may be harder to recognize.",
          three: "Auto OCR language detection is experimental.",
          four: "Region capture currently works per selected screen area."
        }
      },
      footer: {
        text: "Local OCR utility for Windows.",
        github: "GitHub",
        download: "Download"
      }
    }
  };

  var textNodes = document.querySelectorAll("[data-i18n]");
  var ariaLabelNodes = document.querySelectorAll("[data-i18n-aria-label]");
  var titleNodes = document.querySelectorAll("[data-i18n-title]");
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

  function resolveTranslation(source, key) {
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
      node.textContent = resolveTranslation(dictionary, node.getAttribute("data-i18n"));
    });

    ariaLabelNodes.forEach(function (node) {
      node.setAttribute("aria-label", resolveTranslation(dictionary, node.getAttribute("data-i18n-aria-label")));
    });

    titleNodes.forEach(function (node) {
      node.setAttribute("title", resolveTranslation(dictionary, node.getAttribute("data-i18n-title")));
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
