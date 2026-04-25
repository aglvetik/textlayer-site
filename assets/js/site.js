(function () {
  var STORAGE_KEY = "textlayer-language";
  var SUPPORTED_LANGUAGES = ["en", "ru"];

  var translations = {
    en: {
      meta: {
        title: "TextLayer - Local OCR Overlay for Windows",
        description:
          "TextLayer is a local OCR overlay utility for Windows. Capture a screen region, recognize text on-device, and copy it from a selectable overlay."
      },
      accessibility: {
        skip: "Skip to content",
        brandLink: "TextLayer home",
        primaryNav: "Primary navigation",
        languageSwitcher: "Language switcher",
        switchToEnglish: "Switch site language to English",
        switchToRussian: "Switch site language to Russian",
        downloadPrimary: "Download TextLayer for Windows",
        githubPrimary: "Open the TextLayer GitHub repository",
        quickFacts: "Quick facts about TextLayer",
        downloadSection: "Download the TextLayer Windows installer",
        releasesLink: "Open TextLayer releases on GitHub"
      },
      brand: {
        name: "TextLayer"
      },
      nav: {
        features: "Features",
        how: "How it works",
        privacy: "Privacy",
        download: "Download",
        github: "GitHub"
      },
      lang: {
        en: "EN",
        ru: "RU"
      },
      hero: {
        eyebrow: "Local OCR overlay for Windows",
        title: "Select text from images on your screen.",
        body:
          "TextLayer runs in the tray. Press Ctrl+Shift+O, select a region, and copy recognized text from a selectable overlay.",
        download: "Download for Windows",
        github: "View on GitHub",
        trustLocal: "Local OCR",
        trustCloud: "No cloud",
        trustPlatform: "Windows",
        factHotkeyLabel: "Hotkey",
        factHotkeyValue: "Ctrl+Shift+O",
        factOcrLabel: "OCR engines",
        factOcrValue: "Windows OCR + local Tesseract",
        factResultLabel: "Result",
        factResultValue: "Selectable text overlay"
      },
      features: {
        eyebrow: "Features",
        title: "Built for quick local text capture.",
        items: {
          capture: {
            title: "Capture text from images and apps",
            body:
              "Select any region on screen and extract text from screenshots, dialogs, browsers, or image viewers."
          },
          copy: {
            title: "Select and copy recognized text",
            body:
              "The result appears as a text overlay so you can highlight, select, and copy what you need."
          },
          local: {
            title: "Runs with local OCR only",
            body:
              "Recognition uses Windows OCR and local Tesseract assets. Nothing is sent to a remote service."
          },
          tray: {
            title: "Tray app with a simple hotkey flow",
            body:
              "Keep TextLayer in the notification area and start capture whenever you need it."
          }
        }
      },
      workflow: {
        eyebrow: "How it works",
        title: "Four simple steps",
        steps: {
          launch: {
            title: "Launch TextLayer",
            body: "The app starts in the tray and stays ready in the background."
          },
          hotkey: {
            title: "Press Ctrl+Shift+O",
            body: "Start a capture without switching apps or opening a separate window."
          },
          region: {
            title: "Select a region",
            body: "Drag over the part of the screen that contains the text you want to read."
          },
          copy: {
            title: "Copy recognized text",
            body: "Select the OCR result from the overlay and copy it like normal text."
          }
        }
      },
      privacy: {
        eyebrow: "Privacy",
        title: "Your OCR stays on your device.",
        body:
          "TextLayer is designed to work fully locally. Captured images and recognized text are processed on the machine and not uploaded anywhere.",
        points: {
          onDevice: "OCR runs on-device",
          noUpload: "Captured regions are not uploaded",
          noTelemetry: "No telemetry or analytics",
          noCloud: "No cloud fallback"
        }
      },
      download: {
        eyebrow: "Download",
        title: "Get the current Windows installer",
        body: "Download version 0.1.1 from GitHub Releases.",
        primary: "Download TextLayer",
        secondary: "Browse all releases",
        note: "Windows installer, version 0.1.1"
      },
      footer: {
        github: "GitHub repository",
        note: "Local OCR overlay for Windows. No cloud OCR. No telemetry."
      }
    },
    ru: {
      meta: {
        title: "TextLayer - локальный OCR-оверлей для Windows",
        description:
          "TextLayer — локальная OCR-утилита для Windows. Выделите область экрана, распознайте текст на устройстве и скопируйте его из выделяемого оверлея."
      },
      accessibility: {
        skip: "Перейти к содержимому",
        brandLink: "Главная страница TextLayer",
        primaryNav: "Основная навигация",
        languageSwitcher: "Переключатель языка",
        switchToEnglish: "Переключить язык сайта на английский",
        switchToRussian: "Переключить язык сайта на русский",
        downloadPrimary: "Скачать TextLayer для Windows",
        githubPrimary: "Открыть репозиторий TextLayer на GitHub",
        quickFacts: "Краткая информация о TextLayer",
        downloadSection: "Скачать установщик TextLayer для Windows",
        releasesLink: "Открыть релизы TextLayer на GitHub"
      },
      brand: {
        name: "TextLayer"
      },
      nav: {
        features: "Функции",
        how: "Как это работает",
        privacy: "Приватность",
        download: "Скачать",
        github: "GitHub"
      },
      lang: {
        en: "EN",
        ru: "RU"
      },
      hero: {
        eyebrow: "Локальный OCR-оверлей для Windows",
        title: "Выделяйте текст с изображений прямо на экране.",
        body:
          "TextLayer работает в трее. Нажмите Ctrl+Shift+O, выделите область экрана и скопируйте распознанный текст из выделяемого оверлея.",
        download: "Скачать для Windows",
        github: "Открыть на GitHub",
        trustLocal: "Локальный OCR",
        trustCloud: "Без облака",
        trustPlatform: "Windows",
        factHotkeyLabel: "Горячая клавиша",
        factHotkeyValue: "Ctrl+Shift+O",
        factOcrLabel: "Движки OCR",
        factOcrValue: "Windows OCR + локальный Tesseract",
        factResultLabel: "Результат",
        factResultValue: "Текстовый оверлей с выделением"
      },
      features: {
        eyebrow: "Функции",
        title: "Простой инструмент для быстрого захвата текста.",
        items: {
          capture: {
            title: "Забирает текст с изображений и из приложений",
            body:
              "Можно выделить любую область экрана и распознать текст со скриншотов, диалогов, браузера или просмотрщика изображений."
          },
          copy: {
            title: "Позволяет выделять и копировать текст",
            body:
              "Результат появляется в виде текстового оверлея, поэтому нужный фрагмент можно просто выделить и скопировать."
          },
          local: {
            title: "Работает только локально",
            body:
              "Для распознавания используются Windows OCR и локальный Tesseract. Данные не отправляются во внешние сервисы."
          },
          tray: {
            title: "Живет в трее и запускается по горячей клавише",
            body:
              "TextLayer находится в области уведомлений и всегда готов к быстрому захвату."
          }
        }
      },
      workflow: {
        eyebrow: "Как это работает",
        title: "Четыре простых шага",
        steps: {
          launch: {
            title: "Запустите TextLayer",
            body: "Приложение появляется в трее и остается готовым в фоне."
          },
          hotkey: {
            title: "Нажмите Ctrl+Shift+O",
            body: "Запустите захват, не переключаясь между окнами и не открывая лишние панели."
          },
          region: {
            title: "Выделите нужную область",
            body: "Обведите часть экрана, где находится текст, который нужно распознать."
          },
          copy: {
            title: "Скопируйте распознанный текст",
            body: "Выделите результат в оверлее и скопируйте его как обычный текст."
          }
        }
      },
      privacy: {
        eyebrow: "Приватность",
        title: "Распознавание остается на вашем устройстве.",
        body:
          "TextLayer изначально рассчитан на полностью локальную работу. Захваченные изображения и распознанный текст обрабатываются на вашем компьютере и никуда не отправляются.",
        points: {
          onDevice: "OCR выполняется на устройстве",
          noUpload: "Захваченные области не загружаются",
          noTelemetry: "Нет телеметрии и аналитики",
          noCloud: "Нет перехода на облачный сервис"
        }
      },
      download: {
        eyebrow: "Скачать",
        title: "Текущий установщик для Windows",
        body: "Скачайте версию 0.1.1 из GitHub Releases.",
        primary: "Скачать TextLayer",
        secondary: "Все релизы",
        note: "Установщик для Windows, версия 0.1.1"
      },
      footer: {
        github: "Репозиторий на GitHub",
        note: "Локальный OCR-оверлей для Windows. Без облачного OCR. Без телеметрии."
      }
    }
  };

  var textNodes = document.querySelectorAll("[data-i18n]");
  var ariaLabelNodes = document.querySelectorAll("[data-i18n-aria-label]");
  var titleNodes = document.querySelectorAll("[data-i18n-title]");
  var langButtons = document.querySelectorAll(".lang-button");
  var metaDescription = document.querySelector('meta[name="description"]');

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

  function getDefaultLanguage() {
    var storedLanguage = getStoredLanguage();

    if (SUPPORTED_LANGUAGES.indexOf(storedLanguage) !== -1) {
      return storedLanguage;
    }

    var browserLanguage = "";

    if (Array.isArray(navigator.languages) && navigator.languages.length > 0) {
      browserLanguage = navigator.languages[0] || "";
    } else if (navigator.language) {
      browserLanguage = navigator.language;
    }

    return browserLanguage.toLowerCase().indexOf("ru") === 0 ? "ru" : "en";
  }

  function resolveTranslation(source, key) {
    var parts = key.split(".");
    var value = source;
    var index = 0;

    while (index < parts.length) {
      if (!value || !Object.prototype.hasOwnProperty.call(value, parts[index])) {
        return undefined;
      }

      value = value[parts[index]];
      index += 1;
    }

    return value;
  }

  function getTranslation(language, key) {
    return resolveTranslation(translations[language], key) || resolveTranslation(translations.en, key) || "";
  }

  function applyLanguage(language) {
    var activeLanguage = SUPPORTED_LANGUAGES.indexOf(language) !== -1 ? language : "en";

    document.documentElement.lang = activeLanguage;
    document.title = getTranslation(activeLanguage, "meta.title");

    if (metaDescription) {
      metaDescription.setAttribute("content", getTranslation(activeLanguage, "meta.description"));
    }

    textNodes.forEach(function (node) {
      node.textContent = getTranslation(activeLanguage, node.getAttribute("data-i18n"));
    });

    ariaLabelNodes.forEach(function (node) {
      node.setAttribute("aria-label", getTranslation(activeLanguage, node.getAttribute("data-i18n-aria-label")));
    });

    titleNodes.forEach(function (node) {
      node.setAttribute("title", getTranslation(activeLanguage, node.getAttribute("data-i18n-title")));
    });

    langButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-lang") === activeLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    setStoredLanguage(activeLanguage);
  }

  langButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang"));
    });
  });

  applyLanguage(getDefaultLanguage());
})();
