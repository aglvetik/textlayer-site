(function () {
  var STORAGE_KEY = "textlayer-lang";
  var DEFAULT_LANGUAGE = "en";
  var SUPPORTED_LANGUAGES = ["en", "ru"];

  var translations = {
    en: {
      meta: {
        title: "TextLayer — local OCR for Windows",
        description: "TextLayer extracts copyable text from screenshots, images, and other non-selectable content on your Windows screen."
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
        sourceAria: "View TextLayer on GitHub",
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
        useCases: "Use cases",
        privacy: "Privacy",
        download: "Download"
      },
      hero: {
        label: "Windows OCR Utility",
        title: "Make text inside images usable",
        text: "TextLayer helps you extract copyable text from screenshots, chat images, error dialogs, scanned fragments, and other non-selectable content on your screen.",
        download: "Download for Windows",
        github: "View on GitHub",
        trust: "Local processing · No cloud OCR · No telemetry"
      },
      mockup: {
        aria: "TextLayer product preview",
        imageLabel: "Image text",
        textLabel: "Extracted text",
        previewCaption: "Visible text in screenshots and app windows",
        line1: "Server connection failed",
        line2: "Please retry the request",
        line3: "Copyable output is ready"
      },
      value: {
        title: "Why TextLayer exists",
        blocks: {
          selection: {
            title: "Copy text where apps do not allow selection",
            text: "Useful for screenshots, messengers, launchers, game UI, support dialogs, and images opened in other apps."
          },
          local: {
            title: "Keep recognition local",
            text: "Captured regions are processed on your Windows machine instead of being sent to an online OCR service."
          },
          utility: {
            title: "Use it as a desktop utility",
            text: "TextLayer is designed as a small Windows tool that stays available when you need to work with visual text."
          }
        }
      },
      useCases: {
        title: "Where it helps",
        text: "TextLayer is for moments when text is visible, but not selectable. Instead of retyping it manually, you can extract it locally and paste it where you need.",
        items: {
          one: "Screenshots with text",
          two: "Discord or Telegram images",
          three: "Error messages and logs shown in screenshots",
          four: "Game UI or server information screenshots",
          five: "Scanned fragments and document previews",
          six: "Text inside browser images"
        }
      },
      details: {
        title: "What TextLayer does",
        noteLabel: "Technical note",
        noteText: "Default capture hotkey: Ctrl+Shift+O",
        items: {
          one: "Region-based capture",
          two: "Selectable result overlay",
          three: "Local Windows OCR",
          four: "Local Tesseract OCR",
          five: "English and Russian interface",
          six: "Windows installer"
        }
      },
      privacy: {
        title: "Private by default",
        text: "TextLayer does not upload captured images to a server. Recognition runs locally on your computer.",
        diagramAria: "Local processing flow",
        diagram: {
          screen: "Screen region",
          ocr: "Local OCR",
          text: "Copyable text"
        },
        items: {
          cloud: "No cloud OCR",
          telemetry: "No telemetry",
          extension: "No browser extension",
          scanning: "No continuous screen-scanning loop"
        }
      },
      technical: {
        title: "Technical base",
        items: {
          platform: {
            label: "Platform",
            value: "Windows"
          },
          stack: {
            label: "App stack",
            value: "C#, .NET 9, WPF"
          },
          ocr: {
            label: "OCR engines",
            value: "Windows OCR and local Tesseract OCR"
          },
          distribution: {
            label: "Distribution",
            value: "GitHub Releases installer"
          },
          languages: {
            label: "Languages",
            value: "English and Russian"
          }
        }
      },
      download: {
        title: "Download TextLayer",
        text: "Windows installer for TextLayer v0.1.1.",
        button: "Download TextLayer v0.1.1",
        buttonAria: "Download TextLayer version 0.1.1",
        source: "Source code on GitHub",
        note: "OCR assets are bundled with the app."
      },
      limitations: {
        title: "Current limitations",
        items: {
          one: "OCR quality depends on image clarity and text size.",
          two: "Dense UI screenshots can be harder to recognize.",
          three: "Auto language detection is experimental.",
          four: "Region capture is currently selected-area based."
        }
      },
      footer: {
        text: "TextLayer — local OCR utility for Windows.",
        github: "GitHub",
        download: "Download"
      }
    },
    ru: {
      meta: {
        title: "TextLayer — локальное OCR для Windows",
        description: "TextLayer извлекает копируемый текст из скриншотов, изображений и другого невыделяемого контента на экране Windows."
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
        sourceAria: "Открыть страницу TextLayer на GitHub",
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
        useCases: "Сценарии",
        privacy: "Приватность",
        download: "Скачать"
      },
      hero: {
        label: "OCR-утилита для Windows",
        title: "Сделайте текст внутри изображений пригодным для работы",
        text: "TextLayer помогает извлекать копируемый текст из скриншотов, изображений из чатов, окон с ошибками, фрагментов сканов и другого невыделяемого контента на экране.",
        download: "Скачать для Windows",
        github: "Открыть на GitHub",
        trust: "Локальная обработка · Без облачного OCR · Без телеметрии"
      },
      mockup: {
        aria: "Превью продукта TextLayer",
        imageLabel: "Текст на изображении",
        textLabel: "Извлечённый текст",
        previewCaption: "Видимый текст в скриншотах и окнах приложений",
        line1: "Не удалось подключиться к серверу",
        line2: "Повторите запрос позже",
        line3: "Результат готов к копированию"
      },
      value: {
        title: "Зачем нужен TextLayer",
        blocks: {
          selection: {
            title: "Копируйте текст там, где приложения не дают его выделить",
            text: "Полезно для скриншотов, мессенджеров, лаунчеров, игрового интерфейса, окон поддержки и изображений, открытых в других приложениях."
          },
          local: {
            title: "Оставляйте распознавание локальным",
            text: "Захваченные области обрабатываются на вашем компьютере с Windows, а не отправляются в онлайн-сервис OCR."
          },
          utility: {
            title: "Используйте как настольную утилиту",
            text: "TextLayer задуман как небольшой инструмент для Windows, который остаётся под рукой, когда нужно поработать с визуальным текстом."
          }
        }
      },
      useCases: {
        title: "Где это помогает",
        text: "TextLayer нужен для моментов, когда текст виден, но его нельзя выделить. Вместо ручного перепечатывания можно извлечь его локально и вставить туда, куда нужно.",
        items: {
          one: "Скриншоты с текстом",
          two: "Изображения из Discord или Telegram",
          three: "Ошибки и логи на скриншотах",
          four: "Скриншоты игрового интерфейса или серверной информации",
          five: "Фрагменты сканов и превью документов",
          six: "Текст внутри изображений в браузере"
        }
      },
      details: {
        title: "Что делает TextLayer",
        noteLabel: "Техническая заметка",
        noteText: "Горячая клавиша захвата по умолчанию: Ctrl+Shift+O",
        items: {
          one: "Захват по выделенной области",
          two: "Выделяемый оверлей результата",
          three: "Локальное Windows OCR",
          four: "Локальный Tesseract OCR",
          five: "Интерфейс на английском и русском",
          six: "Установщик для Windows"
        }
      },
      privacy: {
        title: "Приватность по умолчанию",
        text: "TextLayer не загружает захваченные изображения на сервер. Распознавание выполняется локально на вашем компьютере.",
        diagramAria: "Схема локальной обработки",
        diagram: {
          screen: "Область экрана",
          ocr: "Локальное OCR",
          text: "Копируемый текст"
        },
        items: {
          cloud: "Без облачного OCR",
          telemetry: "Без телеметрии",
          extension: "Без расширения браузера",
          scanning: "Без постоянного цикла сканирования экрана"
        }
      },
      technical: {
        title: "Техническая основа",
        items: {
          platform: {
            label: "Платформа",
            value: "Windows"
          },
          stack: {
            label: "Стек приложения",
            value: "C#, .NET 9, WPF"
          },
          ocr: {
            label: "OCR-движки",
            value: "Windows OCR и локальный Tesseract OCR"
          },
          distribution: {
            label: "Распространение",
            value: "Установщик из GitHub Releases"
          },
          languages: {
            label: "Языки",
            value: "Английский и русский"
          }
        }
      },
      download: {
        title: "Скачать TextLayer",
        text: "Установщик TextLayer для Windows v0.1.1.",
        button: "Скачать TextLayer v0.1.1",
        buttonAria: "Скачать TextLayer версии 0.1.1",
        source: "Исходный код на GitHub",
        note: "OCR-ресурсы уже включены в приложение."
      },
      limitations: {
        title: "Текущие ограничения",
        items: {
          one: "Качество OCR зависит от чёткости изображения и размера текста.",
          two: "Плотные интерфейсные скриншоты могут распознаваться хуже.",
          three: "Автоопределение языка пока экспериментальное.",
          four: "Захват пока работает по выбранной области."
        }
      },
      footer: {
        text: "TextLayer — локальная OCR-утилита для Windows.",
        github: "GitHub",
        download: "Скачать"
      }
    }
  };

  var textNodes = document.querySelectorAll("[data-i18n]");
  var ariaNodes = document.querySelectorAll("[data-i18n-aria-label]");
  var titleNodes = document.querySelectorAll("[data-i18n-title]");
  var metaDescription = document.querySelector('meta[name="description"]');
  var languageButtons = document.querySelectorAll(".lang-button");
  var textFallbacks = new WeakMap();
  var ariaFallbacks = new WeakMap();
  var titleFallbacks = new WeakMap();
  var originalDocumentTitle = document.title;
  var originalMetaDescription = metaDescription ? metaDescription.getAttribute("content") || "" : "";
  var warnedKeys = Object.create(null);

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

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function rememberFallbacks() {
    textNodes.forEach(function (node) {
      textFallbacks.set(node, node.textContent);
    });

    ariaNodes.forEach(function (node) {
      ariaFallbacks.set(node, node.getAttribute("aria-label"));
    });

    titleNodes.forEach(function (node) {
      titleFallbacks.set(node, node.getAttribute("title"));
    });
  }

  function warnMissing(language, key, targetType) {
    var warningId = language + "|" + targetType + "|" + key;

    if (warnedKeys[warningId]) {
      return;
    }

    warnedKeys[warningId] = true;
    console.warn('[TextLayer i18n] Missing or empty "' + targetType + '" translation for "' + key + '" in "' + language + '".');
  }

  function resolveKey(language, key, targetType) {
    var dictionary = translations[language];
    var parts = key.split(".");
    var value = dictionary;
    var index = 0;

    while (index < parts.length) {
      if (!value || !Object.prototype.hasOwnProperty.call(value, parts[index])) {
        warnMissing(language, key, targetType);
        return null;
      }

      value = value[parts[index]];
      index += 1;
    }

    if (!isNonEmptyString(value)) {
      warnMissing(language, key, targetType);
      return null;
    }

    return value;
  }

  function applyTextFallback(node) {
    var fallback = textFallbacks.get(node);

    if (typeof fallback === "string") {
      node.textContent = fallback;
    }
  }

  function applyAttributeFallback(node, attributeName, fallbackMap) {
    var fallback = fallbackMap.get(node);

    if (typeof fallback === "string") {
      node.setAttribute(attributeName, fallback);
    }
  }

  function getInitialLanguage() {
    var storedLanguage = getStoredLanguage();

    if (SUPPORTED_LANGUAGES.indexOf(storedLanguage) !== -1) {
      return storedLanguage;
    }

    return DEFAULT_LANGUAGE;
  }

  function auditTranslationCoverage() {
    var auditTargets = [
      {
        nodes: textNodes,
        attribute: "data-i18n",
        type: "text"
      },
      {
        nodes: ariaNodes,
        attribute: "data-i18n-aria-label",
        type: "aria-label"
      },
      {
        nodes: titleNodes,
        attribute: "data-i18n-title",
        type: "title"
      }
    ];

    auditTargets.forEach(function (target) {
      var keys = Object.create(null);

      target.nodes.forEach(function (node) {
        var key = node.getAttribute(target.attribute);

        if (key) {
          keys[key] = true;
        }
      });

      Object.keys(keys).forEach(function (key) {
        SUPPORTED_LANGUAGES.forEach(function (language) {
          resolveKey(language, key, target.type);
        });
      });
    });

    SUPPORTED_LANGUAGES.forEach(function (language) {
      resolveKey(language, "meta.title", "document.title");
      resolveKey(language, "meta.description", "meta.description");
    });
  }

  function applyLanguage(language) {
    var activeLanguage = SUPPORTED_LANGUAGES.indexOf(language) !== -1 ? language : DEFAULT_LANGUAGE;
    var title = resolveKey(activeLanguage, "meta.title", "document.title");
    var description = resolveKey(activeLanguage, "meta.description", "meta.description");

    document.documentElement.lang = activeLanguage;
    document.title = title !== null ? title : originalDocumentTitle;

    if (metaDescription) {
      metaDescription.setAttribute("content", description !== null ? description : originalMetaDescription);
    }

    textNodes.forEach(function (node) {
      var translatedText = resolveKey(activeLanguage, node.getAttribute("data-i18n"), "text");

      if (translatedText !== null) {
        node.textContent = translatedText;
        return;
      }

      applyTextFallback(node);
    });

    ariaNodes.forEach(function (node) {
      var translatedAria = resolveKey(activeLanguage, node.getAttribute("data-i18n-aria-label"), "aria-label");

      if (translatedAria !== null) {
        node.setAttribute("aria-label", translatedAria);
        return;
      }

      applyAttributeFallback(node, "aria-label", ariaFallbacks);
    });

    titleNodes.forEach(function (node) {
      var translatedTitle = resolveKey(activeLanguage, node.getAttribute("data-i18n-title"), "title");

      if (translatedTitle !== null) {
        node.setAttribute("title", translatedTitle);
        return;
      }

      applyAttributeFallback(node, "title", titleFallbacks);
    });

    languageButtons.forEach(function (button) {
      var isActive = button.getAttribute("data-lang") === activeLanguage;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    setStoredLanguage(activeLanguage);
  }

  rememberFallbacks();
  auditTranslationCoverage();

  languageButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      applyLanguage(button.getAttribute("data-lang"));
    });
  });

  applyLanguage(getInitialLanguage());
})();
