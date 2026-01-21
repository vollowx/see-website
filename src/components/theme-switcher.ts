import { LitElement, html, css } from "lit";
import { customElement, state } from "lit/decorators.js";

const THEME_STORAGE_KEY = "sw-theme-preference";

@customElement("sw-theme-switcher")
export class SwThemeSwitcher extends LitElement {
  static override styles = css`
    :host {
      display: contents;
    }
  `;

  @state() private themeMode: "light" | "dark" | "auto" = "auto";

  private _prefersDarkQuery?: MediaQueryList;

  override connectedCallback() {
    super.connectedCallback();
    this._loadThemePreference();
    this._setupThemeListener();
    this._applyTheme();
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    if (this._prefersDarkQuery) {
      this._prefersDarkQuery.removeEventListener("change", this._handleSystemThemeChange);
    }
  }

  private _loadThemePreference() {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "auto") {
      this.themeMode = stored;
    }
  }

  private _saveThemePreference() {
    localStorage.setItem(THEME_STORAGE_KEY, this.themeMode);
  }

  private _setupThemeListener() {
    this._prefersDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    this._prefersDarkQuery.addEventListener("change", this._handleSystemThemeChange);
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

  private _handleThemeSelect(e: CustomEvent) {
    const selectedItem = e.detail.item as HTMLElement;
    const themeValue = selectedItem.dataset.theme as "light" | "dark" | "auto";
    if (themeValue) {
      this.themeMode = themeValue;
      this._applyTheme();
      this._saveThemePreference();
    }
  }

  override render() {
    return html`
      <md-menu
        id="theme-menu"
        for="action-toggle-theme"
        align="top-end"
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
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sw-theme-switcher": SwThemeSwitcher;
  }
}
