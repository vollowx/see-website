---
title: SEELE - Choose Language
layout: minimal.njk
toc: false
---

# SEELE Documentation

## Available Languages

- [English](en/)
- [简体中文 (Simplified Chinese)](zh-Hans/)
- [繁體中文 (Traditional Chinese)](zh-Hant/)

<script>
(function() {
  // Auto-redirect based on browser language
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.toLowerCase();
  const basePath = '/seele-docs';
  
  // Map browser language codes to our supported languages
  if (langCode.startsWith('zh-hant') || langCode.startsWith('zh-tw') || langCode.startsWith('zh-hk') || langCode.startsWith('zh-mo')) {
    window.location.href = basePath + '/zh-Hant/';
  } else if (langCode.startsWith('zh')) {
    window.location.href = basePath + '/zh-Hans/';
  } else {
    // Default to English for all other languages
    window.location.href = basePath + '/en/';
  }
})();
</script>
