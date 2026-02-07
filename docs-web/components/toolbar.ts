import { LitElement, html, css } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { M3Menu } from '@vollowx/seele';

type LanguageCode = 'en-US' | 'zh-CN';
const LANGUAGES: LanguageCode[] = ['en-US', 'zh-CN'];

@customElement('sw-toolbar')
export class SwToolbar extends LitElement {
  static override styles = css`
    :host {
      display: contents;
    }
    md-toolbar {
      --margin-start: 16px;
      --margin-end: auto;
      position: fixed;
      bottom: 16px;
      z-index: 100;
    }
    md-toolbar#nav-toolbar {
      left: var(--margin-start);
      right: var(--margin-end);
      view-transition-name: nav-toolbar;
    }
    md-toolbar#config-toolbar {
      left: var(--margin-end);
      right: var(--margin-start);
      view-transition-name: config-toolbar;
    }
    :host(:dir(rtl)) md-toolbar {
      --margin-start: auto;
      --margin-end: 16px;
    }
    #theme-menu {
      min-width: 180px;
    }
    /* TODO: Remove after SEELE gets this styled */
    [slot=end] {
      block-size: 1em;
      font-size: 24px;
      inline-size: 1em;
    }
  `;

  @property({ type: String }) githubUrl = 'https://github.com/vollowx/seele';
  @property({ type: Boolean }) rtl = false;

  @state() private themeMode: 'light' | 'dark' | 'auto' = 'auto';
  @state() private language: LanguageCode = 'en-US';

  private readonly _tooltipTexts = {
    'en-US': {
      rtl: ['Set direction to right-to-left', 'Set direction to left-to-right'],
      language: 'Change language',
      theme: 'Change theme',
      github: 'View source code',
      themeLight: 'Light',
      themeDark: 'Dark',
      themeAuto: 'Device Default',
    },
    'zh-CN': {
      rtl: ['设置文本方向为从右到左', '设置文本方向为从左到右'],
      language: '更改语言',
      theme: '更改主题',
      github: '查看源代码',
      themeLight: '浅色',
      themeDark: '深色',
      themeAuto: '跟随设备',
    },
  };

  @query('#theme-menu') private _themeMenu!: M3Menu;
  @query('#language-menu') private _languageMenu!: M3Menu;

  private _prefersDarkQuery?: MediaQueryList;

