import { LitElement, html, css } from "lit";
import { customElement, property, state, query } from "lit/decorators.js";

type LanguageCode = "en" | "zh-Hans";

@customElement("sw-toolbar")
export class SwToolbar extends LitElement {
  // Supported languages - code and path prefix are always the same
  private static readonly LANGUAGES: LanguageCode[] = ["en", "zh-Hans"];

  static override styles = css`
    :host {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 16px;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      z-index: 100;
      pointer-events: none;
    }
    md-menu,
    md-toolbar {
      pointer-events: auto;
    }
    #scroll-to-top {
      transition: 
        transform var(--md-sys-motion-std-effects-default-duration) var(--md-sys-motion-std-effects-default),
        margin-inline-start var(--md-sys-motion-std-effects-default-duration) var(--md-sys-motion-std-effects-default),
        opacity var(--md-sys-motion-std-effects-default-duration) var(--md-sys-motion-std-effects-default);
    }
    #scroll-to-top.hidden {
      transform: scale(0);
      margin-inline-start: -56px;
      opacity: 0;
      pointer-events: none;
    }
  `;

  @property({ type: String }) githubUrl = "https://github.com/vollowx/seele";
  @property({ type: Boolean }) rtl = false;

  @state() private themeMode: "light" | "dark" | "auto" = "auto";
  @state() private language: LanguageCode = "en";
  @state() private showScrollToTop = false;
  @state() private tooltipTexts = {
    rtl: ["Set direction to right-to-left", "Set direction to left-to-right"],
  };

  @query("#theme-menu") private _themeMenu?: HTMLElement & { open: boolean };
  @query("#language-menu") private _languageMenu?: HTMLElement & { open: boolean };

  private _prefersDarkQuery?: MediaQueryList;
  private _scrollListener?: () => void;

  override connectedCallback() {
    super.connectedCallback();
    this._setupThemeListener();
    this._setupScrollListener();
  }

