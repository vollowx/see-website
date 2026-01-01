import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("sw-toolbar")
export class SwToolbar extends LitElement {
  static override styles = css`
    md-toolbar {
      position: fixed;
      bottom: 16px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 100;
    }
    md-icon {
      display: inline-block;
      font-family: "Material Symbols Rounded";
      font-style: normal;
      font-weight: normal;
      letter-spacing: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      word-wrap: normal;
    }
  `;

  @property({ type: String }) githubUrl = "https://github.com/vollowx/see";
  @property({ type: Boolean }) darkMode = true;
  @property({ type: Boolean }) rtl = false;

  @state() private tooltipTexts = {
    dark: ["Turn off the light", "Turn on the light"],
    rtl: ["Set direction to right-to-left", "Set direction to left-to-right"],
  };

  override connectedCallback() {
    super.connectedCallback();
    this._initializeTheme();
  }

  private _initializeTheme() {
    document.documentElement.dataset["mdTheme"] = this.darkMode
      ? "dark"
      : "light";
    document.documentElement.dir = this.rtl ? "rtl" : "ltr";
  }

  private _getTooltipText(type: "dark" | "rtl", checked: boolean): string {
    return this.tooltipTexts[type][checked ? 1 : 0];
  }

  private _handleTheme(e: CustomEvent) {
    this.darkMode = e.detail;
    document.documentElement.dataset["mdTheme"] = this.darkMode
      ? "dark"
      : "light";
  }

  private _handleDir(e: CustomEvent) {
    this.rtl = e.detail;
    document.documentElement.dir = this.rtl ? "rtl" : "ltr";
  }

  private _handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  private _handleGithubClick() {
    window.open(this.githubUrl, "_blank");
  }

  override render() {
    return html`
      <md-toolbar type="floating">
        <md-icon-button-toggle
          id="action-toggle-theme"
          variant="tonal"
          ?checked=${this.darkMode}
          @change=${this._handleTheme}
        >
          <md-icon aria-label="Turn on the light">dark_mode</md-icon>
          <md-icon slot="checked" aria-label="Turn off the light">
            light_mode
          </md-icon>
        </md-icon-button-toggle>
        <md-tooltip for="action-toggle-theme">
          ${this._getTooltipText("dark", this.darkMode)}
        </md-tooltip>

        <md-icon-button-toggle
          id="action-toggle-direction"
          variant="tonal"
          ?checked=${this.rtl}
          @change=${this._handleDir}
        >
          <md-icon aria-label="Set direction to RTL">
            format_textdirection_r_to_l
          </md-icon>
          <md-icon slot="checked" aria-label="Set direction to LTR">
            format_textdirection_l_to_r
          </md-icon>
        </md-icon-button-toggle>
        <md-tooltip for="action-toggle-direction">
          ${this._getTooltipText("rtl", this.rtl)}
        </md-tooltip>

        <md-icon-button
          id="action-open-repo"
          aria-label="GitHub repository"
          @click=${this._handleGithubClick}
        >
          <md-icon>code_blocks</md-icon>
        </md-icon-button>
        <md-tooltip for="action-open-repo">View source on GitHub</md-tooltip>

        <md-fab
          slot="fab"
          color="tertiary"
          id="scroll-to-top"
          @click=${this._handleScrollToTop}
        >
          <md-icon>arrow_upward</md-icon>
        </md-fab>
        <md-tooltip for="scroll-to-top">Scroll to top</md-tooltip>
      </md-toolbar>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "sw-toolbar": SwToolbar;
  }
}