  override connectedCallback() {
    super.connectedCallback();
    this._setupThemeListener();
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
      this._prefersDarkQuery.removeEventListener(
        'change',
        this._handleSystemThemeChange,
      );
    }
  }

  private _loadThemePreference() {
    const stored = localStorage.getItem('sw-theme-preference');
    if (stored === 'light' || stored === 'dark' || stored === 'auto') {
      this.themeMode = stored;
    }
  }

  private _saveThemePreference() {
    localStorage.setItem('sw-theme-preference', this.themeMode);
  }

  private _loadDirectionPreference() {
    const stored = localStorage.getItem('sw-direction-preference');
    if (stored === 'rtl') {
      this.rtl = true;
      document.documentElement.dir = 'rtl';
    } else {
      // Default to ltr if stored value is "ltr" or anything else (including null)
      this.rtl = false;
      document.documentElement.dir = 'ltr';
    }
  }

  private _loadLanguagePreference() {
    // Detect language from URL path by iterating through supported languages
    const path = window.location.pathname;

    for (const lang of LANGUAGES) {
      if (path.startsWith(`/${lang}/`) || path === `/${lang}`) {
        this.language = lang;
        return;
      }
    }

    this.language = LANGUAGES[0];
  }

  private _saveDirectionPreference() {
    localStorage.setItem('sw-direction-preference', this.rtl ? 'rtl' : 'ltr');
  }

  private _setupThemeListener() {
    this._prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this._prefersDarkQuery.addEventListener(
      'change',
      this._handleSystemThemeChange,
    );
  }

  private _handleSystemThemeChange = () => {
    if (this.themeMode === 'auto') {
      this._applyTheme();
    }
  };

  private _applyTheme() {
    if (this.themeMode === 'auto') {
      const prefersDark =
        this._prefersDarkQuery?.matches ??
        window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.dataset['mdTheme'] = prefersDark
        ? 'dark'
        : 'light';
    } else {
      document.documentElement.dataset['mdTheme'] = this.themeMode;
    }
  }

  private _getTooltipText(
    type:
      | 'rtl'
      | 'language'
      | 'theme'
      | 'github'
      | 'themeLight'
      | 'themeDark'
      | 'themeAuto',
    checked?: boolean,
  ): string {
    const texts = this._tooltipTexts[this.language];

    if (type === 'rtl' && checked !== undefined) {
      return texts.rtl[checked ? 1 : 0];
    }

    return texts[type] as string;
  }

  private _toggleThemeMenu() {
    this._themeMenu.open = !this._themeMenu.open;
  }

  private _toggleLanguageMenu() {
    this._languageMenu.open = !this._languageMenu.open;
  }

  private _handleThemeSelect(e: CustomEvent) {
    const selectedItem = e.detail.item as HTMLElement;
    const themeValue = selectedItem.dataset.theme as 'light' | 'dark' | 'auto';
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
    for (const langCode of LANGUAGES) {
      const prefix = `/${langCode}`;
      if (currentPath.startsWith(prefix + '/')) {
        pathWithoutLang = currentPath.substring(prefix.length);
        break;
      } else if (currentPath === prefix) {
        pathWithoutLang = '/';
        break;
      }
    }

    // Build new path with target language (code and prefix are the same)
    const newPath =
      pathWithoutLang === '/' ? `/${lang}/` : `/${lang}${pathWithoutLang}`;

    // Update state before redirecting for consistency
    this.language = lang;
    window.location.href = newPath;
  }

  private _handleDir(e: CustomEvent) {
    this.rtl = e.detail;
    document.documentElement.dir = this.rtl ? 'rtl' : 'ltr';
    this._saveDirectionPreference();
  }

  private handleIndexClick() {
    window.location.href = `/${this.language}/`;
  }

  private _handleGithubClick() {
    window.open(this.githubUrl, '_blank');
  }

  // Just a reminder:
  // Tooltip/menu offset: 16px for icon buttons and 8px for FABs
  override render() {
    return html`
      <md-toolbar id="nav-toolbar" type="floating">
        <md-icon-button
          id="action-back-to-index"
          @click=${this.handleIndexClick}
        >
          <iconify-icon icon="mdi:home"></iconify-icon>
        </md-icon-button>
        <md-tooltip for="action-back-to-index" offset="16"
          >${this.language === 'en-US' ? 'Home' : '首页'}</md-tooltip
        >

        <md-icon-button
          id="action-open-repo"
          aria-label="GitHub repository"
          @click=${this._handleGithubClick}
        >
          <iconify-icon icon="mdi:github"></iconify-icon>
        </md-icon-button>
        <md-tooltip for="action-open-repo" offset="16"
          >${this._getTooltipText('github')}</md-tooltip
        >
      </md-toolbar>
      <md-toolbar id="config-toolbar" type="floating" color="vibrant">
        <md-icon-button-toggle
          id="action-toggle-direction"
          variant="tonal"
          ?checked=${this.rtl}
          @change=${this._handleDir}
        >
          <iconify-icon
            icon="material-symbols:format-textdirection-r-to-l"
          ></iconify-icon>
          <iconify-icon
            slot="checked"
            icon="material-symbols:format-textdirection-l-to-r"
          ></iconify-icon>
        </md-icon-button-toggle>
        <md-tooltip for="action-toggle-direction" offset="16">
          ${this._getTooltipText('rtl', this.rtl)}
        </md-tooltip>

        <md-icon-button
          id="action-toggle-language"
          @click=${this._toggleLanguageMenu}
        >
          <iconify-icon icon="material-symbols:translate"></iconify-icon>
        </md-icon-button>
        <md-tooltip for="action-toggle-language" offset="16">
          ${this._getTooltipText('language')}
        </md-tooltip>

        <md-icon-button
          id="action-toggle-theme"
          @click=${this._toggleThemeMenu}
        >
          <iconify-icon icon="material-symbols:palette"></iconify-icon>
        </md-icon-button>
        <md-tooltip for="action-toggle-theme" offset="16">
          ${this._getTooltipText('theme')}
        </md-tooltip>

        <md-menu
          id="theme-menu"
          for="action-toggle-theme"
          offset="16"
          color="vibrant"
          align="top"
          align-strategy="fixed"
          @select=${this._handleThemeSelect}
        >
          <md-menu-item
            data-theme="light"
            ?selected=${this.themeMode === 'light'}
          >
            ${this._getTooltipText('themeLight')}
            <iconify-icon icon="material-symbols:light-mode" slot="end"></iconify-icon>
          </md-menu-item>
          <md-menu-item
            data-theme="dark"
            ?selected=${this.themeMode === 'dark'}
          >
            ${this._getTooltipText('themeDark')}
            <iconify-icon icon="material-symbols:dark-mode" slot="end"></iconify-icon>
          </md-menu-item>
          <md-menu-item
            data-theme="auto"
            ?selected=${this.themeMode === 'auto'}
          >
            ${this._getTooltipText('themeAuto')}
            <iconify-icon icon="material-symbols:brightness-auto" slot="end"></iconify-icon>
          </md-menu-item>
        </md-menu>

        <md-menu
          id="language-menu"
          for="action-toggle-language"
          offset="16"
          color="vibrant"
          align="top"
          align-strategy="fixed"
          @select=${this._handleLanguageSelect}
        >
          <md-menu-item
            data-language="en-US"
            ?selected=${this.language === 'en-US'}
          >
            English
          </md-menu-item>
          <md-menu-item
            data-language="zh-CN"
            ?selected=${this.language === 'zh-CN'}
          >
            中文（简体）
          </md-menu-item>
        </md-menu>
      </md-toolbar>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sw-toolbar': SwToolbar;
  }
}