  override firstUpdated() {
    this._loadThemePreference();
    this._loadDirectionPreference();
    this._loadLanguagePreference();
    this._applyTheme();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._prefersDarkQuery) {
      this._prefersDarkQuery.removeEventListener("change", this._handleSystemThemeChange);
    }
    if (this._scrollListener) {
      window.removeEventListener("scroll", this._scrollListener);
    }
  }

  private _loadThemePreference() {
    const stored = localStorage.getItem("sw-theme-preference");
    if (stored === "light" || stored === "dark" || stored === "auto") {
      this.themeMode = stored;
    }
  }

  private _saveThemePreference() {
    localStorage.setItem("sw-theme-preference", this.themeMode);
  }

  private _loadDirectionPreference() {
    const stored = localStorage.getItem("sw-direction-preference");
    if (stored === "rtl") {
      this.rtl = true;
      document.documentElement.dir = "rtl";
    } else {
      // Default to ltr if stored value is "ltr" or anything else (including null)
      this.rtl = false;
      document.documentElement.dir = "ltr";
    }
  }

  private _loadLanguagePreference() {
    // Detect language from URL path by iterating through supported languages
    const path = window.location.pathname;
    
    for (const lang of SwToolbar.LANGUAGES) {
      if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
        this.language = lang;
        return;
      }
    }
    
    // Fallback to default language (first in the list)
    this.language = SwToolbar.LANGUAGES[0];
  }

  private _saveDirectionPreference() {
    localStorage.setItem("sw-direction-preference", this.rtl ? "rtl" : "ltr");
  }

  private _setupThemeListener() {
    this._prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this._prefersDarkQuery.addEventListener("change", this._handleSystemThemeChange);
  }

  private _setupScrollListener() {
    this._scrollListener = () => {
      const shouldShow = window.scrollY > 100;
      if (this.showScrollToTop !== shouldShow) {
        this.showScrollToTop = shouldShow;
      }
    };
    window.addEventListener("scroll", this._scrollListener, { passive: true });
    // Initialize scroll state immediately
    this._scrollListener();
  }

  private _handleSystemThemeChange = () => {
    if (this.themeMode === "auto") {
      this._applyTheme();
    }
  };

  private _applyTheme() {
    if (this.themeMode === "auto") {
      const prefersDark = this._prefersDarkQuery?.matches ??
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.dataset["mdTheme"] = prefersDark ? "dark" : "light";
    } else {
      document.documentElement.dataset["mdTheme"] = this.themeMode;
    }
  }

  private _getTooltipText(type: "rtl", checked: boolean): string {
    return this.tooltipTexts[type][checked ? 1 : 0];
  }

  private _toggleThemeMenu() {
    if (this._themeMenu) {
      this._themeMenu.open = !this._themeMenu.open;
    }
  }

  private _toggleLanguageMenu() {
    if (this._languageMenu) {
      this._languageMenu.open = !this._languageMenu.open;
    }
  }

  private _handleThemeSelect(e: CustomEvent) {
    const selectedItem = e.detail.item as HTMLElement;
    const themeValue = selectedItem.dataset.theme as "light" | "dark" | "auto";
    if (themeValue) {
      this.themeMode = themeValue;
      this._applyTheme();
      this._saveThemePreference();
    }
  }

  private _handleLanguageSelect(e: CustomEvent) {
    const selectedItem = e.detail.item as HTMLElement;
    const langValue = selectedItem.dataset.language as LanguageCode;
    if (langValue && langValue !== this.language) {
      this._switchLanguage(langValue);
    }
  }

  private _switchLanguage(lang: LanguageCode) {
    const currentPath = window.location.pathname;
    
    // Extract the path after the language prefix by iterating through languages
    let pathWithoutLang = currentPath;
    for (const langCode of SwToolbar.LANGUAGES) {
      const prefix = `/${langCode}`;
      if (currentPath.startsWith(prefix + "/")) {
        pathWithoutLang = currentPath.substring(prefix.length);
        break;
      } else if (currentPath === prefix) {
        pathWithoutLang = "/";
        break;
      }
    }
    
    // Build new path with target language (code and prefix are the same)
    const newPath = pathWithoutLang === "" || pathWithoutLang === "/"
      ? `/${lang}/`
      : `/${lang}${pathWithoutLang}`;
    
    // Update state before redirecting for consistency
    this.language = lang;
    window.location.href = newPath;
  }

  private _handleDir(e: CustomEvent) {
    this.rtl = e.detail;
    document.documentElement.dir = this.rtl ? "rtl" : "ltr";
    this._saveDirectionPreference();
  }

  private _handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  private _handleGithubClick() {
    window.open(this.githubUrl, "_blank");
  }

  override render() {
    return html`
      <md-menu
        id="theme-menu"
        for="action-toggle-theme"
        offset="16"
        align="top"
        alignStrategy="fixed"
        @select=${this._handleThemeSelect}
      >
        <md-menu-item data-theme="light" ?selected=${this.themeMode === "light"}>
          Light
        </md-menu-item>
        <md-menu-item data-theme="dark" ?selected=${this.themeMode === "dark"}>
          Dark
        </md-menu-item>
        <md-menu-item data-theme="auto" ?selected=${this.themeMode === "auto"}>
          Device Default
        </md-menu-item>
      </md-menu>

      <md-menu
        id="language-menu"
        for="action-toggle-language"
        offset="16"
        align="top"
        alignStrategy="fixed"
        @select=${this._handleLanguageSelect}
      >
        <md-menu-item data-language="en" ?selected=${this.language === "en"}>
          English
        </md-menu-item>
        <md-menu-item data-language="zh-Hans" ?selected=${this.language === "zh-Hans"}>
          简体中文
        </md-menu-item>
      </md-menu>

      <md-toolbar type="floating" color="vibrant">
        <md-icon-button
          id="action-open-repo"
          aria-label="GitHub repository"
          @click=${this._handleGithubClick}
        >
          <iconify-icon icon="mdi:github"></iconify-icon>
        </md-icon-button>
        <md-tooltip for="action-open-repo" offset="16">View source code</md-tooltip>

        <md-icon-button-toggle
          id="action-toggle-direction"
          variant="tonal"
          ?checked=${this.rtl}
          @change=${this._handleDir}
        >
          <iconify-icon icon="material-symbols:format-textdirection-r-to-l"></iconify-icon>
          <iconify-icon slot="checked" icon="material-symbols:format-textdirection-l-to-r"></iconify-icon>
        </md-icon-button-toggle>
        <md-tooltip for="action-toggle-direction" offset="16">
          ${this._getTooltipText("rtl", this.rtl)}
        </md-tooltip>

        <md-icon-button
          id="action-toggle-language"
          @click=${this._toggleLanguageMenu}
        >
          <iconify-icon icon="material-symbols:translate"></iconify-icon>
        </md-icon-button>
        <md-tooltip for="action-toggle-language" offset="16">
          Change language
        </md-tooltip>

        <md-icon-button
          id="action-toggle-theme"
          @click=${this._toggleThemeMenu}
        >
          <iconify-icon icon="material-symbols:palette"></iconify-icon>
        </md-icon-button>
        <md-tooltip for="action-toggle-theme" offset="16">
          Change theme
        </md-tooltip>

        <md-fab
          slot="fab"
          color="tertiary"
          id="scroll-to-top"
          class=${this.showScrollToTop ? "" : "hidden"}
          @click=${this._handleScrollToTop}
        >
          <iconify-icon icon="material-symbols:arrow-upward"></iconify-icon>
        </md-fab>
        <md-tooltip for="scroll-to-top" offset="8">Scroll to top</md-tooltip>
      </md-toolbar>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sw-toolbar": SwToolbar;
  }
}
